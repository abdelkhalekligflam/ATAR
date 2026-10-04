import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/i18n";
import type { HistoryEvent, Language } from "@/lib/history";
export function EventCard({ event, lang }: { event: HistoryEvent; lang: Language }) {
 const t = copy[lang]; return <Link className="event-card" href={`/${lang}/events/${event.slug}`}><div className="card-image"><Image src={`/images/${event.image}.webp`} alt="" width={1200} height={800} sizes="(max-width: 700px) 90vw, 40vw"/></div><div className="card-content"><span className="eyebrow">{event.place[lang]} · {t[event.theme]}</span><span className="card-date" dir="ltr">{event.date[lang]}</span><h3>{event.title[lang]}</h3><p>{event.summary[lang]}</p><span className="text-link">{t.read} <span aria-hidden="true">↗</span></span></div></Link>;
}
