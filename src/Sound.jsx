
import { SiAudiomack } from "react-icons/si";
// import AudiomackLogo from './images/Sportify.jpg'
// import Sportiy from '../../honeybee'

// import HeroSection from './sections/HeroSection/HeroSection'

export default function Sounds() {
  return (
    <div>
      {/* About The Artist */}
      <div className="flex bg-[#0b1221] flex-col w-[100vw] h-auto items-center justify-center py-10 pt-[5em] items-center justify-center">

        <h1 className="flex max-sm:m-auto max-sm:text-5xl text-6xl font-bold text-[#60a5fa] text-center mb-5">Sound of the Stage Banger</h1>
        <p className="flex mt-5 text-center">Experience the electrifying beats and infectious rhythms that move crowds worldwide</p>
        
        <div className="flex max-sm:flex-col flex-row gap-10 mt-10 px-5 max-sm:px-2 justify-center items-center w-[100%] h-[90%] m-auto items-center justify-center">

          <div className="flex flex-col items-center w-[18%] h-[150px] max-sm:w-full items-center justify-center bg-[#042875] box-shadow-white p-5 rounded-lg gap-5">
            <SiAudiomack className="w-[40px] h-[40px] bg-[#000000] p-1 rounded-lg"  />
            <h1 className="flex text-md font-bold">Audiomack</h1>
          </div>

          <div className="flex flex-col items-center w-[18%] h-[150px] max-sm:w-full items-center justify-center bg-[#042875] box-shadow-white p-5 rounded-lg gap-5">
            <SiAudiomack className="w-[40px] h-[40px] bg-[#000000] p-1 rounded-lg"  />
            {/* <img src={Sportiy} alt="Audiomack Logo" className="flex w-[40px] h-[40px]" /> */}
            <h1 className="flex text-md font-bold border-rounded-lg">Sportify</h1>
          </div>

          <div className="flex flex-col items-center w-[18%] h-[150px] max-sm:w-full items-center justify-center bg-[#042875] box-shadow-white p-5 rounded-lg gap-5">
            <SiAudiomack className="w-[40px] h-[40px] bg-[#000000] p-1 rounded-lg"  />
            <h1 className="flex text-md font-bold">Apple Music</h1>
          </div>
        </div>
      </div>
    </div>
  )
}