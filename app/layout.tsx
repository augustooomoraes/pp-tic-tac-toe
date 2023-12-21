import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jogo da velha",
  description: "Portfólio de desenvolvimento web. Veja mais em augustooomoraes.com. Jogável em abas distintas. Dados das partidas guardados no seu navegador.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
