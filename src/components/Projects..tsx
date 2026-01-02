import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Staff Management Web Application",
      description:
        "Web-based system to manage staff records, attendance, and role-based access for the University of Peradeniya.",
      tech: "React, Node.js, Express, MySQL, Tailwind CSS",
      
      Github:<a
              href="https://github.com/NAVEEDNET/Staff-Managment/tree/main/update%202023-11-26/uop-sms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>,
      category: "Web",
    },
    {
      title: "Employ Service Mobile Application",
      description:
        "Cross-platform mobile app connecting employers and job seekers with real-time updates and authentication.",
      tech: "Flutter, Firebase, Firestore",
       Github:<a
              href="https://github.com/NAVEEDNET/Employ_service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>,
      category: "Mobile",
    },
    {
      title: "Fixed Deposit Management System",
      description:
        "System for managing fixed deposits, generating PDFs, and sending real-time email notifications.",
      tech: "Laravel, Blade, MVC Architecture, MySQL",
       Github:<a
              href="https://github.com/NAVEEDNET/FixDeposit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>,
      category: "System",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Projects
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Web", "Mobile", "System"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  filter === item
                    ? "bg-violet-600 text-white"
                    : "border border-white/20 text-gray-300 hover:border-violet-500"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/60 border border-white/10 rounded-xl p-6
                         transition-all duration-300
                         hover:-translate-y-2 hover:border-violet-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm mb-4 text-violet-400 font-medium">
                {project.tech}
              </p>

              <p className="text-sm text-violet-400 font-medium">
                {project.Github}
              </p>

              {/* Category badge */}
              <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full
                               bg-white/10 text-gray-300">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
