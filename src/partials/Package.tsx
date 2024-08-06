import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { TourType } from "../data/tour";
// import { useState } from "react";
// import itinerary from "../components/itinerary";
import { Link } from "react-router-dom";
// Define the interface for each day's details
// interface ItineraryDay {
//   day: number;
//   title: string;
//   description: string;
// }

// Define the interface for the entire itinerary object
// interface ItineraryType {
//   title: string;
//   duration: string;
//   itineraryCode: string;
//   days: ItineraryDay[];
// }


const Package = ({slno:_, state, image, placesCovered, days, nights, itineraryCode}:TourType) => {
  // const [showModal, setShowModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [itineraryDetails, setItineraryDetails] = useState<ItineraryType|null>(null);

  // const handleModalOpen = () => {
  //   // setLoading(true);
  //   const findDetails:any = itinerary.find(i => i.itineraryCode === itineraryCode);
  //   setItineraryDetails(findDetails);
  //   setShowModal(true);
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  // if(loading){
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }


  return (
    <div className="card my-4 max-w-80 h-[500px] bg-white shadow-md">
    <figure className=" h-[400px]"><img className=" hover:scale-125 transition duration-1000 ease-in-out" src={image} alt={itineraryCode} /></figure>
    <div className="h-full card-body flex flex-col">
        <h2 className="h-2/12 text-xl font-semibold hover:text-primary cursor-pointer pb-3">
          {state}
        </h2>
        <div className="flex gap-2 h-8/12">
          <div className="w-full space-y-4 border-r pr-[3px]">

            <div className="flex gap-2">
              <IoLocationOutline size={22} className="mt-[2px] w-1/12"/>
              <span className="text-sm font-medium w-11/12">{placesCovered}</span>
            </div>

            <div className="flex items-center gap-2">
              <IoTimeOutline  size={20}/>
              <span  className="text-sm font-semibold">{days} Days - {nights} Nights</span>
            </div>
          </div>

          {/* <div className="w-5/12 pl-2">
             <div className="badge badge-sm text-xs badge-secondary">20% off</div>
             <div className="flex flex-col pt-2">
                <span className="text-sm text-gray-500 line-through">₹25,000</span>
                <span className="text-2xl font-bold">₹20,000</span>
             </div>
          </div> */}

        </div>
        <div className="card-actions mx-auto pt-8">
          <Link to={`/itinerary/${itineraryCode}`}>
             <button  className="btn btn-outline btn-neutral w-full">
              View Details
              </button>
          </Link>
        </div>
    </div>


    </div>
  )
}

export default Package