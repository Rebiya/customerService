import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Import all client images explicitly
import client1 from "../../assets/images/client-1.png";
import client2 from "../../assets/images/client-2.png";
import client3 from "../../assets/images/client-3.png";
import client4 from "../../assets/images/client-4.png";
import client5 from "../../assets/images/client-5.png";
import client6 from "../../assets/images/client-6.png";
import client7 from "../../assets/images/client-7.png";
import client8 from "../../assets/images/client-8.png";

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
  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="align-items-center"
        >
          {clientImages.map((client, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={client}
                className="w-full h-auto"
                alt={`Client ${index + 1}`}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
