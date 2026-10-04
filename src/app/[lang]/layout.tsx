import { notFound } from "next/navigation";
import { isLanguage, languages } from "@/lib/history";
import { Shell } from "@/components/shell";
export function generateStaticParams() { return languages.map(lang => ({lang})); }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{lang: string}> }) {
 const {lang} = await params; if (!isLanguage(lang)) notFound(); return <Shell lang={lang}>{children}</Shell>;
}
