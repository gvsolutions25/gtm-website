import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Phase from "./components/Phase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Phase />
      <Features />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
