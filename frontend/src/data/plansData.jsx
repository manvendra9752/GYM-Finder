import React from "react";
import { FaHeart, FaStar, FaDiamond } from "react-icons/fa"; // Replace with appropriate icons

export const plansData = [
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
    icon: <FaDiamond />,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of exercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
