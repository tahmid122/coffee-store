import React from "react";
import aroma from "../assets/images/icons/1.png";
import high from "../assets/images/icons/2.png";
import pure from "../assets/images/icons/3.png";
import proper from "../assets/images/icons/4.png";
const cards = [
  {
    img: aroma,
    name: "Awesome Aroma",
    desc: "You will definitely be a fan of the design & aroma of your coffee",
  },
  {
    img: high,
    name: "High Quality",
    desc: "We served the coffee to you maintaining the best quality",
  },
  {
    img: pure,
    name: "Pure Grades",
    desc: "The coffee is made of the green coffee beans which you will love",
  },
  {
    img: proper,
    name: "Proper Roasting",
    desc: "Your coffee is brewed by first roasting the green coffee beans",
  },
];
const Quality = () => {
  return (
    <div className="bg-[#ECEAE3] ">
      <div className="w-11/12 mx-auto grid grid-cols-1 p-5 md:p-0 md:py-14 md:grid-cols-4 gap-10">
        {cards.map((card, index) => {
          return (
            <div key={index} className="space-y-2">
              <img className="h-16 w-16 object-cover " src={card.img} alt="" />
              <h4 className="text-3xl">{card.name}</h4>
              <p className="text-base">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quality;
