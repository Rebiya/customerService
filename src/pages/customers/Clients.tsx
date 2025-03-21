import React from "react";
import Slider from "react-slick";

// Import all client images explicitly
import client1 from "../../assets/images/client-1.png";
import client2 from "../../assets/images/client-2.png";
import client3 from "../../assets/images/client-3.png";
import client4 from "../../assets/images/client-4.png";
import client5 from "../../assets/images/client-5.png";
import client6 from "../../assets/images/client-6.png";
import client7 from "../../assets/images/client-7.png";
import client8 from "../../assets/images/client-8.png";

// Import React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
];

const Clients: React.FC = () => {
  // Settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992, // For screens smaller than 992px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Slider {...settings} className="align-items-center">
          {clientImages.map((client, index) => (
            <div key={index} className="flex justify-center items-center px-2">
              <img
                src={client}
                className="w-full h-auto"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
