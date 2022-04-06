import React from "react";
import UserCard from "../Components/UserCard";
import imgSlider from "../Assets/imgSlider.png";

const Nosotros = () => {
  return (
    <section>
      <div className="w-full relative flex justify-center items-center my-5  ">
        <img
          src={imgSlider}
          alt="fondo"
          className="w-screen h-[350px] sm:h-screen "
        />
        <h1 className="absolute top-5 text-white font-bold text-lg text-center px-4  ">
          ¿Quienes son los integrantes de nuestro equipo?
        </h1>
        <div className="snap-x flex w-full h-full gap-6 overflow-x-auto absolute pt-20 sm:">
          <div className="ml-4 shrink-0 snap-center overflow-hidden">
            <UserCard />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
