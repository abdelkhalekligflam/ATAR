import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const ui=localFont({src:"../../public/fonts/Manrope.woff2",variable:"--font-ui",display:"swap",weight:"200 800"});
const editorial=localFont({src:[{path:"../../public/fonts/InstrumentSerif.woff2",weight:"400",style:"normal"},{path:"../../public/fonts/InstrumentSerif-Italic.woff2",weight:"400",style:"italic"}],variable:"--font-editorial",display:"swap"});
const arabic=localFont({src:"../../public/fonts/NotoSansArabic.woff2",variable:"--font-arabic",display:"swap",weight:"100 900",preload:false});
export const metadata:Metadata={title:{default:"ATAR — أثر",template:"%s | ATAR"},description:"Explore world history from prehistory to 2026 in Arabic, French and English."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${ui.variable} ${editorial.variable} ${arabic.variable}`}><body>{children}</body></html>;}
