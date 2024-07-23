import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the submit button
import Confetti from "react-confetti"; // Importing Confetti component for success animation

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For demo purposes, simulate a success message and show confetti
    alert("Message sent successfully!");
    setIsSubmitted(true); // Set state to trigger the display of confetti animation

    // Stop the confetti after 5 seconds (adjust the duration as needed)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // 5000 milliseconds (5 seconds)
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-gray-100 to-transparent">
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br bg-opacity-75 from-purple-900 to-indigo-900 text-white py-16"
      >
        {/* Background frames */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute -left-10 top-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-frame1"></div>
          <div className="absolute -right-10 top-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-frame2"></div>
          <div className="absolute left-1/4 bottom-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-frame3"></div>
          {/* Additional animated balls */}
          <div className="absolute right-1/4 bottom-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-frame4"></div>
          <div className="absolute -right-16 bottom-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-frame5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 border-neutral-950">
          <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            Contact
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-deepBlue text-neonBlue focus:outline-none focus:ring-2 focus:ring-neonPurple hover:bg-gray-800 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-deepBlue text-neonBlue focus:outline-none focus:ring-2 focus:ring-neonPurple hover:bg-gray-800 transition"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded bg-deepBlue text-neonBlue focus:outline-none focus:ring-2 focus:ring-neonPurple hover:bg-gray-800 transition"
                rows="4"
              ></textarea>
              <div className="flex justify-center">
                {" "}
                {/* Wrapper div for centered alignment */}
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
                  style={{ minWidth: "200px" }} // Ensure button has a minimum width
                >
                  Send Message
                  <span className="ml-2 bg-gradient-to-br from-blue-500 to-purple-500 bg-opacity-50 rounded-full p-2">
                    <FaPaperPlane className="text-white text-2xl" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Confetti animation on success */}
        {isSubmitted && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false} // Prevents confetti from recycling
            run={true} // Start the confetti animation
            numberOfPieces={200} // Number of confetti pieces
            tweenDuration={1000} // Duration of the confetti animation
          />
        )}
      </section>
    </div>
  );
};

export default Contact;
