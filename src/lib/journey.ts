import { events, type HistoryEvent, type Region } from "./history";
export function nearestEvent(year:number){let best=0;for(let i=1;i<events.length;i++)if(Math.abs(events[i].year-year)<Math.abs(events[best].year-year))best=i;return best;}
export const regionPoints:Record<Region,[number,number]>={africa:[18,4],asia:[105,35],middleEast:[42,30],europe:[15,51],americas:[-91,22],oceania:[145,-25],global:[-25,-33]};
export function project([lon,lat]:[number,number]){return[(lon+180)*2,(90-lat)*2];}

export function sceneFor(event:HistoryEvent){if(event.slug==='writing')return 'writing';if(event.era==='contemporary')return event.slug==='apollo-11'?'contemporary':event.theme==='conflict'?'conflict':'modern';return event.era;}
