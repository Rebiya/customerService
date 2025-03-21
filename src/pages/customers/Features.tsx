import React from "react";
import img from "../../assets/images/features-bg.jpg";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className="features-image"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={img}
              alt="Features Background"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-8">
            <div
              className="features-item flex ps-0 lg:ps-8 pt-4 lg:pt-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-archive flex-shrink-0 text-2xl mr-4"></i>
              <div>
                <h4 className="text-xl font-semibold">Est labore ad</h4>
                <p className="text-gray-600">
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
            <div
              className="features-item flex mt-5 ps-0 lg:ps-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-basket flex-shrink-0 text-2xl mr-4"></i>
              <div>
                <h4 className="text-xl font-semibold">Harum esse qui</h4>
                <p className="text-gray-600">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
            <div
              className="features-item flex mt-5 ps-0 lg:ps-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-broadcast flex-shrink-0 text-2xl mr-4"></i>
              <div>
                <h4 className="text-xl font-semibold">Aut occaecati</h4>
                <p className="text-gray-600">
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
            <div
              className="features-item flex mt-5 ps-0 lg:ps-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-camera-reels flex-shrink-0 text-2xl mr-4"></i>
              <div>
                <h4 className="text-xl font-semibold">Beatae veritatis</h4>
                <p className="text-gray-600">
                  Expedita veritatis consequuntur nihil tempore laudantium vitae
                  denat pacta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
