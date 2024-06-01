import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { FaHeart, FaStar } from "react-icons/fa"; // Replace with appropriate icons
import { IoDiamond } from "react-icons/io5";

const plansData = [
  {
    icon: <FaHeart />,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of exercises",
      "Free consultation to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <FaStar />,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hours of exercises",
      "Free consultation of Coaches",
      "Access to minibar",
    ],
  },
  {
    icon: <IoDiamond />,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of exercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}

      <div className="plans" id="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits</span>
            </div>

            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
