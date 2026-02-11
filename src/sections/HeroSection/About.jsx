
import { useInView } from '../../hooks/useInView'

export default function About() {
  const [titleRef, titleInView] = useInView()
  const [contentRef, contentInView] = useInView()

  return (
    <div>
      {/* About The Artist */}
      <div className="flex bg-[#0b1221] flex-col w-[100vw] h-auto items-center justify-center py-10 pt-[5em] items-center justify-center">

        <h1 ref={titleRef} className={`flex max-sm:m-auto max-sm:text-5xl text-5xl font-bold text-[##155DFC] text-center max-sm:text-[23px] ${titleInView ? 'animate-slide-down' : 'opacity-0'}`}>About The Artist</h1>
        
        <div ref={contentRef} className={`flex max-sm:flex-col flex-row gap-10 mt-10 px-5 max-sm:px-2 justify-center items-center w-[90%] h-auto m-auto items-center justify-center`}>

          <div className={`flex flex-col gap-15 p-5 rounded-lg w-[50%] h-100 max-sm:w-full max-sm:h-auto max-sm:py-5 items-center justify-center bg-gray-650 box-shadow-white py-3 ${contentInView ? 'animate-box-1' : 'opacity-0'}`}>
            <p className="flex">HoneyBee Chimaoke Ukattahon Vincent, born on 16th April 1994 in Abia State, Nigeria, is a UK-based Afrobeats singer known for electrifying stage performances and infectious rhythms.</p>

            <p className="flex">He began music and stage performance in 2012 while studying at Michael Okpara University of Agriculture, Nigeria. Blending African roots with global influence, HoneyBee's sound is designed to move crowds, connect cultures, and dominate the stage.</p>
          </div>

          <div className="flex flex-col gap-10 right p-5 rounded-lg max-sm:w-full w-[50%] h-full items-center justify-center">
            <ul className={`flex flex-col w-full max-sm:w-full gap-2 flex-col border border-gray-600 rounded-lg gap-3 py-5 px-10 box-shadow-blue ${contentInView ? 'animate-box-2' : 'opacity-0'}`}>
              <h1 className="flex text-[#fff] text-xl font-bold  max-sm:text-center  max-sm:w-full">Education</h1>
              <li className="flex">BSc Nursing – Philippines (2021)</li>
              <li className="flex">Diploma in Theology (2014)</li>
              <li className="flex">Virgen Milagrosa University Foundation, San Carlos City, Pangasinan Philppines</li>
            </ul>

            <div className={`flex flex-col gap-2 flex-col border border-gray-700 rounded-lg gap-3 py-5 px-10 box-shadow-blue ${contentInView ? 'animate-box-1' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}>
              <h1 className="flex text-[#fff] text-xl font-bold">Education</h1>
              <p className="flex">Music & stage performance since 2012, bringing authentic Afrobeats energy to global audiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}