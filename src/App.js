import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services/Services";
import AboutVision from "./Pages/AboutVision/AboutVision";
import Header from "./Layoyt/Header/Header";
import Footer from "./Layoyt/Footer/Footer";
import { useState } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  const [show, setShow] = useState(true);
  const [color, setColor] = useState(false);
  const hideSide = () => {
    if(window.scrollY>=100){
      setShow(true);
    }
  }
  window.addEventListener("scroll", hideSide);

  return (
    <div className="app">
      <Header
        setShow={setShow}
        show={show}
        color={color}
        setColor={setColor}
      />
      <Routes>

        <Route path="*" element={<Home show={show} setShow={setShow} />} />
        <Route
          path="/services"
          element={<Services setShow={setShow} setColor={setColor} />}
        />
        <Route
          path="/about/vision"
          element={<AboutVision setShow={setShow} setColor={setColor} />}
        />
        <Route
          path="/contact"
          element={<ContactUs setColor={setColor} setShow={setShow} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
