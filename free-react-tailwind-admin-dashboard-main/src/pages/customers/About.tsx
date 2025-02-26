import React from "react";
import img from "../../assets/images/about.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:order-2">
            <img
              src={img}
              className="w-full h-auto rounded-lg shadow-md"
              alt="About Us"
            />
          </div>
          <div className="lg:order-1">
            <h3 className="text-3xl font-bold mb-4">
              Voluptatem dignissimos provident
            </h3>
            <p className="italic text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
              ].map((text, index) => (
                <li key={index} className="flex items-center">
                  <i className="bi bi-check2-all text-green-500 mr-2"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
