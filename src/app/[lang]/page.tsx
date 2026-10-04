import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, isLanguage } from "@/lib/history";
import { compareCopy } from "@/lib/compare-copy";
import { TimeMachine } from "@/components/time-machine";
import { Icon } from "@/components/icon";
export default async function Home({params,searchParams}:{params:Promise<{lang:string}>;searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const {lang}=await params;if(!isLanguage(lang))notFound();const c=compareCopy[lang],sp=await searchParams;const valid=typeof sp.event==='string'&&events.some(e=>e.slug===sp.event);const initialSlug=valid?sp.event as string:'writing';
 return <main id="content" className="journey-home"><TimeMachine key={`${initialSlug}:${!valid}`} lang={lang} initialSlug={initialSlug} intro={!valid}/><section className="compare-invitation container"><div><p className="eyebrow">03 / {c.nav}</p><h2>{c.title}</h2><p>{c.ctaText}</p><Link className="journey-button" href={`/${lang}/compare`}>{c.cta}<Icon name="arrow"/></Link></div><div className="comparison-art" aria-hidden="true"><div><Image src="/images/journey/american-independence.webp" alt="" fill sizes="(max-width:700px) 45vw, 260px"/><span>1776</span></div><div><Image src="/images/journey/french-revolution.webp" alt="" fill sizes="(max-width:700px) 45vw, 260px"/><span>1789</span></div><i>⇄</i></div></section></main>;
}
