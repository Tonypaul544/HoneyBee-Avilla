import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { IoLogoSnapchat } from 'react-icons/io5'
import Logo from './images/hblogo.png'

export default function Footer() {
    return (
        <footer className="bg-[#0b1221] text-white py-12 border-t border-gray-700">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                
                {/* Left Section - Brand */}
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="HoneyBee Logo" className="w-8 h-8" />
                        <h3 className="text-lg font-bold tracking-wide">HONEYBEE</h3>
                    </div>
                    <p className="text-sm text-gray-400">The Stage Banger</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        UK-based Nigerian Afrobeats artist bringing electrifying performances to global stages.
                    </p>
                </div>

                {/* Middle Section - Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#music" className="text-gray-400 hover:text-white transition">Music</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                        <li><a href="#gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Right Section - Connect */}
                <div className="flex flex-col space-y-4">
                    <h4 className="text-lg font-semibold">Connect</h4>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/honeybee_avilla" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center">
                            <FaInstagram className="text-lg" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center">
                            <FaFacebook className="text-lg" />
                        </a>
                        <a href="https://snapchat.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center">
                            <IoLogoSnapchat className="text-lg" />
                        </a>
                        <a href="https://tiktok.com/@vincentukattah" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center">
                            <FaTiktok className="text-lg" />
                        </a>
                    </div>
                    <p className="text-xs text-gray-500">
                        Follow for updates, new releases, and exclusive content
                    </p>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 mb-6" />

            {/* Bottom Section - Copyright */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                <p>© 2026 HoneyBee. All Rights Reserved.</p>
                <a href="https://wa.me/+2348100732708" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition">Site designed by CourageXBT</a>
            </div>
        </footer>
    )
}