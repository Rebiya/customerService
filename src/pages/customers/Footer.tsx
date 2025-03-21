import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="footer-top py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="footer-about">
              <a href="/" className="logo flex items-center">
                <span className="sitename text-xl font-bold">GP</span>
              </a>
              <div className="footer-contact mt-3 cursor-pointer">
                <p>Bole Denbel </p>
                <p>Addis Ababa ,Ethiopia</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+251 993 044 432</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>rebum.19@gmail.com</span>
                </p>
              </div>
              <div className="social-links flex mt-4 space-x-3">
                <Link to="https://perfonet-technology.com/">
                  <i className="bi bi-twitter-x text-white"></i>
                </Link>
                <Link to="https://perfonet-technology.com/">
                  <i className="bi bi-facebook text-white"></i>
                </Link>
                <Link to="https://perfonet-technology.com/">
                  <i className="bi bi-instagram text-white"></i>
                </Link>
                <Link to="https://perfonet-technology.com/">
                  <i className="bi bi-linkedin text-white"></i>
                </Link>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
              <ul className="space-y-2 cursor-pointer">
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-blue-500"
                  >
                    Services
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-blue-500"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="text-lg font-semibold mb-2">Our Services</h4>
              <ul className="space-y-2" onClick={() => navigate("/services")}>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-blue-500">
                    Business Registration
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-blue-500">
                    license Renewal
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-blue-500">
                    VAT and TAX registration
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-blue-500">
                    Investment Approval
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter cursor-pointer">
              <h4 className="text-lg font-semibold mb-2">Our Newsletter</h4>
              <p className="mb-4">
                Subscribe to our newsletter and receive the latest news about
                our services!
              </p>
              <form
                // action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form flex">
                  <input
                    type="email"
                    name="email"
                    className="flex-grow px-4 py-2 rounded-l-md"
                    placeholder="Enter your email"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 cursor-pointer"
                  />
                </div>
                <div className="loading text-blue-500">Loading</div>
                <div className="error-message text-red-500"></div>
                <div className="sent-message text-green-500 ">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright py-4">
        <div className="container mx-auto text-center cursor-pointer">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">GP</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits mt-2">
            Designed by{" "}
            <a
              href="https://rebiyamusema.com/"
              className="text-gray-400 hover:text-blue-500"
            >
              MissFix
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
