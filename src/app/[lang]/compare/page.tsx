import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/history";
import { resolvePair } from "@/lib/compare";
import { compareCopy } from "@/lib/compare-copy";
import { CompareStories } from "@/components/compare-stories";
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return isLanguage(lang)?{title:compareCopy[lang].title,description:compareCopy[lang].intro}:{};}
export default async function Page({params,searchParams}:{params:Promise<{lang:string}>;searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const {lang}=await params;if(!isLanguage(lang))notFound();const sp=await searchParams;const left=typeof sp.left==='string'?sp.left:undefined,right=typeof sp.right==='string'?sp.right:undefined;const [a,b]=resolvePair(left,right);
 return <CompareStories key={`${a.slug}:${b.slug}`} lang={lang} left={a.slug} right={b.slug}/>;
}
