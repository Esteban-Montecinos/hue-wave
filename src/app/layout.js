import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hue Wave | Gradient generator for Tailwind CSS',
  description: 'Gradient generator for Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn( "bg-neutral-900 text-neutral-50",inter.className)}>{children}</body>
    </html>
  )
}
