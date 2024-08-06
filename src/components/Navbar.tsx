import { useState, useEffect } from 'react';
import logo2 from '../assets/logo2.png';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const navStyles = "cursor-pointer hover:text-[#3FC1C9] text-[#364F6B] font-medium";
const activeNavStyles = "border-b-2 border-[#3FC1C9]"; // Add this class for active link

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
          <NavLink to="/">
            <img src={logo2} alt='logo' className='w-48 hover:scale-110 duration-300 ease-in cursor-pointer' />
          </NavLink>
        </div>
        <div className="flex items-center lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} color={"#364F6B"} />
        </div>
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-x-8'>
            <li className={navStyles}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}
              >
                Home
              </NavLink>
            </li>
            <li className={navStyles}>
              <NavLink
                to="/tours"
                className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}
              >
                Packages
              </NavLink>
            </li>
            {/* <li className={navStyles}><NavLink to="#services" className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}>Services</NavLink></li> */}
            <li className={navStyles}>
              <a
                href="#aboutus"
                className={navStyles}
              >
                About Us
              </a>
            </li>
            <li className={navStyles}>
              <a
                href="#contactus"
                className={navStyles}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`absolute lg:hidden sidenav ${isOpen ? "show navbar-glass" : ""}`}>
        <ul className="font-semibold flex flex-col hover:text-[#3FC1C9] text-[#364F6B] gap-8 px-8 mt-28">
          <li className={navStyles}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}
            >
              Home
            </NavLink>
          </li>
          <li className={navStyles}>
            <NavLink
              to="/tours"
              className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}
            >
              Packages
            </NavLink>
          </li>
          {/* <li className={navStyles}><NavLink to="#services" className={({ isActive }) => isActive ? `${navStyles} ${activeNavStyles}` : navStyles}>Services</NavLink></li> */}
          <li className={navStyles}>
              <a
                href="#aboutus"
                className={navStyles}
              >
                About Us
              </a>
            </li>
            <li className={navStyles}>
              <a
                href="#contactus"
                className={navStyles}
              >
                Contact Us
              </a>
            </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
