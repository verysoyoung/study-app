'use client'

import Link from 'next/link'
import { HomeIcon, PlusIcon, UserIcon } from 'lucide-react'

export default function Navigation() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white shadow-md">
      <nav className="flex justify-between items-center p-4">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/add">
          <PlusIcon />
        </Link>
        <Link href="/my:id">
          <UserIcon />
        </Link>
      </nav>
    </div>
  )
}
