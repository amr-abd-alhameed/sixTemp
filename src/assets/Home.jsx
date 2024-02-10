import React from "react";
import Header from "../components/Header.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
