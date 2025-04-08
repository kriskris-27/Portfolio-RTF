import { useEffect } from "react";



import CustomCursor from "./framer/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./framer/ScrollProgress";
import Layout from "./framer/Layout";
import './index.css'

import HoverGraph from "./framer/HoverGraph";
import About from "./components/Aboutme";
import SkillsSection from "./components/Skillsection";


function App() {

    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
          }
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Smooth scrolling animation
          });
        }, 100); // Small delay to prevent flickering
      }, []);
    
    
  return (
    <div>
       
    <Layout>
    <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <HoverGraph/>
      <About/>
      <Projects />
      <SkillsSection/>
      <HoverGraph/>
      <Contact />
      <Footer />
      </Layout>
    </div>
  );
}

export default App;
