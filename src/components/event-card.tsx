import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/i18n";
import { formatDate, type HistoryEvent, type Language } from "@/lib/history";
export function EventCard({ event, lang }: { event: HistoryEvent; lang: Language }) {
 const t = copy[lang]; return <Link className="event-card" href={`/${lang}/events/${event.slug}`}><div className="card-image"><Image src={`/illustrations/${event.era}.svg`} alt="" width={680} height={420}/><span className="art-label">{t[event.era]}</span></div><div className="card-content"><span className="eyebrow">{t[event.region]} · {t[event.theme]}</span><span className="card-date">{formatDate(event,lang)}</span><h3>{event.title[lang]}</h3><p>{event.summary[lang]}</p><span className="text-link">{t.read} <span aria-hidden="true">↗</span></span></div></Link>;
}
