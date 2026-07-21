# CLAUDE.md

Instructies voor Claude Code bij het bouwen van websites/apps voor LionCraft-projecten.

## Werkwijze

- **Altijd eerst plan/specs, dan pas bouwen.** Geen code schrijven zonder expliciete goedkeuring van het plan.
- Geef geen code of scripts tenzij ik er expliciet om vraag. Begin met uitleg, advies of opties.
- Kleine, behapbare stappen. Geen grote refactors of features in één keer zonder overleg.
- Ik test altijd zelf visueel in de browser, ook als jij het technisch zelf kan controleren. Bouw dus geen eigen visuele testflows tenzij ik erom vraag.
- Geen uitgebreide verslagen of samenvattingen na een taak, tenzij ik erom vraag. Dan max. 2 zinnen.
- Wees direct en compact. Geen filler, geen overbodige uitleg.

## Tech stack (standaard)

- **Frontend:** Astro, React islands waar nodig
- **Styling:** SCSS — geen inline CSS, geen losse CSS-in-JS tenzij het project dat al gebruikt
- **Backend/DB (indien relevant):** Supabase
- **Hosting:** Vercel
- **Payments (indien relevant):** Stripe
- **CMS (indien relevant):** Sanity

## Code-stijl

- Token-efficiëntie is belangrijk: geen overbodige comments, geen boilerplate die niet gebruikt wordt.
- Semantische HTML, toegankelijkheid (screenreaders, kleurcontrast) en mobile-first zijn verplicht, niet optioneel.
- Consistent met bestaande projectstructuur — eerst codebase/structuur bekijken voor je iets toevoegt.

## Wat te negeren / niet doen

- Geen aannames maken over scope — bij twijfel vragen, niet zelf invullen.
- Geen nieuwe dependencies/libraries toevoegen zonder te vragen.
- Geen commits/deploys uitvoeren zonder expliciete opdracht.
- Geen "opgeruimde" herstructurering van bestaande code als daar niet om gevraagd is.
- Geen overdreven documentatie of uitgebreide toelichtingen genereren.

## Mappen om te negeren

Deze mappen zijn build-output, cache of dependencies — nooit lezen of bewerken tenzij expliciet gevraagd:

- `.astro` — Astro buildcache, automatisch gegenereerd
- `dist` — buildoutput
- `node_modules` — dependencies
- `.claude-flow` — tool-config/state, niet relevant voor codebase-context
- `.impeccable` — tool-specifieke config/cache (check per project of dit relevant is)

## Kennisbronnen (Obsidian vault)

Bij technische of strategische vragen eerst de relevante department-orchestrator raadplegen. Deze verwijzen zelf door naar de juiste specifieke agent-file:

- **Development / technische keuzes:** `/Users/viktor/Werk/Obsidian/Company departments/Development/_CTO-orchestrator.md`
- **Marketing / copy / SEO / content / design:** `/Users/viktor/Werk/Obsidian/Company departments/Marketing/_CMO-orchestrator.md`

Alleen bereikbaar als Claude Code toegang heeft tot dit pad (start binnen of boven deze directory).

## Communicatie

- Nederlands, tenzij anders aangegeven.
- Eerlijke, directe feedback: zeg wat er niet klopt en waarom.
- Vraag door bij onduidelijkheden in plaats van te gokken.
