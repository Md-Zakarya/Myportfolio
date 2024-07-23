import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200; // Adjust the scroll position as needed

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement && scrollPosition >= sectionElement.offsetTop &&
            scrollPosition <= sectionElement.offsetTop + sectionElement.offsetHeight) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent text-white z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#landing" className="text-xl font-bold hover:text-gray-300 transition duration-300 ease-in-out">My Portfolio</a>
          <div className="hidden md:flex space-x-4">
            {['About', 'Skills', 'Projects', 'Contact'].map(section => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`relative text-lg ${activeSection === section.toLowerCase() ? 'text-white' : 'text-gray-300'} hover:text-white transition duration-300 ease-in-out px-2 py-1 md:px-4 md:py-2`}
                style={{
                  borderBottom: activeSection === section.toLowerCase() ? '2px solid #FFFFFF' : 'none',
                  opacity: activeSection === section.toLowerCase() ? '1' : '0.7'
                }}
              >
                {section}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {['About', 'Skills', 'Projects', 'Contact'].map(section => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`block relative text-lg ${activeSection === section.toLowerCase() ? 'text-white' : 'text-gray-300'} hover:text-white transition duration-300 ease-in-out px-2 py-1`}
                style={{
                  borderBottom: activeSection === section.toLowerCase() ? '2px solid #FFFFFF' : 'none',
                  opacity: activeSection === section.toLowerCase() ? '1' : '0.7'
                }}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
