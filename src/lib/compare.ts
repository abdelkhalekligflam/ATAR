import { events, type HistoryEvent } from "./history";
export const comparisonPresets = [
 ["writing","egypt-unification"], ["roman-empire","qin-unification"],
 ["mali-empire","tenochtitlan"], ["atlantic-contact","reformation"],
 ["american-independence","french-revolution"], ["india-pakistan","south-africa-democracy"],
] as const;
export function counterpart(event:HistoryEvent):HistoryEvent {
 const candidates=events.filter(e=>e.slug!==event.slug);
 const regional=candidates.filter(e=>e.region!==event.region&&e.era===event.era);
 const thematic=regional.filter(e=>e.theme===event.theme);
 const pool=thematic.length?thematic:regional.length?regional:candidates;
 return [...pool].sort((a,b)=>Math.abs(a.year-event.year)-Math.abs(b.year-event.year))[0];
}
export function resolvePair(left?:string,right?:string):[HistoryEvent,HistoryEvent]{
 const a=events.find(e=>e.slug===left)??events.find(e=>e.slug==='american-independence')!;
 const b=events.find(e=>e.slug===right&&e.slug!==a.slug)??counterpart(a);
 return [a,b];
}
export function comparisonHref(lang:string,left:string,right?:string){const [a,b]=resolvePair(left,right);return `/${lang}/compare?left=${a.slug}&right=${b.slug}`;}
