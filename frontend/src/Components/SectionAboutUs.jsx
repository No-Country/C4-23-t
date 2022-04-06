import React from 'react';

const SectionAboutUs = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-8 lg:py-20 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#1A69B4]">
            Desde 2022 cuidando tus
            <span className="dark:text-blue-400"> criptos </span>para que puedas
            ahorrar e invetir más fácilmente
          </h1>
          <p className="mt-6 mb-8 text-lg dark:text-blue-400 sm:mb-12">
            Nuestro objetivo es proporcionarte rapidez, comodidad y sobretodo
            seguridad.
            <br />
            Sé parte de nuestra Exchange y empieza a invertir a lo grande.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href={"Analytics"} className="px-8 py-3 text-lg font-semibold rounded-md hover:text-xl shadow-lg dark:bg-sky-600 dark:text-white" >
              Sign Up</a>
            <a href={"Analytics"} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border-2 hover:text-xl hover:bg-[#1A69B4] hover:text-white shadow-lg rounded-md text-sky-600">
              Analytics</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://cdn.goconqr.com/uploads/media/image/31223372/desktop_d7b48597-53f0-4457-911d-b322f7fade11.png"
            alt="TeamWork"
            className="object-cover h-72 w- sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionAboutUs;