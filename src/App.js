import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./Pages/Services/Services";
import About from "./Pages/AboutPage/About";
import Pricing from "./Pages/PricingPage/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={Home()} />
        <Route path='/' element={Home()} />
        <Route path='/services' element={Services()} />
        <Route path='/about' element={About()} />
        <Route path='/pricing' element={Pricing()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
