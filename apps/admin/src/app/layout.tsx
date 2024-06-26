import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/logic/reduxStore/app/Provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Menz-wear',
  description: 'Mens clothing apparel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
