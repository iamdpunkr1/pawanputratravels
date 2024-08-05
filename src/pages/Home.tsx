import {  useRef } from "react";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
    const packagesRef = useRef<HTMLElement>(null);

    const scrollToYTVideos = () => {
        if (packagesRef.current) {
            packagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero handleClick={scrollToYTVideos} />
            <Packages ref={packagesRef} />
            <Services />
            <About />
        </>
    );
};

export default Home;
