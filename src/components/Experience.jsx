import React, { useEffect } from 'react';
import { FaBriefcase, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    year: '2018',
    role: 'Secondary Education',
    company: 'Al Sabah Indian School Sharjah Al-Dhaid',
    details: 'Secured a percentage of 82%, laying the groundwork for academic excellence.',
  },
  {
    year: '2018-2020',
    role: 'Higher Secondary Education',
    company: 'Jamia Millia Islamia Sayed Abid Hussain SSS',
    details: 'Attained a percentage of 92%, focusing on foundational studies in science and mathematics.',
  },
  {
    year: '2020-2024',
    role: 'Bachelor of Technology, Computer Science',
    company: 'Jamia Hamdard',
    details: 'Achieved a CGPA of 8.89, gaining comprehensive knowledge in computer science and web development.',
  },
  {
    year: '2024',
    role: 'Software Engineer Intern',
    company: 'Elluminati Inc.',
    details: 'Currently interning as a software engineer, focusing on developing scalable web applications using the MERN stack.',
  },
].sort((a, b) => a.year.localeCompare(b.year));

const Experience = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute -left-10 top-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-frame1"></div>
        <div className="absolute -right-10 top-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-frame2"></div>
        <div className="absolute left-1/4 bottom-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-frame3"></div>
        {/* Additional animated elements */}
        <div className="absolute right-1/4 bottom-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-frame4"></div>
        <div className="absolute -right-16 bottom-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-frame5"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-10">
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Experience
        </h2>
        <div className="relative flex items-center">
          {/* Horizontal timeline */}
          <div className="absolute w-full h-4 bg-white top-1/2 transform -translate-y-1/2 z-10" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}></div>
          <div className="space-x-12 ml-6 flex justify-center">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className={`relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-500 overflow-hidden ${index % 2 === 0 ? 'mb-12' : 'mt-12'}`}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 6px 12px rgba(0,0,0,0.2)' }}
                initial={{ opacity: 0, x: -50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ x: `${index * 200}px` }}
              >
                {index % 2 === 0 ? (
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration:0.5, delay: index * 0.1 }}
                  >
                    <FaArrowUp className="text-white text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FaArrowDown className="text-white text-2xl" />
                  </motion.div>
                )}
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaBriefcase className="text-white text-2xl" />
                </motion.div>
                <div className="flex-1 ml-4">
                  <p className="text-2xl font-bold text-white">{exp.year}</p>
                  <p className="text-lg text-gray-300 mt-2">
                    {exp.role} at <span className="font-medium text-white">{exp.company}</span>
                  </p>
                  <p className="text-gray-400 mt-4">{exp.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
