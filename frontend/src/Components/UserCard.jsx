import React from "react";

const UserCard = ({ dev, imageUrl, text, name }) => {
  return (
    //UserCard
    <div className="max-w-sm mx-auto sm:max-w-auto md:max-w-auto md:h-auto">
      <div className="flex h-[50%] w-[25em]">
        <div className="grid grid-cols-2 md:shrink bg-[#EEEEEE] rounded-3xl">
          <img
            className="my-6 mx-8 h-32 w-40 object-cover md:h-auto  md:w-40 lg:w-40 xl:w-40 rounded-[2rem]"
            src={imageUrl}
            alt="CEO"
          />
          <div className="p-6 pb-0 my-4 mr-2 sm:text-center md:text-center lg:text-center xl:text-center">
            <h1 className="text-base font-['Inder', sans-serif] text-center text-[#1A69B4] font-semibold hover:underline decoration-blue-600">
              <q>{text}</q>
            </h1>
          </div>
          <div className="text-center pt-0 pb-8 pl-8 items-center uppercase tracking-wider text-2xl text-[#1A69B4] font-semibold">
            {dev}
          </div>
          <div className="text-center pt-4 items-center uppercase tracking-wider text-lg text-[#1A69B4] font-semibold">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
