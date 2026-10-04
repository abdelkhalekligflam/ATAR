# ATAR — أثر

A multilingual digital museum built with Next.js, TypeScript and Tailwind CSS.

## Run

```sh
npm ci
npm run dev
```

Open `/fr`, `/en` or `/ar`. The root redirects to French.

## Features

- Responsive museum-inspired home, timeline explorer, detail and editorial pages.
- French, English and Arabic content, including RTL layouts.
- Search, era and theme filters, chronological sorting, reset and empty states.
- Dark/light theme toggle (session state).
- Six sourced introductory heritage milestones. The planned collection of 20 events and international parallel narratives remain future editorial work.

## Content and images

`src/lib/history.ts` contains the initial notices and UNESCO references. Approximate periods are displayed as ranges or centuries. The imported Stitch illustrations have unverified provenance and are labelled accordingly. They must not be presented as authentic archival photographs. Historical border mapping is not implemented.

## Checks

```sh
npm run lint
npm run build
```
