import { notFound } from "next/navigation";
import { isLanguage, eras, regions, themes } from "@/lib/history";
import { Explorer } from "@/components/explorer";
export default async function Page({params,searchParams}: {params: Promise<{lang:string}>;searchParams: Promise<Record<string,string|string[]|undefined>>}) {
 const {lang}=await params; if(!isLanguage(lang))notFound();const sp=await searchParams;const value=(key:string)=>typeof sp[key]==='string'?sp[key] as string:'';
 const era=value('era'),region=value('region'),theme=value('theme');
 const initial={era:eras.some(v=>v===era)?era:'all',region:regions.some(v=>v===region)?region:'all',theme:themes.some(v=>v===theme)?theme:'all',query:value('query'),from:value('from'),to:value('to'),desc:value('desc')==='true'};
 return <Explorer key={JSON.stringify(initial)} lang={lang} initial={initial}/>;
}
