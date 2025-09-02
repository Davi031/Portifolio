import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfolio Davi M. Aires",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
      </body>
    </html>
  );
}