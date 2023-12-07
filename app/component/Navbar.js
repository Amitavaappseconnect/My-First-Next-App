"use client"

import React from 'react'
import Link from 'next/link'
import  { usePathname }   from 'next/navigation'



function useNavbar() {

    const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active text-white bg-blue-300 border-gray-300 block py-3 px-4 text-sm' : 'text-slate-700 font-semibold text-sm border-b border-gray-300 block py-3 px-4'}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/pages/notification' ? 'active text-white bg-blue-300 border-gray-300 block py-3 px-4 text-sm' : 'text-slate-700 font-semibold text-sm border-b border-gray-300 block py-3 px-4'}`}
            href="/pages/notification">
            Notification
          </Link>
        </li>

        <li>
          <Link
            className={`link ${pathname === '/pages/Contact' ? 'active text-white bg-blue-300 border-gray-300 block py-3 px-4 text-sm' : 'text-slate-700 font-semibold text-sm border-b border-gray-300 block py-3 px-4'}`}
            href="/pages/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default useNavbar