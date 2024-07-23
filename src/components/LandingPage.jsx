import React from 'react';

const LandingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16" id="landing">
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
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse">
          Mohammad Zakaryaa
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 animate-fade-in-up">
          Software Engineer | Web Developer
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out shadow-md"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
