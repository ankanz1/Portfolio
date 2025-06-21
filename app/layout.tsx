import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ankan | Portfolio',
  description: 'Created by Ankan M',
  generator: 'Ankz',
  icons: {
    icon: '/images/mfavicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
