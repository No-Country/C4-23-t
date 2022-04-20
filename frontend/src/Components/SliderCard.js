import React, { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";
import imgSlider from "../Assets/fondo-azul-202668.jpg";
import imgPedro from '../Assets/pedroacosta.png'
import imgPablo from '../Assets/pablovyeira.png'
import imgJulian from '../Assets/julianmarc.jpg'
import imgMartin from '../Assets/martincastro.jpg'
import imgEdu from '../Assets/martincastro.jpg'
import imgMiguel from '../Assets/martincastro.jpg'
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

export default function SliderCard() {
  const [next, setNext] = useState(true);
  // cada 4 segundos cambia el valor next
  useEffect(() => {
    const interval = setInterval(() => {
      setNext(!next);
    }, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const changeNext = () => {
    setNext(!next);
  };

  return (
    <section>
      <div className="w-full relative flex justify-center items-center my-5 sm:py-10  ">
        <img
          src={imgSlider}
          alt="fondo"
          className="w-screen h-[350px] sm:h-screen shadow-lg "
        />
        <h1 className="absolute top-5 sm:top-20 text-white font-bold text-lg sm:text-4xl  text-center px-4  ">
          ¿Quiénes son los integrantes de nuestro equipo?
        </h1>
        {/* mobil */}
        <div className="snap-x flex w-full h-full sm:hidden gap-6 overflow-x-auto sm:overflow-x-hidden absolute pt-20 sm:">
          <div className="ml-4 shrink-0 snap-center overflow-hidden ">
            <UserCard dev={"Developer"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard dev={"CEO"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard dev={"ADMIN"} />
          </div>
          <div className="ml-2 shrink-0 snap-center overflow-hidden">
            <UserCard dev={"Marketing"} />
          </div>
        </div>
        {/* sm:max */}
        <div className="hidden sm:flex sm:flex-col absolute sm:items-center sm:gap-6 ">
          <div className="top-1/4 right-1/3 md:top-4 md:right-8 md:absolute">
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
          <div className={next ? "md:translate-x-[-200px] shadow-2xl" : "hidden"}>
            <UserCard dev={"FULLSTACK DEV"} developer={imgPedro} text={"La comunicación y el trabajo en equipo es fundamental para llevar a cabo un proyecto."} />
          </div>
          <div className={next ? "md:ml-96 shadow-2xl" : "hidden"}>
            <UserCard dev={"FULLSTACK DEV"} developer={imgPablo} text={"La dedicación y la constancia son claves para el éxito."} />
          </div>
          <div className={next ? "hidden" : "md:translate-x-[-200px] shadow-2xl"}>
            <UserCard dev={"FRONTEND TESTER"} developer={imgJulian} text={"Un buen desarrollo y buena estética hacen brillar cualquier proyecto."} />
          </div>
          <div className={next ? " hidden" : "md:ml-96 shadow-2xl"}>
            <UserCard dev={"BACKEND DEV"} developer={imgMartin} text={"Aprender de otros desarrolladores es un privilegio."} />
          </div>
          
        </div>
      </div>
    </section>
  );
}
