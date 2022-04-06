import React from 'react'

const UserCard = () => {
  return (
    //UserCard
    <div class="max-w-md mx-auto bg-gray-300 rounded-2xl shadow-md sm:max-w-auto md:max-w-auto lg:max-w-auto xl:max-w-auto sm:h-auto">
      <div class="md:flex lg:flex xl:flex">
        <div class="grid grid-cols-2 md:shrink">
          <img
            class="my-6 ml-6 h-32 w-52 object-cover md:h-auto lg:h-auto xl:h-auto md:w-auto lg:w-auto xl:w-auto rounded-[2rem]"
            src="https://thinkingheads.com/wp-content/uploads/2017/06/ceo.jpg"
            alt="CEO"
          />
          <div class="p-4 mt-6 mr-2 ml-9 sm:text-center md:text-center lg:text-center xl:text-center">
            <h1 class="text-[1.3rem] font-['Inder', sans-serif] text-center leading-thight font-medium text-[#1A69B4] hover:underline decoration-blue-600">
              <q>La seguridad y la estabilidad es lo mejor de una empresa</q>
            </h1>
          </div>
          <div class="ml-10 mb-8 text-center uppercase tracking-wide text-xl text-[#1A69B4] font-semibold">
            CEO
          </div>
        </div>
      </div>
    </div>
    
  )
};

export default UserCard