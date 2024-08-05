import travel from "../assets/travel.webp"
// import roadTrip from "../assets/roadTrip.webp"

const About = () => {
  return (
    <section id="aboutus" className="max-w-7xl mx-auto h-full   py-20 relative">
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
    <h6 className="text-[#3FC1C9] font-bold">About us</h6>
    <h1 className="text-[#364F6B] font-semibold text-5xl">What we do</h1>

    <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row  justify-between pt-16">
        <div className="w-full lg:w-6/12 text-gray-600 text-justify space-y-2 text-sm px-2 ">
                <h1>Welcome to Pawanputra Tours & Travels</h1>
                <p>Embark on a journey through the enchanting realms of India and Southeast Asia with Pawanputra Tours & Travels. Founded in 2016 and nestled in the heart of Guwahati, we take pride in curating bespoke inbound and outbound tours that celebrate the spirit of adventure and discovery.</p>
                
                <p>Our dedication to excellence has allowed us to craft over 500 distinctive package tours, each tailored to weave unforgettable memories for our cherished travelers. Operating from our bustling office in Guwahati, we boast a robust fleet of cars ensuring seamless journeys that cater to your preferences.</p>
                
                <p>
                Join us at Pawanputra Tours & Travels and discover how every journey with us unfolds a new and captivating story. Cheers to your next adventure!
                </p>
        </div>

        <div className="w-full lg:w-6/12 z-50 relative">
             <img src={travel} alt="roadTrip" className="w-full relative lg:-top-10  mx-auto "/>
            {/* <img src={travelBag} alt="travelBag" className="w-72 rounded-md absolute -bottom-24 left-28 "/> */}
        </div>
      </div>
    </section>
  )
}

export default About