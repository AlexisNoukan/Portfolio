import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Knowledge from "./pages/Knowledge";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutMe />
        <Project />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
