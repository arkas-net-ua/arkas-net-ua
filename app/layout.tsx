import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Миколаївський ліцей імені Миколи Аркаса",
  description: "Офіційна вебсторінка Миколаївського ліцею імені Миколи Аркаса: освіта, історія, досягнення, вступ і контакти.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}</body></html>;
}
