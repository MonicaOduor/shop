import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Store from "./Pages/Store";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import CardImg from "./Components/CardImg";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-5 pr-5 pl-5">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
}

function Body() {
  return (
    <>
      <CardImg />
      <div className="row">
        {/* <div className="col-lg-3 col-md-3 col-sm-12" id="sticky-sidebar">
          <Categories />
        </div> */}
        <div className="col-12" id="main">
          <Store />
        </div>
      </div>
    </>
  );
}

export default App;
