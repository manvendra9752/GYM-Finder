import React from "react";

import { useAuth } from "../context/AuthProvider";
import { motion } from "framer-motion"; // Importing framer-motion

const HeroSection = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <section id="hero" className="max-w-screen h-full bg-gray-50">
        {/* Hero Section */}
        <div className="mx-auto">
          <div className="flex sm:flex-row flex-col items-center justify-center py-12 p-2 w-full max-h-fit bg-gray-50">
            <div className="hero-intro sm:w-1/2 w-full sm:h-full sm:p-6 h-1/2">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4"
              >
                Transform Your Body, Transform Your Life
                <span className="text-pink-600">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg text-slate-800 mb-6"
              >
                Join our gym and achieve your fitness goals with us!
              </motion.p>
              <a href="/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="sm:h-14 h-12 min-h-8 btn-lg bg-pink-600 text-white px-6 sm:text-base text-sm rounded-lg hover:bg-pink-700 transition duration-200"
                >
                  Learn More
                </motion.button>
              </a>
            </div>
            <div className="sm:w-1/2 sm:h-[300px] h-0 w-0 z-10 flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-[100%] max-w-fit h-[400px] my-auto shadow-xl transition-shadow shadow-pink-300 rounded-3xl"
                src="https://imgs.search.brave.com/Kcm8tJ1RlT9p7gPj3E4gKFyUxgihnAnHdFsxmcQV9iM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAz/NDE2ODYyL3Bob3Rv/L21hbi1yZWFkeS10/by1leGVyY2lzZS13/aXRoLWtldHRsZS1i/ZWxsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1MT1A3VlpV/cTEtQTdDdDRrTWt4/WHA4VVY1aFVhaGV0/Q2xpd2VmOXRpUW9J/PQ"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        <img
          className="w-full"
          src="https://imgs.search.brave.com/Kcm8tJ1RlT9p7gPj3E4gKFyUxgihnAnHdFsxmcQV9iM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAz/NDE2ODYyL3Bob3Rv/L21hbi1yZWFkeS10/by1leGVyY2lzZS13/aXRoLWtldHRsZS1i/ZWxsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1MT1A3VlpV/cTEtQTdDdDRrTWt4/WHA4VVY1aFVhaGV0/Q2xpd2VmOXRpUW9J/PQ"
          alt="gym-hero-wave"
        />
      </section>

      {/* Additional Sections */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
          <div className="image-section">
            <img
              className="max-w-full rounded-lg shadow-xl shadow-slate-400"
              src="https://via.placeholder.com/600x400.png?text=Gym+Image+1"
              alt="Gym"
            />
          </div>
          <div className="text-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              State-of-the-Art Equipment
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our gym is equipped with the latest technology and machinery to
              ensure you have the best workout experience.
            </p>
            <a href="#learn-more-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </motion.button>
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
          <div className="image-section order-first md:order-last w-full">
            <img
              className="max-w-full w-full rounded-lg shadow-xl shadow-slate-500"
              src="https://via.placeholder.com/600x400.png?text=Gym+Image+2"
              alt="Workout"
            />
          </div>
          <div className="text-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Personalized Training Programs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get customized training programs tailored to your fitness goals by
              our professional trainers.
            </p>
            <a href="#learn-more-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Learn More
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {authUser ? (
        ""
      ) : (
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Join Our Gym Today
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sign up now and start your fitness journey with us. Become part of
              a supportive community.
            </p>
            <a href="/signup">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Sign Up
              </motion.button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
