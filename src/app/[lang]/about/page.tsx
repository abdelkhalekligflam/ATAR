import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/history";
import { copy } from "@/lib/i18n";
export default async function Page({params}: {params:Promise<{lang:string}>}) {const {lang}=await params;if(!isLanguage(lang))notFound();const t=copy[lang];return <main id="content" className="container section about"><p className="eyebrow">ATAR / أثر</p><h1>{t.collection}</h1><p className="hero-description">{t.collectionText}</p><section><h2>{t.method}</h2><p>{t.methodText}</p></section><section><h2>{t.visuals}</h2><p>{t.visualsText}</p></section><section><h2>{t.source}</h2><a href="https://whc.unesco.org/en/statesparties/ma" target="_blank" rel="noopener noreferrer" className="text-link">UNESCO — World Heritage Centre ↗</a></section></main>;}
