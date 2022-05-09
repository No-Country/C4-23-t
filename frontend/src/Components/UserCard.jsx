import React from "react";

const UserCard = ({ dev, imageUrl, text, name }) => {
  return (
    //UserCard
    <div className="shadow-2xl rounded-3xl w-[60vw] sm:w-[25em] m-0">
      <div className="flex flex-col items-center sm:grid xs:grid-cols-2 pb-4 bg-[#EEEEEE] rounded-3xl">
          <img
            className="my-6 mx-6 w-3/4 sm:w-[25vw] object-cover rounded-[2rem]"
            src={imageUrl}
            alt="CEO"
          />
          <div className="hidden sm:block pb-0 my-4 sm:mx-12 text-center">
            <h1 className="font-['Inder', sans-serif] text-[#1A69B4] font-semibold text-[1em] hover:underline decoration-blue-600">
              <q>{text}</q>
            </h1>
          </div>
          <div className="hidden xs:block text-center pt-0 pb-8 mx-12 uppercase tracking-wider text-2xl text-[#1A69B4] font-semibold">
            {dev}
          </div>
          <div className="pb-8 text-center uppercase tracking-wider text-lg text-[#1A69B4] font-semibold">
            <p>sarasa</p>
            {name}
          </div>
        </div>
    </div>
  );
};

export default UserCard;
