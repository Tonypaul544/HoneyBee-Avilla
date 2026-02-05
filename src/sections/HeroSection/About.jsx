
// import HeroSection from './sections/HeroSection/HeroSection'

export default function About() {
  return (
    <div>
      {/* About The Artist */}
      <div className="flex bg-[#0b1221] flex-col w-[100vw] h-auto items-center justify-center py-10 pt-[5em] items-center justify-center">

        <h1 className="flex max-sm:m-auto max-sm:text-5xl text-5xl font-bold text-[#60a5fa] text-center">About The Artist</h1>
        
        <div className="flex max-sm:flex-col flex-row gap-10 mt-10 px-5 max-sm:px-2 justify-center items-center w-[100%] h-auto m-auto items-center justify-center">

          <div className="flex flex-col gap-15 p-5 rounded-lg w-[50%] h-100 max-sm:w-full h-100 items-center justify-center bg-[#042875] box-shadow-white">
            <p className="flex">HoneyBee Chimaoke Ukattahon Vincent, born on 16th April 1994 in Abia State, Nigeria, is a UK-based Afrobeats singer known for electrifying stage performances and infectious rhythms.</p>

            <p className="flex">He began music and stage performance in 2012 while studying at Michael Okpara University of Agriculture, Nigeria. Blending African roots with global influence, HoneyBee's sound is designed to move crowds, connect cultures, and dominate the stage.</p>
          </div>

          <div className="flex flex-col gap-10 right p-5 rounded-lg max-sm:w-full w-[50%] h-full items-center justify-center">
            <ul className="flex flex-col w-full gap-2 flex-col border border-blue-600 rounded-lg gap-3 py-5 px-10 box-shadow-blue">
              <h1 className="flex text-[#60a5fa] font-bold">Education</h1>
              <li className="flex">BSc Nursing – Philippines (2021)</li>
              <li className="flex">Diploma in Theology (2014)</li>
              <li className="flex">Michael Okpara University of Agriculture, Nigeria</li>
            </ul>

            <div className="flex flex-col gap-2 flex-col border border-blue-600 rounded-lg gap-3 py-5 px-10 box-shadow-blue">
              <h1 className="flex text-[#60a5fa] font-bold">Education</h1>
              <p className="flex">Music & stage performance since 2012, bringing authentic Afrobeats energy to global audiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}