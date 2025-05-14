import React from "react";
const images = [
  "https://i.ibb.co/tTD2txWs/Rectangle-14.png",
  "https://i.ibb.co/SDTdyfKx/Rectangle-15.png",
  "https://i.ibb.co/NhRR0Cb/Rectangle-16.png",
  "https://i.ibb.co/prBp8BTL/Rectangle-9.png",
  "https://i.ibb.co/nNjZZ6j9/Rectangle-10.png",
  "https://i.ibb.co/Y4Crffn8/Rectangle-11.png",
  "https://i.ibb.co/ycnV7Rrc/Rectangle-12.png",
  "https://i.ibb.co/wNBcQnTL/Rectangle-13.png",
];
const Instagram = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-3">
        <small className="text-sm">Follow us Now</small>
        <h3 className="text-3xl font-bold">Follow on Instagram</h3>
      </div>
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-4 md:w-11/12 mx-auto justify-items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-[312px] h-[312px] object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
