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
              Certainly! Here's a compelling call-to-action paragraph for your
              website: Ready to revolutionize your business licensing
              process? Join us in modernizing government services and making
              licensing effortless for everyone involved. Streamline your
              applications, enjoy faster approvals, and stay updated with
              real-time tracking. Sign up now and experience the future of
              efficient and transparent licensing! 
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
