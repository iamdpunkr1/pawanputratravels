import  { useState, useEffect } from 'react';
import logo2 from '../assets/logo.png';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const navStyles = "cursor-pointer hover:text-[#3FC1C9] text-[#364F6B] font-medium";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-50  ${scrolled ? 'bg-[#F5F5F5]' : 'navbar-glass'}`} style={{zIndex:999}}>
      <nav className='max-w-[1200px] mx-auto flex justify-between py-2'>
        <div className='text-xl font-bold'>
          <img src={logo2} alt='logo' className='w-48' />
        </div>
        <div className="flex items-center lg:hidden">
                 <Hamburger toggled={isOpen} toggle={setOpen} size={30} color={"#364F6B"}  />
        </div>
        <div className='hidden lg:flex' >
        <ul className='flex items-center gap-x-8  '>
          <li className={navStyles}><Link to="/">Home</Link></li>
          <li className={navStyles}><Link to="/tours"> Packages</Link></li>
          {/* <li className={navStyles}><a href="#services">Services</a></li> */}
          <li className={navStyles}><Link to="#aboutus">About Us</Link></li>
          <li className={navStyles}><a href="#contactus">Contact Us</a></li>

        </ul>   
        </div>
      </nav>

      <div className={`absolute lg:hidden sidenav ${isOpen? "show navbar-glass": ""}`}>
                   
                   <ul className="font-semibold flex flex-col  hover:text-[#3FC1C9] text-[#364F6B] gap-8 px-8 mt-28">
                   <li className={navStyles}><a href="#home">Home</a></li>
                  <li className={navStyles}><a href="#about">Packages</a></li>
                  {/* <li className={navStyles}><a href="#event">Services</a></li> */}
                  <li className={navStyles}><a href="#contactus">About Us</a></li>
                  <li className={navStyles}><a href="#contactus">Contact Us</a></li>
                   </ul>
     </div>
    </header>
  );
};

export default Navbar;
