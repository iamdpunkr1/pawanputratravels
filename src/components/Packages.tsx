
import Package from "../partials/Package"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef } from "react";
import tours from "../data/tour";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  autoplaySpeed: 4000,
  arrows:false,
  draggable:true,
  responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

const Packages = forwardRef<HTMLElement>((_, ref) => {
  const newTours = tours.filter(t=>  t.state.includes("Meghalaya") || t.state.includes("Arunachal"))
  console.log(newTours)
  return (
    <section ref={ref} className="max-w-6xl mx-auto relative">
      {/* <div className='animate-blob2 absolute bg-teal-500 h-96 w-96 rounded-full z-1 blur-2xl right-0 -bottom-10 opacity-50'></div> */}
      <h6 className="text-[#3FC1C9] text-xl font-semibold">Our Packages</h6>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:justify-between pt-2">
        <h1 className="text-[#364F6B] font-semibold text-4xl lg:text-5xl">Explore beautiful places now</h1>
        <Link to="/tours" >
        <button className="btn btn-sm btn-outline btn-primary">
          View All
        </button>
        </Link>
      </div>
    <div className="w-full py-28 relative">
      <Slider {...settings} className="mx-auto w-11/12 ">
          {
           newTours && newTours.map(t => <Package key={t.slno} {...t}/>)
          }
      </Slider>
    </div>
    </section>
  )
})

export default Packages