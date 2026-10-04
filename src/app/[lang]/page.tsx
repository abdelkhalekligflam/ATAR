import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, eras, isLanguage } from "@/lib/history";
import { copy } from "@/lib/i18n";
import { journeyCopy } from "@/lib/journey-copy";
import { TimeMachine } from "@/components/time-machine";
export default async function Home({params,searchParams}: {params:Promise<{lang:string}>;searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const {lang}=await params;if(!isLanguage(lang))notFound();const t=copy[lang],j=journeyCopy[lang];const sp=await searchParams;const initialSlug=typeof sp.event==='string'&&events.some(e=>e.slug===sp.event)?sp.event:'writing';
 return <main id="content" className="journey-home"><TimeMachine key={initialSlug} lang={lang} initialSlug={initialSlug}/><section className="chapter-section container" id="eras"><div className="atlas-heading"><div><p className="eyebrow">03 / {j.chapter}</p><h2>{j.chapters}</h2></div><p>{j.chaptersText}</p></div><div className="cinema-chapters">{eras.map((era,i)=>{const first=events.find(e=>e.era===era)!;return <Link className="cinema-chapter" key={era} href={`/${lang}?event=${first.slug}#timecapsule`}><Image src={`/images/journey/${era}.webp`} alt="" fill sizes="(max-width:700px) 90vw, (max-width:1000px) 45vw, 30vw"/><div className="chapter-shade"/><span className="chapter-number">0{i+1}</span><div className="chapter-caption"><p>{t.eraDates[i]}</p><h3>{t[era]}</h3><span>{j.open} ↗</span></div></Link>;})}</div><p className="image-note">{j.ai}</p></section><section className="world-manifesto container"><p className="eyebrow">ATAR / {j.selected}</p><h2>{j.selection}</h2><p>{j.selectionText}</p><div className="manifesto-meta"><span>{events.length} {t.count}</span><span>FR / EN / AR</span><Link className="journey-button" href={`/${lang}/explorer`}>{j.browse} ↗</Link></div></section></main>;
}
