import React from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// eslint-disable-next-line import/no-default-export -- requires default export
export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn('dark min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  )
}
