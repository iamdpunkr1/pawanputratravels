import { Zoom } from "react-awesome-reveal"

type ServiceProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}


const Service = ({icon, title, description}: ServiceProps) => {
  return (
    <Zoom className="w-full md:w-1/2 lg:1/3 h-30" triggerOnce={true}>
    <div className=" bg-white  sale-card ">
      
       <div className="contentA px-4 py-6 " >
                            <div className="flex items-center ">
                                <div className=" p-2 rounded-full mr-4">
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{title}</h3>
                                    <p className="text-sm text-[#666]">{description}</p>
                                </div>
                            </div>
        </div> 
        
        <div  className="contentB text-white bg-[#222] w-full h-full text-sm ">
            <div className="flex justify-center items-center px-6 py-11">
                <button className="btn btn-outline btn-sm btn-accent">View Details</button>
            </div>
        </div>
        
    </div>
    </Zoom>
  )
}

export default Service