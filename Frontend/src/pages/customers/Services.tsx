import { Link } from "react-router-dom"; // Fix import
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    event.preventDefault(); // Prevent default link behavior
    navigate(isLoggedIn ? path : "/signin");
  };

  return (
    <section id="services" className="services section py-16 bg-gray-100">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="text-lg text-gray-600">Check our Services</p>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap -mx-4">
          {[
            {
              title: "Business Registration",
              description: "Citizens can register new businesses online...",
              icon: "bi-activity",
            },
            {
              title: "License Issuance & Renewal",
              description: "Renew existing business licenses and permits...",
              icon: "bi-broadcast",
            },
            {
              title: "VAT & Tax Registration",
              description:
                "Pay registration fees, license fees, and taxes online...",
              icon: "bi-easel",
            },
            {
              title: "Investment Permit Approval",
              description: "Apply for necessary licenses and permits...",
              icon: "bi-bounding-box-circles",
            },
            {
              title: "Inspection & Compliance",
              description: "Access resources and guidelines on compliance...",
              icon: "bi-calendar4-week",
            },
            {
              title: "Trade Name Reservation",
              description: "Reserve a unique trade name before registration...",
              icon: "bi-chat-square-text",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="service-item relative p-6 bg-white shadow-lg rounded-lg text-center">
                <div className="icon text-4xl mb-4 text-purple-500">
                  <i className={`bi ${service.icon} text-white`}></i>
                </div>
                <Link
                  to="/team"
                  className="stretched-link"
                  onClick={(e) => handleNavigation(e, "/team")}
                >
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </Link>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
