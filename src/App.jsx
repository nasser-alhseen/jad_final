import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import About from "./components/About";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';



export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: false,

    });
    sr.reveal(
      `

        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        #aboutus
        `,
      {
        opacity: 0.5,
        interval: 200,
      }
    );
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="maindiv">
        <ScrollToTop />
        <Hero />
        <Services />
        <Recommend />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </LocalizationProvider>

  );
}
