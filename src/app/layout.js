import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Lifemore Global',
  description: 'Lifemore Global Community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
