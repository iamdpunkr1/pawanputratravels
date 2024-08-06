import { useState, useEffect } from "react";
import tours from "../data/tour";
import Package from "../partials/Package";

const ToursAndPackages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState(tours);


  useEffect(() => {
    if (searchQuery === "") {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter(tour =>
        tour.state.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTours(filtered);
    }
  }, [searchQuery]);

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className=" bg-gray-50  py-8 ">
      <div className="flex justify-center flex-wrap md:justify-between gap-4 py-8 max-w-7xl mx-auto px-4">
        <h1 className="text-[#364F6B] font-semibold text-3xl">Our packages</h1>
        
        <label className="input input-bordered flex items-center w-[300px] gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      
      <div className="flex justify-center flex-wrap gap-8 max-w-7xl mx-auto px-4">
        {
          filteredTours && filteredTours.map(t => <Package key={t.slno} {...t} />)
        }
      </div>


    </section>
  );
}

export default ToursAndPackages;
