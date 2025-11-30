import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import Stylists from "./component/stylists/Stylists";
import HowPage from "./component/how/HowPage";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <Navbar />
      <AboutSection />
      <Stylists/>
      <HowPage />
    </div>
  );
};

export default App;
