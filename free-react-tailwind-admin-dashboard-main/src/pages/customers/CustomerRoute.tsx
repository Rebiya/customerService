import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import Features from "./Features";
import Services from "./Services";
import CallAction from "./CallAction";
import Portfolio from "./Portfolio";
import Stats from "./Stats";
import Testimonials from "./Testimonial";
import Team from "./Team";
import Contact from "./Contact";

const CustomerRoute = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Features />
      <Services />  
      <CallAction />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default CustomerRoute;
