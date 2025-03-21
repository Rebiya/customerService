import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Features from "./Features";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Testimonials from "./Testimonial";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "../../pages/OtherPage/NotFound";
// import PrivateAuthRoute from "../../util/PrivateAuthRoute";

const CustomerRoute = () => {
   
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="features" element={<Features />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoute;
