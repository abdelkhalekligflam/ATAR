import { notFound } from "next/navigation";
import { isLanguage, languages } from "@/lib/history";
import { copy } from "@/lib/i18n";
import { Shell } from "@/components/shell";
export function generateStaticParams() { return languages.map(lang => ({lang})); }
export async function generateMetadata({params}: {params:Promise<{lang:string}>}) {const {lang}=await params;if(!isLanguage(lang))return {};return {title:{default:`ATAR — ${copy[lang].kicker}`,template:'%s | ATAR'},description:copy[lang].intro};}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{lang: string}> }) {
 const {lang} = await params; if (!isLanguage(lang)) notFound(); return <Shell lang={lang}>{children}</Shell>;
}
