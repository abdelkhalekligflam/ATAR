import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/history";
import { Explorer } from "@/components/explorer";
export default async function Page({params,searchParams}: {params: Promise<{lang:string}>;searchParams: Promise<{era?:string}>}) {
 const {lang}=await params; if(!isLanguage(lang))notFound(); const {era}=await searchParams;
 const initialEra=era&&['ancient','medieval','modern','contemporary'].includes(era)?era:'all';
 return <Explorer key={initialEra} lang={lang} initialEra={initialEra}/>;
}
