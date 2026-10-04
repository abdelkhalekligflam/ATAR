import { notFound } from "next/navigation";
import { isLanguage, editorialUpdated, events } from "@/lib/history";
import { copy } from "@/lib/i18n";
export default async function Page({params}: {params:Promise<{lang:string}>}) {const {lang}=await params;if(!isLanguage(lang))notFound();const t=copy[lang];const sources=[...new Set(events.map(e=>e.sourceName))];return <main id="content" className="container section about"><p className="eyebrow">ATAR / أثر</p><h1>{t.collection}</h1><p className="hero-description">{t.collectionText}</p>{[['method','methodText'],['selection','selectionText'],['calendar','calendarText'],['periods','periodsText'],['visuals','visualsText']] .map(([heading,body])=><section key={heading}><h2>{t[heading as keyof typeof t]}</h2><p>{t[body as keyof typeof t]}</p></section>)}<section><h2>{t.source}</h2><p>{sources.join(' · ')}</p><p className="image-note">{t.verified} {editorialUpdated}</p></section></main>;}

export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return isLanguage(lang)?{title:copy[lang].method,description:copy[lang].collectionText}:{};}
