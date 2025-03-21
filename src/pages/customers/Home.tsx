import React from "react";
import Hero from "./Hero";
import About from "./About";
import CallAction from "./CallAction";
import Stats from "./Stats";

// If Hero, About, and CallAction components have props, define their types
// For example:
// interface HeroProps {
//   title: string;
// }
// const Hero: React.FC<HeroProps> = ({ title }) => {
//   return <div>{title}</div>;
// };

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <CallAction />
      <Stats />
    </div>
  );
};

export default Home;
