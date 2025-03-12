import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import Layout from "./components/Layout";



function App() {
  return (
    <div>
    <Layout>
    <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
      </Layout>
    </div>
  );
}

export default App;
