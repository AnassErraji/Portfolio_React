import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew"
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials/Testimonials';
import AddTestimonial from './components/addTestimonial/AddTestimonial';
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Testimonials" element={<Testimonials/>} />
          <Route path="/addTestimonial" element={<AddTestimonial/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
