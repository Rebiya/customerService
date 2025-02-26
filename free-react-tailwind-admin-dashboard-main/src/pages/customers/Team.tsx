import React from "react";
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";

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
    role: "Chief Executive Officer",
    image: team1, // ✅ Correct usage
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    image: team2, // ✅ Using imported image
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "William Anderson",
    role: "CTO",
    image: team3,
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    image: team4,
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16">
      <div
        className="container mx-auto px-4 mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Team</h2>
        <p className="text-gray-600">Our Team</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Social Links */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {member.socialLinks && (
                      <>
                        <a
                          href={member.socialLinks.twitter || "#"}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          Twitter
                        </a>
                        <a
                          href={member.socialLinks.facebook || "#"}
                          className="text-white hover:text-blue-600 transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href={member.socialLinks.instagram || "#"}
                          className="text-white hover:text-pink-500 transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href={member.socialLinks.linkedin || "#"}
                          className="text-white hover:text-blue-700 transition-colors"
                        >
                          LinkedIn
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
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
