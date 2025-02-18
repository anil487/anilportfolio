"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

const headerItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("darkMode", (!darkMode).toString())
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex space-x-6 sm:space-x-20">
          {headerItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700  font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-whitehover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}

