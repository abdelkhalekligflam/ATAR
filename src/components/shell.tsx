"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, type Language } from "@/lib/history";
import { copy } from "@/lib/i18n";
export function Shell({ lang, children }: { lang: Language; children: React.ReactNode }) {
 const t = copy[lang]; const pathname = usePathname(); const [light, setLight] = useState(false); const [open, setOpen] = useState(false);
 useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; }, [lang]);
 return <div className={`site ${light ? "light" : ""}`} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
 <a className="skip" href="#content">{t.skip}</a>
 <header className="header"><div className="header-inner"><Link className="brand" href={`/${lang}`} aria-label="ATAR"><span>ATAR</span><i>|</i><span lang="ar">أثر</span></Link><span className="museum">{t.museum}</span>
 <nav className="desktop-nav" aria-label={t.menu}><Link aria-current={pathname.endsWith('/explorer') ? 'page' : undefined} href={`/${lang}/explorer`}>{t.explore}</Link><Link href={`/${lang}#eras`}>{t.eras}</Link><Link href={`/${lang}/about`}>{t.about}</Link></nav>
 <div className="header-actions"><nav className="lang-switch" aria-label={t.languageLabel}>{languages.map(l => <Link key={l} href={pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${l}`)} aria-current={l === lang ? "page" : undefined} hrefLang={l}>{l.toUpperCase()}</Link>)}</nav><button className="icon-button" onClick={() => setLight(!light)} aria-label={t.theme}>{light ? "☾" : "☀"}</button><button className="mobile-toggle icon-button" onClick={() => setOpen(!open)} aria-label={t.menu} aria-expanded={open}>{open ? "×" : "☰"}</button></div></div>
 {open && <nav className="mobile-nav" aria-label={t.menu}>{[[t.explore,`/${lang}/explorer`],[t.eras,`/${lang}#eras`],[t.about,`/${lang}/about`]].map(([label,url]) => <Link key={url} href={url} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</header>
 {children}
 <footer className="footer container"><div><Link className="brand" href={`/${lang}`}>ATAR <i>|</i> <span lang="ar">أثر</span></Link><p>{t.footer}</p></div><div><Link href={`/${lang}/explorer`}>{t.explore}</Link><Link href={`/${lang}/about`}>{t.method}</Link><span>© {new Date().getFullYear()} ATAR</span></div></footer></div>;
}
