import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />

      <Services />
      <Cta />
      <Testimonials />


      <Newsletter />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
