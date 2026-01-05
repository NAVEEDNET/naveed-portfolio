import logoImg from "../assets/images/n1.png";

const Navbar = () => {
  const menu = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      
      <div className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
  src={logoImg}
  alt="Naveed Logo"
  className="w-16 h-12 object-contain"
/>

        <ul className="flex gap-8 text-sm">
          {menu.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
