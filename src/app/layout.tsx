// 'use client'
import { Manrope } from 'next/font/google'

import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'AdVista',
  description: 'Website giới thiệu dịch vụ quảng cáo của công ty AdVista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en" className={manrope.className}>
      <body>

        <ThemeRegistry>

          {children}
        </ThemeRegistry>

      </body>
    </html>

  )
}
