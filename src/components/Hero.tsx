
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import heroImg from "../assets/images/naveed1.png";


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24"
    >
      {/* Background gradient + animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-indigo-900 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-violet-500 rounded-full opacity-30 animate-pulseSlow"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-indigo-500 rounded-full opacity-30 animate-pulseSlow delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-30 items-center relative z-20">

        {/* Text with fade-in animation */}
        <div className="animate-fadeInLeft">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Hi, I’m <span className="text-violet-400">Mohammed Naveed</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-md">
            Associate Software Engineer focused on building modern,
            user-friendly web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 border border-white/20 bg-violet-400 rounded-lg hover:bg-violet-200 transition">
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-white transition"
            >
              Contact Me
            </a>
             
          </div>
           <div className="flex justify-center md:justify-start gap-6 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/NAVEEDNET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-naveed-0137811a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:brightness-125 transform hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
             <a
    href="/NaveedResume.pdf"
    download
    aria-label="Download Resume"
    className="flex items-center gap-2 px-5 py-2
               border border-violet-300 text-violet-100
               rounded-lg hover:bg-violet-200 hover:text-white
               hover:scale-105 transition-all duration-300"
  >
    <FaDownload size={16} />
    <span className="text-sm font-medium">Resume</span>
  </a>
          </div>
        </div>
        

        {/* Image with zoom-in animation */}
        <div className="flex justify-center animate-zoomIn">
          <img
            src={heroImg}
            alt="Naveed"
            className="w-138 h-138 object-cover"
          />
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1s ease-out forwards;
        }

        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
