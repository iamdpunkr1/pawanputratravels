import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import itinerary from "../data/itinerary";
import tours from "../data/tour";

// Define the interface for each day's details
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

// Define the interface for the entire itinerary object
interface ItineraryType {
  title: string;
  duration: string;
  itineraryCode: string;
  gForm?: string;
  days: ItineraryDay[];
}

const Itinerary = () => {
  const [loading, setLoading] = useState(false);
  const [itineraryDetails, setItineraryDetails] = useState<ItineraryType | null>(null);
  const { itineraryCode } = useParams<{ itineraryCode: string }>();
  const [state, setState] = useState('');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoading(true);
    const tour = tours.find(t => t.itineraryCode === itineraryCode);
    const state = tour ? tour.state : '';
    setState(state);
    const findDetails = itinerary.find(i => i.itineraryCode === itineraryCode) as ItineraryType;
    setItineraryDetails(findDetails);
    setLoading(false);
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [itineraryCode]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section key={itineraryCode} ref={ref} className="max-w-7xl mx-auto pt-20 pb-28">
      {itineraryDetails ? (
        <div>
          <div className="flex justify-between">
            <div >
              <h2 className="text-3xl font-bold py-2" >{state}</h2>
              <h3 className="text-2xl font-semibold text-gray-700">{itineraryDetails.title}</h3>
              <p className="py-2 font-semibold text-xl text-indigo-400">{itineraryDetails.duration}</p>
            </div>
            <div className="modal-action flex items-start">
              <Link to={itineraryDetails.gForm || ""}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
          <div>
            {itineraryDetails.days.map((day) => (
              <div key={day.day} className="collapse collapse-plus bg-base-200 my-2">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">Day {day.day}: {day.title}</div>
                <div className="collapse-content">
                  <p>{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Itinerary not found</h1>
      )}
    </section>
  );
};

export default Itinerary;
