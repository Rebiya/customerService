import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/masonry-portfolio/masonry-portfolio-1.jpg";
import img2 from "../../assets/images/masonry-portfolio/masonry-portfolio-2.jpg";
import img3 from "../../assets/images/masonry-portfolio/masonry-portfolio-3.jpg";
import img4 from "../../assets/images/masonry-portfolio/masonry-portfolio-4.jpg";
import img5 from "../../assets/images/masonry-portfolio/masonry-portfolio-5.jpg";
import img6 from "../../assets/images/masonry-portfolio/masonry-portfolio-6.jpg";
import img7 from "../../assets/images/masonry-portfolio/masonry-portfolio-7.jpg";
import img8 from "../../assets/images/masonry-portfolio/masonry-portfolio-8.jpg";
import img9 from "../../assets/images/masonry-portfolio/masonry-portfolio-9.jpg";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    image: img1,
  },
  {
    id: 2,
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    image: img2,
  },
  {
    id: 3,
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit",
    image: img3,
  },
  {
    id: 4,
    category: "app",
    title: "App 2",
    description: "Lorem ipsum, dolor sit",
    image: img4,
  },
  {
    id: 5,
    category: "product",
    title: "Product 2",
    description: "Lorem ipsum, dolor sit",
    image: img5,
  },
  {
    id: 6,
    category: "branding",
    title: "Branding 2",
    description: "Lorem ipsum, dolor sit",
    image: img6,
  },
  {
    id: 7,
    category: "app",
    title: "App 3",
    description: "Lorem ipsum, dolor sit",
    image: img7,
  },
  {
    id: 8,
    category: "product",
    title: "Product 3",
    description: "Lorem ipsum, dolor sit",
    image: img8,
  },
  {
    id: 9,
    category: "branding",
    title: "Branding 3",
    description: "Lorem ipsum, dolor sit",
    image: img9,
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("*");
  const [filteredItems, setFilteredItems] =
    useState<PortfolioItem[]>(portfolioItems);

  useEffect(() => {
    if (filter === "*") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === filter)
      );
    }
  }, [filter]);

  return (
    <section id="portfolio" className="py-16">
      <div
        className="container mx-auto px-4 mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfolio</h2>
        <p className="text-gray-600">Check our Portfolio</p>
      </div>

      <div className="container mx-auto px-4">
        <ul
          className="flex flex-wrap justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              filter === "*"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              filter === "app"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("app")}
          >
            App
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              filter === "product"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("product")}
          >
            Product
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-md ${
              filter === "branding"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("branding")}
          >
            Branding
          </li>
        </ul>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-4">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
