import type { Metadata } from 'next'
import { Playfair  } from 'next/font/google'
import './globals.css'
import Navbar from '../ui/navbar/Navbar'

const inter = Playfair({ subsets: ['latin'] ,
weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
