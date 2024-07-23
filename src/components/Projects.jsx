import React from 'react';

import cario from '../photos/Car-IO.png';
import bookio from '../photos/Book-IO.png';
import paintio from '../photos/Paint-IO.png';
import vidio from '../photos/Vid-IO.png';
import pocketfull from '../photos/pocketfulldashboard.png';
import tempmail from '../photos/Tempem.png';


const projects = [
  {
    title: 'CAR-IO',
    description: 'Developed an innovative car rental platform using MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap', 'WebSocket'],
    image: cario,  // Example path to your project image
    link: '#',  // Example path to the project page
  },
  {
    title: 'PAINT-IO',
    description: 'Created a collaborative online painting application.',
    tags: ['HTML', 'CSS' , 'JavaScript' , 'PHP' , 'MySql'],
    image: paintio,  // Example path to your project image
    link: 'https://paintio.netlify.app/',  // Example path to the project page
  },
  {
    title: 'BOOK-IO',
    description: 'Built a book management system with CRUD operations.',
    tags: ['HTML', 'CSS' , 'JavaScript' , 'PHP' , 'MySql'],
    image: bookio,  // Example path to your project image
    link: 'https://booksioo.netlify.app/',  // Example path to the project page
  },
  {
    title: 'VID-IO',
    description: 'Designed a video streaming application for educational purposes.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: vidio,  // Example path to your project image
    link: '/vid-io',  // Example path to the project page
  },
  {
    title: 'DashBoard',
    description: 'A small Dashboard made from Figma',
    tags: ['React', 'NextJs', 'Tailwind'],
    image: pocketfull,  // Example path to your project image
    link: 'https://pocketfull-dashboard.vercel.app/customers',  // Example path to the project page
  },
  {
    title: 'TempEmail.io',
    description: 'Generate and manage your temporary disposable emails effortlessly.',
    tags: ['React', 'API', 'Tailwind'],
    image: tempmail,  // Example path to your project image
    link: 'https://tempemailio-md-zakaryas-projects.vercel.app/',  // Example path to the project page
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-500 block"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md shadow-md"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Text Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '1rem',
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-medium text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;