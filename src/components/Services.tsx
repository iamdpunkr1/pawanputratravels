// import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiIsland } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
// import { BsWindowDesktop } from "react-icons/bs";
import Service from "../partials/Service";


const items = [
    {
        title:"20+",
        description:"Travel Packages we offer",
        icon: <GiIsland size={50} color={"#3FC1C9"} />
    },
    {
        title:"Vehicles",
        description:"Cars available for rent we have in stock",
        icon: <FaCar size={50} color={"#3FC1C9"} />
    },
    // {
    //     title:"100+",
    //     description:"Hotels we have partnered with",
    //     icon: <HiBuildingOffice2 size={50} color={"#3FC1C9"} />
    // }
]


const Services = () => {
  return (
    <section id="services" className="w-full py-16 bg-gray-800 ">
      <div className="max-w-7xl mx-auto">
      
      <div className="text-center py-4">
        <h1 className={`text-5xl font-semibold text-white text-center`}>
            Our <span className="text-[#3FC1C9]">Services</span>
        </h1>
        
        <div className="flex justify-center h-5 mt-4 relative">
            <span className="relative h-[2px] bg-[#3FC1C9] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
            <h4 className={`text-sm font-semibold mx-1 text-white "}`}>
              We offer best travelling services
            </h4>
            <span className="relative h-[2px] bg-[#3FC1C9] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
        </div>
        
    </div>

      <div className="max-w-[1200px] mx-4 md:lg:mx-auto flex justify-center flex-wrap md:lg:flex-nowrap gap-4 items-center h-96">
        {
            items.map((item, index) => <Service key={index}
                                                  title={item.title}
                                                  description={item.description}
                                                  icon={item.icon} /> 
                                                )
         }
        </div>
        </div>
    </section>
  )
}

export default Services