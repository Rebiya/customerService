// Stats.tsx
import React, { useEffect, useRef } from "react";
import statimg from "../../assets/images/stats-img.jpg";
const Stats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            const end = parseInt(counter.dataset.end || "0");
            let start = 0;
            const duration = 1000; // 1 second
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              counter.textContent = start.toString();
              if (start === end) {
                clearInterval(timer);
              }
            }, stepTime);

            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-5/12">
            <img
              src={statimg}
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Stats Content */}
          <div className="w-full lg:w-6/12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Voluptatem dignissimos provident quasi
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              ref={statsRef}
            >
              {/* Stats Item 1 */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-yellow-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span
                    className="counter block text-3xl font-bold text-yellow-600 mb-1"
                    data-end="232"
                  >
                    0
                  </span>
                  <p className="text-gray-800">
                    <strong>Happy Clients</strong>{" "}
                    <span className="block text-sm text-gray-600">
                      consequuntur quae
                    </span>
                  </p>
                </div>
              </div>

              {/* Stats Item 2 */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-yellow-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <span
                    className="counter block text-3xl font-bold text-yellow-600 mb-1"
                    data-end="521"
                  >
                    0
                  </span>
                  <p className="text-gray-800">
                    <strong>Projects</strong>{" "}
                    <span className="block text-sm text-gray-600">
                      adipisci atque cum quia aut
                    </span>
                  </p>
                </div>
              </div>

              {/* Stats Item 3 */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-yellow-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span
                    className="counter block text-3xl font-bold text-yellow-600 mb-1"
                    data-end="1453"
                  >
                    0
                  </span>
                  <p className="text-gray-800">
                    <strong>Hours Of Support</strong>{" "}
                    <span className="block text-sm text-gray-600">
                      aut commodi quaerat
                    </span>
                  </p>
                </div>
              </div>

              {/* Stats Item 4 */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-yellow-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div>
                  <span
                    className="counter block text-3xl font-bold text-yellow-600 mb-1"
                    data-end="32"
                  >
                    0
                  </span>
                  <p className="text-gray-800">
                    <strong>Hard Workers</strong>{" "}
                    <span className="block text-sm text-gray-600">
                      rerum asperiores dolor
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
