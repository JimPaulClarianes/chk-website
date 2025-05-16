"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                    <span className="text-red-600">Catanduanes</span>
                    <span>Howling Kick</span>
                </Link>
                <nav
                    className={`${isMenuOpen ? "flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-md z-50" : "hidden"} md:flex md:flex-row md:static md:shadow-none md:p-0 md:gap-6`}
                >
                    <Link to="#about" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        About
                    </Link>
                    <Link to="#classes" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        Classes
                    </Link>
                    <Link to="#membership" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        Membership
                    </Link>
                    <Link to="#instructors" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        Instructors
                    </Link>
                    <Link to="#testimonials" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        Testimonials
                    </Link>
                    <Link to="#contact" className="text-sm font-medium hover:text-red-600 transition-colors py-2 md:py-0">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Sign In
                    </button>
                    <button className="h-9 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Join Now
                    </button>
                    <button className="md:hidden" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
