import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "ATAR — أثر", template: "%s | ATAR" }, description: "Explore Moroccan history and heritage in Arabic, French and English." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="fr"><body>{children}</body></html>;
}
