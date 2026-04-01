import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InspiClinic | Fisioterapia e Pilates Clínico em São Paulo',
  description: 'Clínica de fisioterapia especializada em tratamento individualizado, Pilates Clínico e Método Schroth. Excelência em cuidado personalizado no Tatuapé, SP.',
  generator: 'v0.app',
  keywords: ['fisioterapia', 'pilates clínico', 'reabilitação', 'tatuapé', 'são paulo'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
