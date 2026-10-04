"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, type Language } from "@/lib/history";
import { useTheme } from "@/lib/theme";
import { journeyCopy } from "@/lib/journey-copy";
import { copy } from "@/lib/i18n";
export function Shell({ lang, children }: { lang: Language; children: React.ReactNode }) {
 const t = copy[lang]; const j=journeyCopy[lang]; const pathname = usePathname(); const {light,toggle} = useTheme(); const [open, setOpen] = useState(false);
 useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; }, [lang]);
 return <div className={`site ${light ? "light" : ""}`} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
 <a className="skip" href="#content">{t.skip}</a>
 <header className="header"><div className="header-inner"><Link className="brand" href={`/${lang}`} aria-label="ATAR"><span>ATAR</span><i>|</i><span lang="ar">أثر</span></Link><span className="museum">WORLD / TIME / STORIES</span>
 <nav className="desktop-nav" aria-label={t.menu}><Link href={`/${lang}#timecapsule`}>{j.navJourney}</Link><Link href={`/${lang}#atlas`}>Atlas</Link><Link aria-current={pathname.endsWith('/explorer')?'page':undefined} href={`/${lang}/explorer`}>{t.explore}</Link></nav>
 <div className="header-actions"><nav className="lang-switch" aria-label={t.languageLabel}>{languages.map(l => <Link key={l} href={pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${l}`)} aria-current={l === lang ? "page" : undefined} hrefLang={l} onClick={event=>{if(window.location.search){event.preventDefault();window.location.assign(pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${l}`)+window.location.search);}}}>{l.toUpperCase()}</Link>)}</nav><button className="icon-button" onClick={toggle} aria-label={t.theme}>{light ? "☾" : "☀"}</button><button className="mobile-toggle icon-button" onClick={() => setOpen(!open)} aria-label={t.menu} aria-expanded={open}>{open ? "×" : "☰"}</button></div></div>
 {open && <nav className="mobile-nav" aria-label={t.menu}>{[[j.navJourney,`/${lang}#timecapsule`],['Atlas',`/${lang}#atlas`],[t.explore,`/${lang}/explorer`]].map(([label,url]) => <Link key={url} href={url} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</header>
 {children}
 <footer className="footer container"><div><Link className="brand" href={`/${lang}`}>ATAR <i>|</i> <span lang="ar">أثر</span></Link><p>{t.footer}</p></div><div><Link href={`/${lang}/explorer`}>{t.explore}</Link><Link href={`/${lang}/about`}>{t.method}</Link><span>© {new Date().getFullYear()} ATAR</span></div></footer></div>;
}
