import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "ATAR — أثر", template: "%s | ATAR" }, description: "Explore world history from prehistory to 2026 in Arabic, French and English." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="fr"><body>{children}</body></html>;
}
