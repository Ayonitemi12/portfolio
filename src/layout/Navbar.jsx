import Button from "../components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';




const navLinks =  [
    { id: "about", label: "About", path:'/'},
    { id: "projects", label: "Projects", path:'/'},
    { id: "experience", label: "Experience", path:'/'},
    { id: "certificates", label: "Certificates", path:'/'},
    { id: "testimonials", label: "Testimonial", path:'/'},

] 

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isBlogPage = location.pathname.includes('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
       <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="text-4xl font-bold text-gray-900 dark:text-white hover:text-primary">
          Ayodeji Ogunleye<span className="text-purple-500"></span>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {/* Section Links - only show on home page */}
          {!isBlogPage && navLinks.map((link)=> (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors"
                activeClass="text-purple-600 dark:text-purple-400 font-semibold"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
          
          {/* Blog Link - always visible */}
          <li>
            <RouterLink
              to="/blog"
              className={`transition-colors ${
                location.pathname === '/blog' 
                  ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              Blog
            </RouterLink>
          </li>
        </ul>
             {/* CTA Button */}
             <div className="hidden md:block ">
                   <a href="#contact"> <Button size="sm">Contact Me</Button></a>
             </div>
              {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900 dark:text-gray-100 cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
           </div>
           {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {!isBlogPage && navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer block"
                  activeClass="text-purple-600 dark:text-purple-400 font-semibold"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <RouterLink
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block transition-colors ${
                  location.pathname === '/blog' 
                    ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                Blog
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
    );
}

export default Navbar
