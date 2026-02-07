
import Sportiy from './images/sportify.png'
import honb from './images/honb.jpg'
import honb2 from './images/honb2.jpg'
import honb3 from './images/honb3.jpg'
import honb4 from './images/honb4.jpg'
import honb5 from './images/honb5.jpg'
import honb6 from './images/honb6.jpg'
import honb7 from './images/honb7.jpg'

export default function Gallery() {
  return (
    <div className="py-10 w-full h-auto flex flex-col items-center justify-center ">
      <h1 className="flex max-sm:m-auto max-sm:text-5xl max-sm:text-[25px] mb-5 text-5xl font-bold text-white text-center w-full justify-center pt-10 pb-5 m-auto">Gallery</h1>
      <p className="flex text-lg text-center font-semibold m-auto w-content p-1">Capturing the energy, passion, and moments that define the stage</p>

      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-5 flex-wrap justify-center gap-5 m-auto items-center justify-center mt-10 w-[90%] h-auto">
        <img src={honb} alt="Gallery Image" className="w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
        <img src={honb2} alt="Gallery Image" className="w-w-[20%] h-[450px] min-w-[250px] max-sm:w-full " />
        <img src={honb3} alt="Gallery Image" className="w-w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
        <img src={honb4} alt="Gallery Image" className="w-w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
        <img src={honb5} alt="Gallery Image" className="w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
        <img src={honb6} alt="Gallery Image" className="w-w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
        <img src={honb7} alt="Gallery Image" className="w-w-[20%] h-[450px] min-w-[250px] max-sm:w-full" />
      </div>
    </div>
  )
}