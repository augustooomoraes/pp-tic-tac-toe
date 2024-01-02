import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import "./globals.css";

const montserrat = Montserrat({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jogo da velha",
  description: "Portfólio de desenvolvimento web. Veja mais em augustooomoraes.com. Jogável em abas distintas. Dados das partidas guardados no navegador.",
  metadataBase: new URL("https://pp-tic-tac-toe.vercel.app/"),
  openGraph: {
    images: [
      {
        url: "https://pp-tic-tac-cwleunyr6-augustomoraes.vercel.app/opengraph-image.png?65079fb8918cb5d6=",
        width: 800,
        height: 400,
        alt: "Augusto Moraes' Tic Tac Toe portfolio website project cover image.",
      },
    ],
  },
};

// Há a aba 'Open Graph' nas páginas dos deployments, nas páginas das publicações, no Vercel. Ver se há qualquer pista ali sobre essa confusão toda.
// https://vercel.com/augustomoraes/pp-tic-tac-toe/deployments

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={classNames(
          montserrat.className
          // , "bg-primary dark:bg-primary-dark"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
