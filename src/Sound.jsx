
import { SiAudiomack } from "react-icons/si";
import { FaSoundcloud, FaSpotify } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";


// import Sportiy from '../../assets/images/Sportify.png'

// import HeroSection from './sections/HeroSection/HeroSection'

export default function Music() {
  return (
    <div>
      {/* About The Artist */}
      <div className="flex bg-transparent flex-col w-[100vw] h-auto items-center justify-center py-10 pt-[5em] items-center justify-center">

        <h1 className="flex max-sm:m-auto max-sm:text-5xl  max-sm:text-[22px] text-6xl font-bold text-[#fff] text-center mb-5">Sound of the Stage Banger</h1>
        <p className="flex mt-5 text-center  max-sm:w-[90%]">Experience the electrifying beats and infectious rhythms that move crowds worldwide</p>
        
        <div className="flex max-sm:flex-col flex-row gap-10 mt-10 px-5 max-sm:px-2 justify-center items-center w-[100%] h-[90%] m-auto items-center justify-center">

          <a href="https://audiomack.com/honeybee-avilla-" className="flex flex-col items-center w-[20%] h-[150px] max-sm:w-[90%] items-center justify-center bg-[#0b1221] box-shadow-white p-5 rounded-lg gap-5 hover:bg-gray-700 transition duration-300 ease-in-out">
            <SiAudiomack className="w-[40px] h-[40px] bg-[#000000] p-1 rounded-lg"  />
            <h1 className="flex text-md font-bold">Audiomack</h1>
          </a>

          <a href="https://open.spotify.com/user/vzo08dfa5vhen2wj46j3eb83z?si=XIsFzpKXR-myFnPP-MrVGw" className="flex flex-col items-center w-[20%] h-[150px] max-sm:w-[90%] items-center justify-center bg-[#0b1221] box-shadow-white p-5 rounded-lg gap-5 hover:bg-gray-700 transition duration-300 ease-in-out">
            <FaSpotify className="w-[40px] h-[40px] text-green-500" />
            {/* <img src={Sportiy} alt="Sportify Logo" className="w-[40px] h-[40px]" /> */}
            <h1 className="flex text-md font-bold border-rounded-lg">Sportify</h1>
          </a>

          <a href="https://on.soundcloud.com/Hf1COoAyLvsPiwVyjj" className="flex flex-col items-center w-[20%] h-[150px] max-sm:w-[90%] items-center justify-center bg-[#0b1221] box-shadow-white p-5 rounded-lg gap-5 hover:bg-gray-700 transition duration-300 ease-in-out">
            <FaSoundcloud className="w-[40px] h-[40px] text-red-500"  />
            <h1 className="flex text-md font-bold">SoundCloud</h1>
          </a>

           <a href="https://www.tiktok.com/@vincentukattah?_r=1&_t=ZN-93fvgmIQ4Ri" className="flex flex-col items-center max-sm:w-[10px] w-[20%] h-[150px] max-sm:w-[90%] items-center justify-center bg-[#0b1221] box-shadow-white p-5 rounded-lg gap-5 hover:bg-gray-700 transition duration-300 ease-in-out">
            <AiFillTikTok  className="w-[40px] h-[40px]"  />
            <h1 className="flex text-md font-bold">Ticktok</h1>
          </a>
        </div>
      </div>
      
      <div className="flex max-sm:py-5 max-sm:flex-col max-sm:justify-center max-sm:bg-gray-800 bg-[#0b1221] border border-gray-700 border-[1.5px] rounded-[15px] w-[87%] m-auto h-full items-center justify-start p-2 items-center justify-center max-sm:gap-5 gap-10 my-10">
        <SiMusicbrainz  className="flex max-sm:w-full max-sm:h-20 text-3xl font-bolder w-[20%] h-[200px] bg-gray-800 p-2 rounded-lg" />

        <div className="flex max-sm:justify-center flex-col gap-5 justify-between max-sm:items-center items-start w-[80%] h-full">
          <h1 className="flex max-sm:text-center max-sm:text-2xl text-3xl font-semibold text-white text-shadow-white text-5xl">Latest Release</h1>
          <p className="flex max-sm:text-center font-medium text-[18px]">Discover HoneyBee's latest tracks and feel the energy of authentic Afrobeats sound</p>
          <a href=""  className="flex max-sm:text-center bg-gray-600 hover:bg-gray-500 text-white font-sm rounded-full px-5 py-1.5 items-center gap-2 transition duration-300 text-lg whitespace-nowrap max-sm:text-[25px] max-sm:mobile-button w-[220px]">
            <FaRegPlayCircle  className="inline mr-1" />
            <p>Listen Now</p>
          </a>
        </div>
      </div>
    </div>
  )
}