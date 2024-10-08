import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ToursAndPackages from "./pages/ToursAndPackages";
import Itinerary from "./pages/Itinerary";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursAndPackages/>} />
        <Route path="/itinerary/:itineraryCode" element={<Itinerary/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>

   </>
  )
}

export default App
