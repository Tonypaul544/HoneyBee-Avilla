// Import the Navbar component and the hero background image
import Navbar from './Navbar'
import heroImage from '../../assets/herobg.png'
import '../../custom.css'
import About from './About'

// IMPORT FONTS FROM FONTAWSOME
import { MdOutlinePlayCircle } from "react-icons/md";

// Main Hero Section Component
export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#0b1221] text-white overflow-hidden max-sm:h-[100vh] relative flex flex-col max-sm:leading-tight">
        {/* Navigation bar at the top */}
        <Navbar />
        
        {/* Hero content area with background image */}
        <div className="heroSection hero-sm bg-transparent-blue  w-full h-full max-sm:h-[100vh] flex-1 relative flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat"
          // style={{
          //   backgroundImage: `url(${heroImage})`,
          //   backgroundSize: '100',
          //   backgroundPosition: 'center',
          //   backgroundAttachment: 'fixed' // Creates parallax effect
          // }}
        >
          {/* Text content area - contains heading, subtitle, and buttons */}
          <div className="bg-transparent-blue max-sm:sm-button max-sm:gap-4 relative z-10 text-center max-w-5xl mx-auto w-full h-full mt-[0] flex flex-col justify-center items-center py-5 sm:py-12 lg:py-10 px-4">
            {/* Main heading - artist name */}
            <h1 className="monstra max-sm:!text-[60px] text-3xl mb-3 sm:mb-8 leading-none font-montserrat items-center justify-center max-sm:w-[90vw]" >
              HONEYBEE<br />AVILLA
            </h1>
            
            {/* Subtitle - artist tagline */}
            <p className=" max-sm:mt-0 text-2xl sm:text-xl font-semibold text-blue-400 mb-8 sm:mb-10">
              The Stage Banger
            </p>
            
            {/* Description text - about the artist */}
            <p className="text-lg sm:text-xl text-gray-300 mb-1 sm:mb-16 max-w-2xl mx-auto leading-tight font-light">
              UK-based Nigerian Afrobeats artist delivering high-energy<br />performances and global sound.
            </p>
            
            {/* Action buttons - Listen Now and Book for Shows */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-3 mt-6 max-sm:mt-[20%]">
              {/* Listen Now button - blue background */}
              <button className="flex max-sm:w-[90vw] max-sm:w-100 max-sm:h-15 justify-center bg-blue-600 hover:bg-blue-800 text-white font-sm rounded-full px-5 py-1.5 items-center gap-2 transition duration-300 text-lg whitespace-nowrap max-sm:text-[25px] max-sm:mobile-button w-[220px]">
                <MdOutlinePlayCircle className="inline mr-2" />
                <p>Listen Now</p>
              </button>
              
              {/* Book for Shows button - white border, filled on hover */}
              <button className="max-sm:w-100 max-sm:w-[90vw] flex bg-transparent border-[1.5px] border-blue-600 hover:bg-white hover:text-[#0a0e17] text-white font-sm rounded-full px-5 py-1.5  max-sm:text-[23px] justify-center gap-2 items-center max-sm:h-15 transition duration-300 text-lg whitespace-nowrap w-[220px]">
                <MdOutlinePlayCircle className="inline mr-2 max-sm:text-[26px]" />
                <p>Book for Shows</p>
              </button>
            </div>
          </div>
        </div>
        {/* ABOUT Section */}
      </div>
      <div id="about" className="flex w-[100vw] h-auto text-white flex items-center justify-center">
        <About />
      </div>
    </>
  )
}
