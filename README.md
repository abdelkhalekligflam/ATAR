# ATAR — A history of the world

Multilingual world-history explorer built with Next.js, TypeScript and Tailwind CSS.

## Run

```sh
npm ci
npm run dev
```

The root redirects to French. `/fr`, `/en`, `/ar` provide fully translated interfaces and event notices, with Arabic RTL.

## Collection

47 selected world-history milestones span the emergence of Homo sapiens approximately 300,000 years ago through the entry into force of the High Seas Treaty in January 2026. Africa, Asia, the Near East, Europe, the Americas, Oceania and global events are represented. This is an introductory editorial selection, not an exhaustive history.

Each event includes a date, location, overview, historical significance and a source link. Approximate dates and conventional chronology markers are identified. Events near one another can be shown in “Elsewhere, in the same era”; proximity does not imply causation.

## Explorer

Search, six era filters, seven region filters, seven theme filters, signed year range (negative = BCE), chronological sorting, shareable filter URLs, reset, empty/error states and progressive loading.

Dark/light preference persists in local storage. Locale switching preserves filter queries. Previous/next event navigation follows chronological order.

## Editorial notes

Period boundaries are navigation conventions and are not universal cultural divisions. No year zero is used. The species-origin date is an approximate age, not an exact BCE date. Eleven cinematic images were generated with the built-in image generator and optimized as WebP. They are artistic interpretations, not archival evidence or exact event reconstructions. The public-domain Natural Earth land dataset supplies present-day coastlines, with indicative regional markers and no historical borders. Source references are recorded in `src/lib/history.ts`; editorial review date: 2026-10-04.

## Checks

```sh
npm run lint
npm run build
```

## Cinematic journey

The home page is an interactive time machine: 47 chronological stops, era shortcuts, previous/next controls, opt-in playback, signed-year jump to the nearest selected event, and shareable event URLs. The atlas shows region-specific stories in the chosen era. Six cinematic chapter covers open distinct eras. Event pages use full-width imagery, three narrative sections, source references and contemporaneous stories where available.

Asset prompts and provenance: `public/images/journey/ASSETS.md`.

## Compare stories

`/[lang]/compare` juxtaposes two distinct events with era-grouped selectors, a swap control, six suggested pairs, dates, regions, summaries, impact and source links. Pairs can be shared via URL and retained when switching languages. Invalid or duplicate slugs resolve to a distinct regional counterpart, preferring the same era and theme before date proximity. Comparisons do not imply causation.
