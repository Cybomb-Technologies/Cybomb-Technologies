import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popupform from "./component/popup-form/popup-form";

import ScrollToTop from "./component/ScrollToTop";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";

import emp1Routes from "./Emp/emp-1";
import emp2Routes from "./Emp/emp-2";
import emp3Routes from "./Emp/emp-3";
import emp4Routes from "./Emp/emp-4";

import Nav1 from "./component/nav1/nav1";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Nav/>
      {/* <Nav1/> */}
      <Routes>
        {emp1Routes}
        {emp2Routes}
        {emp3Routes}
        {emp4Routes}
      </Routes>
      <Popupform/>
      <Footer />
    </Router>
  );
}

export default App;
