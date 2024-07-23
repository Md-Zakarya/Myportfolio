import { FaCss3Alt, FaHtml5, FaJs, FaPython, FaReact, FaNodeJs, FaDatabase, FaPhp, FaBootstrap, FaFlask, FaCog, FaTools } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90 },
  { name: 'CSS', icon: FaCss3Alt, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 80 },
  { name: 'Python', icon: FaPython, level: 75 },
  { name: 'ReactJs', icon: FaReact, level: 70 },
  { name: 'NodeJS', icon: FaNodeJs, level: 65 },
  { name: 'MongoDB', icon: SiMongodb, level: 60 },
  { name: 'ExpressJs', icon: SiExpress, level: 55 },
  { name: 'PHP', icon: FaPhp, level: 50 },
  { name: 'Bootstrap CSS', icon: FaBootstrap, level: 45 },
  { name: 'MYSQL', icon: FaDatabase, level: 40 },
  { name: 'Flask', icon: FaFlask, level: 35 },
  { name: 'Next.js', icon: FaTools, level: 75 },  // Added Next.js
  { name: 'Tailwind CSS', icon: FaCog, level: 70 }, // Added Tailwind CSS
];
const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
      {/* Background frames */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute -left-10 top-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-frame1"></div>
        <div className="absolute -right-10 top-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-frame2"></div>
        <div className="absolute left-1/4 bottom-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-frame3"></div>
        {/* Additional animated balls */}
        <div className="absolute right-1/4 bottom-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-frame4"></div>
        <div className="absolute -right-16 bottom-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-frame5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {skills.map(skill => (
            <div key={skill.name} className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="text-center px-4 py-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{skill.name}</h3>
                <div className="bg-gray-300 rounded-full">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                    style={{ width: `${skill.level}%` }}
                  >
                    {skill.level}%
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <skill.icon size="2em" className="mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
