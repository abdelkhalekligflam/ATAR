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

Period boundaries are navigation conventions and are not universal cultural divisions. No year zero is used. The species-origin date is an approximate age, not an exact BCE date. Original SVG engravings are symbolic illustrations and are not archival evidence. Source references are recorded in `src/lib/history.ts`; editorial review date: 2026-10-04.

## Checks

```sh
npm run lint
npm run build
```
