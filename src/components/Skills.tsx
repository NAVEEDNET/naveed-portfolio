import React, { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiDart,
  SiLaravel,
  SiSalesforce,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiSap,
  SiJavascript,
  SiPhp,
  SiExpress,
  
} from "react-icons/si";

type Category = "Frontend" | "Backend" | "Tools"|"UI UX Design"|"ERP"|"CRM"| "Other";

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: Category;
  link?: string;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact size={42} className="text-[#61DAFB]" />,
    category: "Frontend",
    link: "https://react.dev/learn",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={42} className="text-[#3178C6]" />,
    category: "Frontend",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={42} className="text-[#38B2AC]" />,
    category: "Frontend",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={42} className="text-[#02569B]" />,
    category: "Frontend",
    link: "https://docs.flutter.dev/",
  },
  {
    name: "Dart",
    icon: <SiDart size={42} className="text-[#0175C2]" />,
    category: "Frontend",
    link: "https://dart.dev/guides",
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs size={42} className="text-[#339933]" />,
    category: "Backend",
    link: "https://nodejs.org/en/learn",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={42} className="text-[#47A248]" />,
    category: "Backend",
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "Laravel",
    icon: <SiLaravel size={42} className="text-[#FF2D20]" />,
    category: "Backend",
    link: "https://laravel.com/docs",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={42} className="text-[#FFCA28]" />,
    category: "Backend",
    link: "https://firebase.google.com/docs",
  },

  {
    name: "Figma",
    icon: <SiFigma size={42} className="text-[#F24E1E]" />,
    category: "UI UX Design",
    link: "https://help.figma.com/",
  },
  {
    name: "Canva",
    icon: <SiCanva size={42} className="text-[#00C4CC]" />,
    category: "UI UX Design",
    link: "https://www.canva.com/designschool/",
  },
  {
    name: "Salesforce",
    icon: <SiSalesforce size={42} className="text-[#1798C1]" />,
    category: "CRM",
    link: "https://trailhead.salesforce.com/",
  },
   {
    name: "SAP Business One",
    icon: <SiSap size={42} className="text-[#1798C1]" />,
    category: "ERP",
    link: "https://www.sap.com/products/erp/business-one.html",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={42} className="text-[#F7DF1E]" />,
    category: "Frontend",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "PHP",
    icon: <SiPhp size={42} className="text-[#8892BE]" />,
    category: "Backend",
    link: "https://www.php.net/manual/en/",
  },
  {
    name: "Express.Js",
    icon: <SiExpress size={42} className="text-[#F89820]" />,
    category: "Backend",
    link: "https://expressjs.com/",
  },

  { name: "QA Testing", icon: null, category: "Other" },
  { name: "Business Analysis", icon: null, category: "Other" },
];

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");

  const filteredSkills =
    filter === "All" ? skills : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-32 bg-gray-900 text-white">
      <div className=" max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">Skills</h2>
        <p className="text-center text-gray-400 mb-12">
          Learning is not a phase; it’s a lifelong skill.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {["All", "Frontend", "Backend", "UI UX Design","ERP","CRM","Other"].map(btn => (
            <button
              key={btn}
              onClick={() => setFilter(btn as "All" | Category)}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  filter === btn
                    ? "bg-violet-500 text-white"
                    : "border border-white/20 text-gray-300 hover:border-violet-400 hover:text-white"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map(skill => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noreferrer"
              className="group border border-white/10 rounded-xl p-6
                         bg-black/60 backdrop-blur
                         flex flex-col items-center justify-center gap-3
                         hover:border-violet-500 hover:bg-black/80
                         transition-all duration-300"
            >
              {skill.icon && (
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              )}

              <span className="text-sm text-center group-hover:text-white transition">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
