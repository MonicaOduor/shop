import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
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

export default App;
