// Import the Navbar component and the hero background image
import Navbar from './Navbar'
import Gallery from '../../Gallery'
import heroImage from '../../images/herobg.png'
import Contact from '../../Contact'
import Footer from '../../footer'
import '../../custom.css'
import About from './About'
import Music from '../../Sound'
import { useInView } from '../../hooks/useInView'

// IMPORT FONTS FROM FONTAWSOME
import { MdOutlinePlayCircle } from "react-icons/md";

// Main Hero Section Component
export default function HeroSection() {
  const [aboutRef, aboutInView] = useInView()
  const [musicRef, musicInView] = useInView()
  const [galleryRef, galleryInView] = useInView()
  const [contactRef, contactInView] = useInView()

  return (
    <>
      <div className="w-full h-[100vh] bg-[#0b1221] text-white overflow-hidden max-sm:h-[100vh] relative flex flex-col max-sm:leading-tight">
        {/* Navigation bar at the top */}
        <Navbar />
        
        {/* Hero content area with background image */}
        <div className="heroSection hero-sm bg-transparent-blue  w-full h-full max-sm:h-[100vh] flex-1 relative flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: '60%',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Text content area - contains heading, subtitle, and buttons */}
          <div className="bg-transparent-blue max-sm:sm-button max-sm:gap-4 relative z-10 text-center max-w-5xl mx-auto w-full h-full mt-[10] flex flex-col justify-center items-center py-5 sm:py-12 lg:py-10 px-4">
            {/* Main heading - artist name */}
            <h1 className="animate-slide-down flex monstra max-sm:!text-[50px] text-3xl mb-3 sm:mb-8 leading-none font-montserrat items-center justify-center max-sm:w-[90vw] mt-3 text-shadow-white" >
              HONEYBEE<br />AVILLA
            </h1>
            
            {/* Subtitle - artist tagline */}
            <p className="animate-slide-down mt-0 mr-0 text-2xl sm:text-xl font-bold text-[#fff] text-shadow-white mb-5 sm:mb-10"
              style={{ animationDelay: '0.2s' }}>
              The Stage Banger
            </p>
            
            {/* Description text - about the artist */}
            <p className="animate-slide-up text-lg sm:text-xl text-white mb-1 sm:mb-16 max-w-2xl mx-auto leading-tight font-light"
              style={{ animationDelay: '0.4s' }}>
              UK-based Nigerian Afrobeats/R&B artist delivering high-energy<br />performances and global sound.
            </p>
            
            {/* Action buttons - Listen Now and Book for Shows */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-3 mt-6 max-sm:mt-[20%]">
              {/* Listen Now button - blue background */}
              <button className="animate-slide-left flex max-sm:w-[90vw] max-sm:w-100 max-sm:h-15 justify-center bg-gray-600 hover:bg-gray-500 text-white font-sm rounded-full px-5 py-1.5 items-center gap-1 transition duration-300 text-lg whitespace-nowrap max-sm:text-[25px] max-sm:mobile-button w-[220px]"
                style={{ animationDelay: '0.6s' }}>
                <MdOutlinePlayCircle className="inline mr-1" />
                <p>Listen Now</p>
              </button>
              
              {/* Book for Shows button - white border, filled on hover */}
              <button className="animate-slide-right max-sm:w-100 max-sm:w-[90vw] flex bg-transparent border-[1.5px] border-gray-700 border-[1.5] hover:bg-gray-600 text-white font-sm rounded-full px-5 py-1.5  max-sm:text-[23px] justify-center gap-2 items-center max-sm:h-15 transition duration-300 text-lg whitespace-nowrap w-[220px]"
                style={{ animationDelay: '0.8s' }}>
                <MdOutlinePlayCircle className="inline mr-1 max-sm:text-[26px]" />
                <p>Book for Shows</p>
              </button>
            </div>
          </div>
        </div>
        {/* ABOUT Section */}
      </div>

      <div ref={aboutRef} id="about" className={`flex w-[100vw] h-auto text-white flex items-center justify-center ${aboutInView ? 'animate-slide-up' : 'opacity-0'}`}>
        <About />
      </div>

      <div ref={musicRef} id="music" className={`flex w-[100vw] h-auto text-white flex items-center justify-center ${musicInView ? 'animate-slide-up' : 'opacity-0'}`}>
        <Music />
      </div>

      <div ref={galleryRef} id="gallery" className={`flex w-[100vw] h-auto text-white flex items-center justify-center my-10 ${galleryInView ? 'animate-slide-up' : 'opacity-0'}`}>
        <Gallery />
      </div>

      <div ref={contactRef} id="contact" className={`flex w-[100vw] h-auto text-white flex items-center justify-center my-10 ${contactInView ? 'animate-slide-up' : 'opacity-0'}`}>
        <Contact />
      </div>

      <Footer />

    </>
  )
}
