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
              Business Licensing & Trade Registration
            </h3>
            <p className="italic text-gray-600 mb-6">
              We're excited to introduce our Business Licensing & Trade
              Registration system, designed to make the process of obtaining and
              managing business licenses easier and more efficient for everyone
              involved. Whether you're a business owner, a government officer,
              or just curious about how this works, we've got you covered!
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Easy to Use: Our platform is designed with simplicity in mind. You can fill out forms, upload documents, and track your application status with just a few clicks.",
                "Faster Processing: Say goodbye to long wait times and manual paperwork. Our digital system speeds up the licensing process, so you can focus on growing your business.",
                "Scalable for Future Needs: As your business grows, our system can grow with you. We can add new features like online payments or advanced document verification as needed.",
              ].map((text, index) => (
                <li key={index} className="flex items-center">
                  <i className="bi bi-check2-all text-green-500 mr-2"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              Keep track of your application status and receive updates via
              email or SMS. Your information is securely stored and accessible
              only to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
