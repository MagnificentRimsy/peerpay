import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peerpay',
  description: 'Aan innovation-focused financial technology company specializing in credit facilitation and digital collateral management solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Peerpay</title>
       <link rel="icon" href="/favicon.svg" />
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
