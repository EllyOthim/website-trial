'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="w-full px-4 py-4 bg-white shadow-md">
      <ul className="flex items-center justify-end gap-8">
        {['Home', 'About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
          <li key={item}>
            <Link 
              href={item.toLowerCase() === 'home' ? '/' : `${item.toLowerCase()}.html`}
              className={`
                relative text-gray-600 hover:text-gray-900 transition-all duration-300
                before:content-[''] before:absolute before:w-full before:h-0.5 
                before:bg-gray-900 before:bottom-0 before:left-0
                before:transform before:scale-x-0 before:transition-transform before:duration-300
                hover:before:scale-x-100
              `}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
              {hoveredItem === item && (
                <span className="absolute inset-0 bg-gray-100 -z-10 rounded-md transform scale-105 transition-transform duration-300"></span>
              )}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            href="signup.html" 
            className={`
              relative overflow-hidden bg-red-600 text-white px-6 py-2 rounded-md
              transition-all duration-300 hover:bg-red-700 hover:shadow-lg
              before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-20
              before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-300
              hover:before:scale-x-100 hover:before:origin-left
            `}
          >
            <span className="relative z-10">Sign Up</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

