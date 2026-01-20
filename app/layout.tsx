import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VO2 ProMax - VUCA Strategic Framework',
  description: 'VO2 ProMax: The 3:1 Leverage Ratio - Burn jogging calories at walking heart rates. Revolutionary metabolic-cardiac dissociation platform.',
  keywords: ['VUCA', 'VO2 ProMax', 'VO2 Max', 'Biohacker', 'Longevity', 'Fitness Technology', 'Metabolic Conditioning'],
  icons: {
    icon: '/favicon.svg?v=2',
  },
  openGraph: {
    title: 'VO2 ProMax - The 3:1 Leverage Ratio',
    description: 'Burn jogging calories at walking heart rates. Revolutionary metabolic-cardiac dissociation platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VO2 ProMax - The 3:1 Leverage Ratio',
    description: 'Burn jogging calories at walking heart rates. Revolutionary metabolic-cardiac dissociation platform.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
