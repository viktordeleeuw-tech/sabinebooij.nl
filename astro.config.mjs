import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const stripRegex = /\s+data-astro-source-(?:file|loc)="[^"]*"/g;

const stripDevPlugin = {
  name: 'strip-astro-debug-dev',
  apply: 'serve',
  configResolved(config) {
    // Setup for dev server
  },
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        if (!req.url.includes('.') || req.url.endsWith('.html')) {
          const send = res.send;
          res.send = function(data) {
            if (typeof data === 'string') {
              data = data.replace(stripRegex, '');
            }
            return send.call(this, data);
          };
        }
        next();
      });
    };
  }
};

function stripDebugAttrs() {
  return {
    name: 'strip-debug-attrs-integration',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distPath = fileURLToPath(dir);
        walk(distPath);
      }
    }
  };
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const cleaned = content.replace(stripRegex, '');
      fs.writeFileSync(full, cleaned);
    }
  });
}

export default defineConfig({
  server: {
    port: 4360,
    host: true,
    middlewareMode: false
  },
  integrations: [stripDebugAttrs()],
  vite: {
    build: { sourcemap: false },
    define: { 'import.meta.env.ASTRO_HYDRATION_ERROR_MESSAGES': 'false' }
  }
});
