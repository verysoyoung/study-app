import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '모각코 스터디',
  description: '모각코 스터디 앱',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full flex justify-center bg-zinc-100`}
      >
        <div className="md:w-[600px] w-full min-h-screen bg-white shadow-md relative">
          <div className="flex items-center gap-2 p-4">
            <img src="/logo.svg" alt="logo" width={30} height={30} />
            <h1 className="text-xl font-bold tracking-widest text-gray-500">
              모각코
            </h1>
          </div>
          <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {children}
          </div>
          <Navigation />
        </div>
      </body>
    </html>
  )
}
