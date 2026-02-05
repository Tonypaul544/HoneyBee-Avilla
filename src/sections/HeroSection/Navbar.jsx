// Import useState hook for managing mobile menu state
import { useState } from 'react'
import Logo from '../../images/hblogo.png'
import '../../custom.css'

// Navbar Component - Navigation bar for the website
export default function Navbar() {
  // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Navigation bar - stays at top when scrolling
    <nav className="min-h-[50px] fixed top-0 left-0 right-0 z-50 items-center justify-center bg-semitransparent-blue backdrop-blur-md border-b border-gray-700/30 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed h-[100%] w-[100%]">
        <div className="flex items-center justify-between h-full w-[95%] mx-auto m-auto items-center">
          
          {/* Logo Section - Left side of navbar */}
          <div className="flex items-center gap-2">
            {/* Bee emoji icon */}
            <div className="h-8 w-8 text-2xl font-bold text-white">
                <img src={Logo} alt="Honeybee Logo" className="logo" />
            </div>
            {/* Brand name */}
            <span className="text-md font-bold text-white tracking-wide">HONEYBEE</span>
          </div>

          {/* Desktop Menu - Only shows on medium screens and above */}
          <div className="w-content flex hidden md:flex items-center gap-5 m-auto align-center justify-center mr-0">
            <a href="#about" className="text-gray-300 hover:text-white transition text-sm font-semibold">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition text-sm font-semibold">Contact</a>
            <a href="#music" className="text-gray-300 hover:text-white transition text-sm font-semibold">Music</a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition text-sm font-semibold">Gallery</a>

            {/* Book Now Button - Only shows on medium screens and above */}
            <div className="hidden md:block">
                <button className="px-4.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 text-[12px]">
                Book Now
                </button>
            </div>
          </div>


          {/* Hamburger Menu Button - Only shows on small screens */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
          >
            {/* Hamburger icon (three horizontal lines) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Only shows when menu is open on small screens */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {/* Mobile navigation links */}
            <a href="#about" className="block text-gray-300 hover:text-white transition py-2 text-sm">About</a>
            <a href="#music" className="block text-gray-300 hover:text-white transition py-2 text-sm">Music</a>
            <a href="#gallery" className="block text-gray-300 hover:text-white transition py-2 text-sm">Gallery</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition py-2 text-sm">Contact</a>
            
            {/* Mobile Book Now button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 text-sm">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
