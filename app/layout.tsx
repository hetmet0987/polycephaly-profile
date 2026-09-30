import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Polycephaly — Digital Identity',
  description: 'Polycephaly personal profile and social hub.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
