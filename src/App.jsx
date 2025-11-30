import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import Services from "./component/services/Services";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div className="overflow-hidden bg-[#E9E4DC]">
      <Home />
      <Navbar />
      <AboutSection />
      <Services />
      <Footer/>
    </div>
  );
};

export default App;
