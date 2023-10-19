import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import Navigation from './navigation/Navigation'
import Footer from './footer/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
