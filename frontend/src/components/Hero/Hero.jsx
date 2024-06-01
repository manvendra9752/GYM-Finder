import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

// To create animation
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero flex relative" id="home">
      {/* <div className="blur hero-blur"></div> */}

      <div className="left-h">
        {/* the best ad */}

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "115px" : "150px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best GYM's are here to find</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>expert coachs</span>
          </div>

          <div>
            <span>
              <NumberCounter
                end={978}
                start={800}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <NumberCounter
                end={50}
                start={0}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
          <motion.div
            className=" flex items-center justify-end text-white"
            transition={transition}
          >
            <img src={Heart} alt="" className="w-10 mr-0" />
            <div className="text-white p-1">
              <div>Heart Rate</div>
              <div>116 bpm</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="right-h">
        <button className="btn  bg-slate-200 hover:text-white">Join Now</button>

        {/* hero images */}

        <img src={hero_image} alt="" className="" />
        <motion.img
          src={hero_image_back}
          className="hero-image-back w-24"
          initial={{ right: "18rem" }}
          whileInView={{ right: "23rem" }}
          transition={transition}
        />

        {/* calories */}

        {/* <motion.div
          className="flex left-20 bottom-10 absolute items-center justify-around w-60 h-20 bg-slate-600"
          transition={transition}
        >
          <img src={Calories} alt="" className="h-[80%] " />

          <div className="flex flex-col">
            <span>Calories Burned </span>
            <span>220 kcal</span>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
