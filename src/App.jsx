import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from "./components/navbar";
import Hero from "./components/hero"
import Services from "./components/services"
import Hosting from "./components/hosting-pricing"
import Footer from "./components/footer"

const App = () => {
 

  return (
    <>
      <NAVBAR />
      <Hero />
      <Services/>
      <Hosting />
      <Footer />
    </>
  );
};

export default App
