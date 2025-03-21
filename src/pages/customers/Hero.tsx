import React from "react";
import img from "../../assets/images/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="hero section dark-background relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={img}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30" // Reduced opacity for better text visibility
        data-aos="fade-in"
      />

      {/* Content Container */}
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading and Description */}
        <div
          className="max-w-2xl mx-auto space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Powerful Digital <br />
            Solutions With GP.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white">
            {" "}
            {/* Changed text color to white for better contrast */}
            Let's make the licensing process easier and more efficient together!
          </p>
        </div>

        {/* Icon Grid */}
        <div
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            {
              icon: "bi-binoculars",
              text: "Business Registration",
              delay: 300,
            },
            {
              icon: "bi-bullseye",
              text: "Licence Issuance and Renewal",
              delay: 400,
            },
            {
              icon: "bi-fullscreen-exit",
              text: "Vat and Tax Registration",
              delay: 500,
            },
            {
              icon: "bi-card-list",
              text: "Investment Permit Approval",
              delay: 600,
            },
            {
              icon: "bi-gem",
              text: "Inspection and Compliance Verification",
              delay: 700,
            },
          ].map(({ icon, text, delay }) => (
            <div
              key={text}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div
                className="icon-box p-4 sm:p-6 rounded-lg shadow-md text-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 cursor-pointer w-full h-48 sm:h-56 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => navigate("/services")}
              >
                <i
                  className={`${icon} text-2xl sm:text-3xl mb-2 text-white`}
                ></i>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  {text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
