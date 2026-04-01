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
  metadataBase: new URL('https://inspiclinic.com.br'),
  title: 'InspiClinic | Fisioterapia e Pilates Clínico em São Paulo',
  description: 'Clínica de fisioterapia especializada em tratamento individualizado, Pilates Clínico e Método Schroth. Excelência em cuidado personalizado no Tatuapé, SP.',
  keywords: ['fisioterapia', 'pilates clínico', 'reabilitação', 'tatuapé', 'são paulo'],
  openGraph: {
    title: 'InspiClinic | Fisioterapia e Pilates Clínico em São Paulo',
    description: 'Clínica de fisioterapia especializada em tratamento individualizado, Pilates Clínico e Método Schroth.',
    url: 'https://inspiclinic.com.br',
    siteName: 'InspiClinic',
    images: [
      {
        url: '/web-app-manifest-192x192.png',
        width: 192,
        height: 192,
        alt: 'InspiClinic Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'InspiClinic | Fisioterapia e Pilates Clínico em São Paulo',
    description: 'Clínica de fisioterapia especializada em tratamento individualizado, Pilates Clínico e Método Schroth.',
    images: ['/web-app-manifest-192x192.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <meta name="apple-mobile-web-app-title" content="InspiClinic" />
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
