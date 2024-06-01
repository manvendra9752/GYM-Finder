import React from "react";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";

import { FaDumbbell, FaRunning, FaFire, FaHeartbeat } from "react-icons/fa";

const programsData = [
  {
    image: <FaDumbbell size={24} />,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: <FaRunning size={24} />,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: <FaFire size={24} />,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: <FaHeartbeat size={24} />,
    heading: "Health and Wellness",
    details:
      "In this program, you are trained to improve your overall health and wellness through various exercises and mindfulness techniques.",
  },
];

const Programs = () => {
  return (
    <div className="Programs mt-20" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore out</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <span>Join Now</span>

              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
