import Nav from "./assets/components/Nav";
import Hero from "./assets/components/Hero";
import Section1 from "./assets/components/Section1";
import Section2 from "./assets/components/Section2";
import Section3 from "./assets/components/Section3";
import Section4 from "./assets/components/Section4";
import Footer from "./assets/components/Footer";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <div id="home">
      <Nav />
      <Hero />
      <div className="px-4 lg:px-[96px]">
        <div id="about">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <div id="service">
          <Section4 />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
