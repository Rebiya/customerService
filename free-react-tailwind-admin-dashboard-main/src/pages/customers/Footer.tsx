import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="footer-top py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="footer-about">
              <a href="index.html" className="logo flex items-center">
                <span className="sitename text-xl font-bold">GP</span>
              </a>
              <div className="footer-contact mt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
              <div className="social-links flex mt-4 space-x-3">
                <a href="#">
                  <i className="bi bi-twitter-x text-white"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-white"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-white"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-white"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    About us
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Terms of service
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="text-lg font-semibold mb-2">Our Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Web Design
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Web Development
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Product Management
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Marketing
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right text-white mr-2"></i>
                  <a href="#" className="hover:text-gray-400">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4 className="text-lg font-semibold mb-2">Our Newsletter</h4>
              <p className="mb-4">
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                action="forms/newsletter.php"
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
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 cursor-pointer"
                  />
                </div>
                <div className="loading text-gray-400">Loading</div>
                <div className="error-message text-red-500"></div>
                <div className="sent-message text-green-500">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright py-4">
        <div className="container mx-auto text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">GP</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits mt-2">
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              className="text-gray-400 hover:text-gray-500"
            >
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
