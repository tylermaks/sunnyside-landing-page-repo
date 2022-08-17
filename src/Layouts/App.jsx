import React from "react"
import '../Assets/Styles/AppStyle/App.css';

import Hero from "./Hero";
import Features from "./Features"
import Testimonials from "./Testimonials"
import Gallery from "./Gallery"
import Footer from "./Footer"

function App() {
  return (
    <main className="App">
      <Hero />
      <Features />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
