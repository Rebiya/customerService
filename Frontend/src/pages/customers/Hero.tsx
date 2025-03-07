import React from "react";
import img from "../../assets/images/hero-bg.jpg";
const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img
        src={img}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        data-aos="fade-in"
      />
      <div className="container mx-auto text-center py-20">
        <div
          className="row justify-content-center text-center max-w-2xl mx-auto space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl font-bold text-white">
            Powerful Digital <br />
            <br />
            Solutions With GP .
          </h2>
          <p className="text-lg text-gray-300">
            Let's make the licensing process easier and more efficient together!
          </p>
        </div>

        <div
          className="row gy-4 mt-10 justify-content-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
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
              text: "Licence issuance and Renewal",
              delay: 400,
            },
            {
              icon: "bi-fullscreen-exit",
              text: "Vat and Tax Registration",
              delay: 500,
            },
            { icon: "bi-card-list", text: "Investment Permit Approval", delay: 600 },
            { icon: "bi-gem", text: "Inspection and Compliance Verification", delay: 700 },
          ].map(({ icon, text, delay }) => (
            <div
              key={text}
              className="col-xl-2 col-md-4 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="icon-box p-4 rounded-lg shadow-md text-center">
                <i className={`${icon} text-2xl mb-2 text-white`}></i>
                <h3 className="text-xl font-semibold text-white">
                  <a href="#" className="text-accent hover:underline">
                    {text}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Hero;
