
import Sportiy from './images/sportify.png'
import honb from './images/honb.jpg'
import honb2 from './images/honb2.jpg'
import honb3 from './images/honb3.jpg'
import honb4 from './images/honb4.jpg'
import honb5 from './images/honb5.jpg'
import honb6 from './images/honb6.jpg'
import honb7 from './images/honb7.jpg'
import { useInView } from './hooks/useInView'

export default function Gallery() {
  const [titleRef, titleInView] = useInView()
  const [imagesRef, imagesInView] = useInView()
  const [img1Ref, img1InView] = useInView()
  const [img2Ref, img2InView] = useInView()
  const [img3Ref, img3InView] = useInView()
  const [img4Ref, img4InView] = useInView()
//   const [img5Ref, img5InView] = useInView()
  const [img6Ref, img6InView] = useInView()
  const [img7Ref, img7InView] = useInView()

  return (
    <div className="py-10 w-full h-auto flex flex-col items-center justify-center ">
      <h1 ref={titleRef} className={`flex max-sm:m-auto max-sm:text-5xl max-sm:text-[25px] mb-5 text-5xl font-bold text-white text-center w-full justify-center pt-10 pb-5 m-auto ${titleInView ? 'animate-slide-down' : 'opacity-0'}`}>Gallery</h1>
      <p className={`flex text-lg text-center font-semibold m-auto w-content p-1 ${titleInView ? 'animate-fade' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}>Capturing the energy, passion, and moments that define the stage</p>

      <div ref={imagesRef} className={`flex max-sm:flex-col max-sm:items-center max-sm:gap-5 flex-wrap justify-center gap-5 m-auto items-center justify-center mt-10 w-[90%] h-auto`}>

        <img ref={img1Ref} src={honb} alt="Gallery Image" className={`w-[220px] box-shadow-lg rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img1InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }} />

        <img ref={img2Ref} src={honb2} alt="Gallery Image" className={`w-[220px] box-shadow-lg rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img2InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }} />

        <img ref={img3Ref} src={honb3} alt="Gallery Image" className={`w-[220px] rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img3InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }} />
          
        <img ref={img4Ref} src={honb4} alt="Gallery Image" className={`w-[220px] box-shadow-lg rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img4InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }} />

        {/* <img ref={img5Ref} src={honb5} alt="Gallery Image" className={`w-[20%] box-shadow-lg h-[450px] min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img5InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }} /> */}

        <img ref={img6Ref} src={honb6} alt="Gallery Image" className={`w-[220px] box-shadow-lg rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[250px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img6InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }} />

        <img ref={img7Ref} src={honb7} alt="Gallery Image" className={`w-[220px] box-shadow-lg rounded-lg h-[270px] max-sm:h-[400px] max-sm:min-w-[300px] max-sm:w-full transform hover:scale-105 transition duration-300 ${img7InView ? 'animate-fade' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  )
}