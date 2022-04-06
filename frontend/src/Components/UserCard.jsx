import React from 'react'

const UserCard = () => {
  return (
    //UserCard
    <div className="max-w-sm mx-auto sm:max-w-auto md:max-w-auto lg:max-w-auto xl:max-w-auto sm:h-auto md:h-auto">
      <div className="md:flex lg:flex xl:flex">
        <div className="grid grid-cols-2 md:shrink bg-[#EEEEEE] rounded-3xl">
          <img
            className="my-6 mx-8 h-32 w-40 object-cover md:h-auto lg:h-auto xl:h-auto md:w-40 lg:w-40 xl:w-40 rounded-[2rem]"
            src="https://cdn.create.vista.com/api/media/small/204680084/stock-photo-handsome-focused-businessman-sitting-armchair"
            alt="CEO"
          />
          <div className="p-6 pb-0 my-4 mr-2 sm:text-center md:text-center lg:text-center xl:text-center">
            <h1 className="text-base font-['Inder', sans-serif] text-center text-[#1A69B4] font-semibold hover:underline decoration-blue-600">
              <q>La seguridad y la estabilidad es lo mejor de una empresa</q>
            </h1>
          </div>
          <div className="text-center pt-0 pb-8 pl-8 items-center uppercase tracking-wider text-2xl text-[#1A69B4] font-semibold">
            CEO
          </div>
        </div>
      </div>
    </div>
    
  )
};

export default UserCard;