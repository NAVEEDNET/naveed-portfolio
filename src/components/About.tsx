const About = () => {
  return (
    <section
      id="about"
       className="min-h-screen flex items-center justify-center w-full max-w-100xl bg-gray-900 text-white px-24 sm:px-24 lg:px-24"
    >
      <div className="w-full max-w-150xl text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fadeInUp">About Me</h2>
        <p className="text-gray-400 leading-relaxed mb-12 max-w-5xl mx-auto animate-fadeInUp delay-200">
          I’m a passionate software engineer with experience in React, TypeScript, QA, 
          system analysis, and accounting. I enjoy solving real-world problems, 
          creating clean UI experiences, and contributing to meaningful projects.
        </p>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch flex-wrap">
          
          {/* Education Card */}
          <div className="bg-gray-800 rounded-2xl p-6 flex-1 min-w-[250px] shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500 animate-fadeInLeft">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Academic qualifications and certifications I have completed.
            </p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>➡️ Bachelor of Information Technology (Final Year)</li>
              <li>➡️ Higher National Diploma in Information Technology</li>
              <li>➡️ Higher Diploma in Accounting and Finance</li>
              <li>➡️ Association of Accounting Technicians (Past Finalist)</li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-gray-800 rounded-2xl p-6 flex-1 min-w-[250px] shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500 animate-fadeInRight">
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <p className="text-gray-400 mb-4 text-sm">
              My professional experience in accounting and software development.
            </p>
            <ul className="text-gray-300 text-left space-y-4">
              <li>
                <strong>Account Assistant – Janet Lanka Pvt Ltd (2025 – Present)</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Managing financial records, assisting in accounting processes, 
                  and supporting day-to-day finance operations.
                </p>
              </li>
              <li>
                <strong>Trainee Software Engineer – University of Peradeniya</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Developed web and mobile applications, implemented UI/UX designs, 
                  and collaborated with teams to deliver functional software solutions.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 1s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default About;
