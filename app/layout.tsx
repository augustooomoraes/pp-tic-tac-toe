import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import { ThemeProvider } from "./ui/themeToggle/theme-provider";

const montserrat = Montserrat({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jogo da velha",
  description: "Portfólio de desenvolvimento web. Veja mais em augustooomoraes.com. Jogável em abas distintas. Dados das partidas guardados no navegador.",
  metadataBase: new URL("https://tictactoe.augustooomoraes.com/"),
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 400,
        alt: "Augusto Moraes' Tic Tac Toe portfolio website project cover image.",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <body className={classNames(
          montserrat.className,
          "bg-surface-primary dark:bg-surface-primaryDark",
          "text-text-primary dark:text-text-primaryDark",
        )}>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
