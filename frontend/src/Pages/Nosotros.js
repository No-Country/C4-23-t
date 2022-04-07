import React, { useState } from "react";
import UserCard from "../Components/UserCard";
import imgSlider from "../Assets/imgSlider.png";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
const Nosotros = () => {
  const [next, setNext] = useState(true);
  const changeNext = () => {
    setNext(!next);
  };
  return (
    <section>
      <div className="w-full relative flex justify-center items-center my-5 sm:py-10  ">
        <img
          src={imgSlider}
          alt="fondo"
          className="w-screen h-[350px] sm:h-screen shadow-lg rounded-[40px] "
        />
        <h1 className="absolute top-5 sm:top-20 text-white font-bold text-lg sm:text-4xl  text-center px-4  ">
          ¿Quienes son los integrantes de nuestro equipo?
        </h1>
        {/* mobil */}
        <div className="snap-x flex w-full h-full sm:hidden gap-6 overflow-x-auto sm:overflow-x-hidden absolute pt-20 sm:">
          <div className="ml-4 shrink-0 snap-center overflow-hidden ">
            <UserCard puesto={"Developer"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard puesto={"CEO"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard puesto={"ADMIN"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard puesto={"Marketing"} />
          </div>
        </div>
        {/* sm:max */}
        <div className="hidden sm:flex sm:flex-col absolute  sm:items-center sm:gap-6 ">
          <div className="   top-1/4 right-1/3 md:top-4 md:right-8 md:absolute">
            <button className=" text-white font-bold py-2 px-4 rounded-full">
              <ArrowBackIcon w={30} h={30} boxSize={80} />
            </button>
            {/* boton de back */}
            <button
              onClick={changeNext}
              className=" text-white font-bold py-2 px-4 rounded-full"
            >
              <ArrowForwardIcon w={30} h={30} boxSize={80} />
            </button>
          </div>
          <div
            className={next ? "md:translate-x-[-200px] shadow-2xl " : " hidden"}
          >
            <UserCard puesto={"Developer"} />
          </div>
          <div className={next ? " md:ml-96 shadow-2xl" : " hidden"}>
            <UserCard puesto={"CEO"} />
          </div>
          <div
            className={next ? " hidden" : "md:translate-x-[-200px] shadow-2xl"}
          >
            <UserCard puesto={"ADMIN"} />
          </div>
          <div className={next ? " hidden" : "md:ml-96  shadow-2xl"}>
            <UserCard puesto={"Marketing"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
