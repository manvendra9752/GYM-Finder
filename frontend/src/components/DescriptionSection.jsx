import React from "react";
import { GrResources } from "react-icons/gr";
import { FcIdea } from "react-icons/fc";
import { FaOpencart } from "react-icons/fa6";
import { motion } from "framer-motion"; // Importing framer-motion

const DescriptionSection = () => {
  return (
    <section
      id="description-section"
      className="py-12"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1200x600.png?text=Gym+Background')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <div id="go-here" className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          One Platform for All Your Fitness Goals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg mb-8 text-gray-100 font-normal text-center"
        >
          Connect with trainers, get resources, share ideas, and track your
          fitness progress all in one place.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-14 gap-10 max-w-screen-xl container mx-auto h-1/2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-calendar-check fa-2x"></i>
              </p>
              <GrResources className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                Resources
              </h5>
              <p className="card-text mb-4 text-gray-600">
                Access a variety of fitness resources including workout plans,
                nutritional guides, and tutorials.
              </p>
              <a href="resources.html">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-shopping-cart fa-2x"></i>
              </p>
              <FaOpencart className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Products</h5>
              <p className="card-text mb-4 text-gray-600">
                Discover and purchase fitness products like equipment, apparel,
                and supplements to enhance your workouts.
              </p>
              <a href="#">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-search fa-2x"></i>
              </p>
              <FcIdea className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Ideas</h5>
              <p className="card-text mb-4 text-gray-600">
                Share your fitness ideas and innovations with a community of
                like-minded individuals.
              </p>
              <a href="#">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
