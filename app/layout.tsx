import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
