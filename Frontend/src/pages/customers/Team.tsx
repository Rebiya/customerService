import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ppl1 from "../../assets/images/testimonials/testimonials-1.jpg";
import ppl2 from "../../assets/images/testimonials/testimonials-2.jpg";
import ppl3 from "../../assets/images/testimonials/testimonials-3.jpg";
import ppl4 from "../../assets/images/testimonials/testimonials-4.jpg";
import ppl5 from "../../assets/images/testimonials/testimonials-5.jpg";
import bg from "../../assets/images/testimonials-bg.jpg";

import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: ppl1,
    quote: "Proin iaculis purus consequat...",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: ppl2,
    quote: "Export tempor illum tamen...",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: ppl3,
    quote: "Enim nisi quem export duis...",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: ppl4,
    quote: "Fugiat enim eram quae...",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    image: ppl5,
    quote: "Quis quorum aliqua sint...",
  },
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Walter White",
    role: "CEO",
    image: team1,
    socialLinks: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    image: team2,
    socialLinks: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "William Anderson",
    role: "CTO",
    image: team3,
    socialLinks: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    image: team4,
    socialLinks: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16  text-black">
      {/* Testimonials Section */}
      <div className="relative container mx-auto px-4 mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Testimonials
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-8">
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <h4 className="text-black text-sm mb-3">
                  {testimonial.role}
                </h4>
                <p className="text-black italic">{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 ">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="w-full bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {member.socialLinks && (
                      <>
                        <a
                          href={member.socialLinks.twitter || "#"}
                          className="text-white hover:text-blue-400"
                        >
                          Twitter
                        </a>
                        <a
                          href={member.socialLinks.facebook || "#"}
                          className="text-white hover:text-blue-600"
                        >
                          Facebook
                        </a>
                        <a
                          href={member.socialLinks.instagram || "#"}
                          className="text-white hover:text-pink-500"
                        >
                          Instagram
                        </a>
                        <a
                          href={member.socialLinks.linkedin || "#"}
                          className="text-white hover:text-blue-700"
                        >
                          LinkedIn
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <span className="text-gray-600 text-sm">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
