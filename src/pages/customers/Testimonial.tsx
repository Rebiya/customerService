import React from "react";
import Slider from "react-slick";
import ppl1 from "../../assets/images/testimonials/testimonials-1.jpg";
import ppl2 from "../../assets/images/testimonials/testimonials-2.jpg";
import ppl3 from "../../assets/images/testimonials/testimonials-3.jpg";
import ppl4 from "../../assets/images/testimonials/testimonials-4.jpg";
import ppl5 from "../../assets/images/testimonials/testimonials-5.jpg";
import bg from "../../assets/images/testimonials-bg.jpg";

// Import React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: ppl2,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: ppl3,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: ppl4,
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    image: ppl5,
    quote:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
];

const Testimonials: React.FC = () => {
  // Settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="relative py-8 sm:py-16 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Container */}
      <div
        className="relative container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Slider {...settings} className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 py-4 sm:py-8">
              <div className="text-center text-white max-w-xs sm:max-w-md mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 sm:mb-4 border-4 border-white shadow-lg"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <h4 className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                  {testimonial.role}
                </h4>
                <div className="flex justify-center gap-1 mb-2 sm:mb-4 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-200 italic">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
