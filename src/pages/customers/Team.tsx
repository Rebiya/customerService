import React from "react";
import { PopupWidget } from "react-calendly";

import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";
import team5 from "../../assets/images/team/man1.jpg";
import team6 from "../../assets/images/team/man2.jpg";
import team7 from "../../assets/images/team/woman1.jpg";
import team8 from "../../assets/images/team/woman2.jpg";
import team9 from "../../assets/images/team/team-1.jpg";
import team10 from "../../assets/images/team/team-2.jpg";
import team11 from "../../assets/images/team/team-3.jpg";
import team12 from "../../assets/images/team/team-4.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Walter White",
    role: "CEO",
    description:
      "Oversees company vision and strategy, ensuring growth and innovation.",
    image: team5,
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    description:
      "Leads product development and coordinates between teams to meet goals.",
    image: team6,
  },
  {
    name: "William Anderson",
    role: "CTO",
    description:
      "Manages technological advancements and oversees IT strategies.",
    image: team7,
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    description:
      "Handles financial records, budgets, and ensures fiscal responsibility.",
    image: team8,
  },
  {
    name: "James Smith",
    role: "Business Licensing Officer",
    description:
      "Ensures businesses comply with licensing regulations and manages approvals.",
    image: team1,
  },
  {
    name: "Emily Davis",
    role: "Trade Registration Specialist",
    description:
      "Facilitates business registrations and maintains compliance records.",
    image: team2,
  },
  {
    name: "Robert Brown",
    role: "Legal Advisor",
    description:
      "Provides legal counsel on business licensing and trade regulations.",
    image: team3,
  },
  {
    name: "Jessica Wilson",
    role: "Compliance Officer",
    description:
      "Ensures business operations align with regulatory requirements.",
    image: team4,
  },
  {
    name: "David Martinez",
    role: "Finance Analyst",
    description:
      "Monitors financial performance and advises on business growth.",
    image: team9,
  },
  {
    name: "Sophia Taylor",
    role: "HR Manager",
    description:
      "Manages talent acquisition and employee relations for business growth.",
    image: team10,
  },
  {
    name: "Daniel Clark",
    role: "Operations Manager",
    description: "Optimizes daily business operations and enhances efficiency.",
    image: team11,
  },
  {
    name: "Olivia Lewis",
    role: "Marketing Director",
    description:
      "Develops branding and marketing strategies for business expansion.",
    image: team12,
  },
];

const calendlyUrl = "https://calendly.com/rebum-19/booking";

const Team: React.FC = () => {
  return (
    <section className="py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
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
                <div className="relative group cursor-pointer">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white text-center text-sm">
                      {member.description}
                    </p>
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

      {/* Calendly Popup Widget */}
      <PopupWidget
        url={calendlyUrl}
        rootElement={document.getElementById("root") as HTMLElement}
        text="Schedule an Appointment"
        textColor="#ffffff"
        color="#0073e6"
      />
    </section>
  );
};

export default Team;
