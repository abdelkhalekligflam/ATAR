import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, languages, isLanguage } from "@/lib/history";
import { copy } from "@/lib/i18n";
import { EventCard } from "@/components/event-card";
export function generateStaticParams(){return languages.flatMap(lang=>events.map(e=>({lang,slug:e.slug})));}
export async function generateMetadata({params}: {params:Promise<{lang:string;slug:string}>}) { const {lang,slug}=await params; const e=events.find(e=>e.slug===slug);return isLanguage(lang)&&e?{title:e.title[lang],description:e.summary[lang]}:{}; }
export default async function Page({params}: {params:Promise<{lang:string;slug:string}>}) {
 const {lang,slug}=await params;if(!isLanguage(lang))notFound();const e=events.find(e=>e.slug===slug);if(!e)notFound();const t=copy[lang];
 return <main className="container section" id="content"><Link className="text-link" href={`/${lang}/explorer`}>← {t.back}</Link><div className="detail-heading"><p className="eyebrow">{t[e.era]} / {t[e.theme]}</p><p className="detail-date" dir="ltr">{e.date[lang]}</p><h1>{e.title[lang]}</h1><span className="eyebrow">{e.place[lang]}</span></div><figure className="detail-image"><Image src={`/images/${e.image}.webp`} alt="" width={1376} height={900} sizes="(max-width: 1200px) 100vw, 1200px"/><figcaption className="image-note">{t.imageNote}</figcaption></figure><div className="detail-grid"><article><div className="brief"><p className="eyebrow">{t.short}</p><p>{e.summary[lang]}</p></div><h2>{t.context}</h2><p>{t.methodText}</p><h2>{t.visuals}</h2><p>{t.visualsText}</p></article><aside className="source-panel"><p className="eyebrow">{t.source}</p><h3>UNESCO</h3><a className="text-link" href={e.source} target="_blank" rel="noopener noreferrer">{t.sourceLink} ↗</a><dl><dt>{t.date}</dt><dd>{e.date[lang]}</dd><dt>{t.place}</dt><dd>{e.place[lang]}</dd></dl></aside></div><section className="section"><h2>{t.related}</h2><div className="story-grid">{events.filter(item=>item.slug!==e.slug).slice(0,2).map(item=><EventCard key={item.slug} event={item} lang={lang}/>)}</div></section></main>;
}
