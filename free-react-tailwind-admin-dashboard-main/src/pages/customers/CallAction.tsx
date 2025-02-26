// CallToAction.tsx
import React from "react";
import bg from "../../assets/images/cta-bg.jpg";
const CallAction: React.FC = () => {
  return (
    <section
      id="call-to-action"
      className="relative py-16 bg-gray-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Container */}
      <div className="relative container mx-auto px-4">
        <div className="flex justify-center">
          <div
            className="max-w-5xl w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Call To Action
            </h3>
            <p className="text-gray-200 mb-6 text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-700 text-white px-6 py-3 rounded-md 
                        hover:bg-yellow-800 transition-colors duration-300 
                        font-medium text-lg"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;
