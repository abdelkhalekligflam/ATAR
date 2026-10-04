"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { events, eras, formatDate, type Language, type HistoryEvent } from "@/lib/history";
import { comparisonPresets, resolvePair } from "@/lib/compare";
import { compareCopy } from "@/lib/compare-copy";
import { copy } from "@/lib/i18n";
import { journeyCopy } from "@/lib/journey-copy";
import { sceneFor } from "@/lib/journey";
export function CompareStories({lang,left,right}:{lang:Language;left:string;right:string}){
 const c=compareCopy[lang],t=copy[lang],j=journeyCopy[lang];const [pair,setPair]=useState<[string,string]>([left,right]);const [share,setShare]=useState<'idle'|'copied'|'failed'>('idle');const [url,setUrl]=useState('');const [a,b]=resolvePair(...pair);
 useEffect(()=>{const next=new URL(window.location.href);next.searchParams.set('left',a.slug);next.searchParams.set('right',b.slug);window.history.replaceState(null,'',next.pathname+next.search);},[a.slug,b.slug]);
 function pick(side:0|1,slug:string){const next:[string,string]=[...pair];next[side]=slug;const resolved=side===0?resolvePair(...next):resolvePair(next[1],next[0]).reverse() as [HistoryEvent,HistoryEvent];setPair([resolved[0].slug,resolved[1].slug]);setShare('idle');}
 async function copyLink(){try{await navigator.clipboard.writeText(window.location.href);setShare('copied');}catch{setShare('failed');setUrl(window.location.href);}}
 const stories=[a,b];
 return <main id="content" className="compare-page container"><div className="compare-heading"><p className="eyebrow">ATAR / {c.nav}</p><h1>{c.title}</h1><p className="hero-description">{c.intro}</p></div>
 <div className="compare-controls">{[0,1].map(side=><label key={side}>{side===0?c.left:c.right}<select value={pair[side]} onChange={e=>pick(side as 0|1,e.target.value)}>{eras.map(era=><optgroup key={era} label={t[era]}>{events.filter(e=>e.era===era).map(event=><option key={event.slug} value={event.slug} disabled={event.slug===pair[side===0?1:0]}>{formatDate(event,lang)} — {event.title[lang]}</option>)}</optgroup>)}</select></label>)}<button className="compare-swap" onClick={()=>{setPair([pair[1],pair[0]]);setShare('idle');}} aria-label={c.swap}>⇄</button></div>
 <div className="compare-meta"><span>{a.era===b.era?c.sameEra:c.differentEra}</span><button onClick={copyLink}>{c.share} ↗</button></div><p className="share-status" role="status">{share==='copied'?c.copied:share==='failed'?c.copyFailed:''}</p>{share==='failed'&&<label className="share-fallback">{c.url}<input readOnly value={url} onFocus={e=>e.currentTarget.select()}/></label>}
 <div className="compare-grid">{stories.map((event,side)=><article key={`column-${side}`} className="compare-story"><div className="compare-cover"><Image src={`/images/journey/${sceneFor(event)}.webp`} alt="" fill sizes="(max-width:700px) 100vw, 50vw"/><div className="compare-cover-shade"/><span className="compare-side">0{side+1} / {t[event.region]}</span><div><p>{formatDate(event,lang)}</p><h2>{event.title[lang]}</h2></div></div><div className="comparison-facts"><section><p className="eyebrow">{c.date}</p><p>{formatDate(event,lang)} · {t[event.era]}</p>{event.approximate&&<small>{t.approximate}</small>}</section><section><p className="eyebrow">{c.place}</p><p>{event.place[lang]} · {t[event.region]}</p></section><section><p className="eyebrow">{c.what}</p><p>{event.summary[lang]}</p></section><section><p className="eyebrow">{c.impact}</p><p>{event.impact[lang]}</p></section><section><p className="eyebrow">{c.source}</p><a href={event.source} target="_blank" rel="noopener noreferrer">{event.sourceName} ↗</a></section><Link className="journey-button" href={`/${lang}/events/${event.slug}`}>{c.open} ↗</Link></div></article>)}</div>
 <p className="comparison-note">{c.note}</p><p className="image-note">{j.ai}</p><section className="compare-presets"><p className="eyebrow">ATAR / {c.pick}</p><h2>{c.cta}</h2><div>{comparisonPresets.map((preset,i)=><button key={preset.join(':')} onClick={()=>{setPair([...preset]);setShare('idle');window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}}><span>0{i+1}</span>{c.presets[i]} ↗</button>)}</div></section></main>;
}
