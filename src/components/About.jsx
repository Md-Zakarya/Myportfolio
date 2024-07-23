import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import myimage from '../photos/myimage.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-10 flex items-center justify-center relative overflow-hidden">
      {/* Background frames */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute -left-10 top-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-frame1"></div>
        <div className="absolute -right-10 top-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-frame2"></div>
        <div className="absolute left-1/4 bottom-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-frame3"></div>
        <div className="absolute right-1/4 bottom-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-frame4"></div>
        <div className="absolute -right-16 bottom-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-frame5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src={myimage} alt="Your Name" className="rounded-full w-32 h-32 mb-4 md:mb-0 object-cover transition-transform transform hover:scale-110" />
          <div className="ml-0 md:ml-6 mt-6 md:mt-0">
            <p className="text-lg text-center md:text-left">
              I am Mohammad Zakarya, a dedicated Software Engineer passionate about developing innovative web applications. I recently graduated with a Bachelor's degree in Technology, Computer Science from Jamia Hamdard. My journey into software engineering has been marked by a strong foundation in programming languages like JavaScript and Python, and hands-on experience with technologies such as MongoDB, Express.js, React.js, and Node.js. I am eager to leverage my skills and education to contribute effectively to projects, with a focus on learning and growth in every opportunity.
            </p>
            <div className="flex justify-center mt-4"> {/* Adjusted to justify-center */}
              <a href="https://github.com/Md-Zakarya" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaGithub className="text-3xl text-white hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/md-zakarya-98a913233/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaLinkedin className="text-3xl text-white hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="mailto:mohammadzakarya7@gmail.com" target="_blank" rel="noopener noreferrer">
  <FaEnvelope className="text-3xl text-white hover:text-gray-300 transition-colors duration-300" />
</a>

              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
