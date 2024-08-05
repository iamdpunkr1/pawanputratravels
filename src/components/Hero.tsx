// import videoplayback from "../assets/videoplayback.mp4";
// import Reveal from "../partials/Reveal"

type HeroProps = {
    handleClick: () => void
    }


const Hero = ({handleClick}: HeroProps) => {
  return (
    <div id="home" className="relative -top-20 h-screen z-0 ">

      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
    </div>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <div className="inline-block flex justify-center items-center">
          <Reveal>
           <h2 className="text-center text-3xl text-white inline-block max-w-full">Welcome to</h2>
          </Reveal>
          </div>
          <h1 className="text-8xl">TREND MMS</h1>
          <p className="text-2xl text-white text-center">We are the best in the business</p>
          
      </div> */}
      <button onClick={handleClick} className="scroll-down-btn animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-transparent text-white px-4 py-2 rounded-full">
      <svg
        viewBox="0 0 1024 1024"
        className="icon w-8 h-8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
            fill="#ffffff"
          />
        </g>
      </svg>
      </button>
   </div>
  )
}

export default Hero