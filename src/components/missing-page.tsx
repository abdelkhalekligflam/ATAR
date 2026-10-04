"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLanguage } from "@/lib/history";
import { Icon } from "./icon";
const text={fr:{title:"Cette page s’est perdue dans le temps.",description:"Reprenez le voyage ou explorez les événements de notre histoire.",home:"Reprendre le voyage",explore:"Explorer l’histoire"},en:{title:"This page was lost in time.",description:"Continue your journey or explore the events of our history.",home:"Back to the journey",explore:"Explore history"},ar:{title:"هذه الصفحة ضاعت عبر الزمن.",description:"تابع رحلتك أو استكشف أحداث تاريخنا.",home:"العودة إلى الرحلة",explore:"استكشف التاريخ"}};
export function MissingPage(){const candidate=usePathname().split("/")[1];const lang=isLanguage(candidate)?candidate:"fr";const t=text[lang];return <main id="content" className="missing-page" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><p className="eyebrow">ATAR / 404</p><span className="missing-orbit" aria-hidden="true"/><h1>{t.title}</h1><p>{t.description}</p><div><Link className="journey-button primary" href={`/${lang}`}>{t.home}<Icon name="arrow"/></Link><Link className="text-link" href={`/${lang}/explorer`}>{t.explore}<Icon name="arrow"/></Link></div></main>;}
