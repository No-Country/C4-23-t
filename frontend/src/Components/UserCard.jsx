import React from "react";

const UserCard = ({ dev, imageUrl, text, name }) => {
  return (
    //UserCard
    <div className="shadow-2xl rounded-3xl h-[50%] w-[22em] sm:w-[25em] m-0">
        <div className="grid grid-cols-2 md:shrink bg-[#EEEEEE] rounded-3xl ">
          <img
            className="my-6 mx-8 max-h-40 w-40 object-cover md:w-40 rounded-[2rem]"
            src={imageUrl}
            alt="CEO"
          />
          <div className="p-4 pb-0 my-4 mr-2 sm:text-center md:text-center lg:text-center xl:text-center">
            <h1 className="text-base font-['Inder', sans-serif] text-center text-[#1A69B4] font-semibold hover:underline decoration-blue-600">
              <q>{text}</q>
            </h1>
          </div>
          <div className="text-center pt-0 pb-8 pl-8 items-center uppercase tracking-wider text-2xl text-[#1A69B4] font-semibold">
            {dev}
          </div>
          <div className="text-center  uppercase tracking-wider text-lg text-[#1A69B4] font-semibold">
            <p>sarasa</p>
            {name}
          </div>
        </div>
    </div>
  );
};

export default UserCard;
