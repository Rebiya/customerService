import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const serviceID = "service_q0jj7re"; // Replace with your EmailJS Service ID
    const templateID = "template_ajvccmo"; // Replace with your EmailJS Template ID
    const userID = "pkHhiz1mxXW2QzvU9"; // Replace with your EmailJS Public Key

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setStatus("success");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact</h2>
        <p className="text-gray-600">Contact Us</p>
      </div>

      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Google Maps */}
        <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            className="w-full h-[270px] border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Bole, Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+251 993 044 432</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600">rebum.19@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Message"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
