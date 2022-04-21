import React, { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";
import imgPablo from "../Assets/pablovyeira.png";
import imgPedro from "../Assets/pedroacosta.png";
import imgJulian from "../Assets/julianmarc.jpg";
import imgMartin from "../Assets/martincastro.jpg";
import imgMike from "../Assets/miguelbriceno.jpg";
import imgEdu from "../Assets/edufalcon.webp";
import imgSlider from "../Assets/imgSlider.png";

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { SliderMobil } from "./SliderMobil";

export default function SliderCard() {
  const [next, setNext] = useState(1);
  // cada 4 segundos cambia el valor next
  useEffect(() => {
    const interval = setInterval(() => {
      if (next === 3) {
        setNext(1);
      } else {
        setNext(next + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const changeNext = () => {
    if (next === 3) {
      setNext(1);
    } else {
      setNext(next + 1);
    }
  };
  console.log(next);
  return (
    <section>
      <div className="w-full relative flex justify-center items-center my-5 sm:py-10">
        <img
          src={imgSlider}
          alt="fondo"
          className="w-screen h-[350px] sm:h-screen shadow-lg rounded-[40px]"
        />
        <h1 className="absolute top-5 sm:top-20 text-[#1A69B4] font-bold text-lg sm:text-4xl text-center px-4">
          ¿Quiénes son los integrantes de nuestro equipo?
        </h1>
        {/* cuando el usuario este en mobil */}
        <SliderMobil />
        {/* sm:max esto se ejecuta cuando las pantalla eas grande*/}
        <div className="hidden sm:flex sm:flex-col absolute  sm:items-center sm:gap-6">
          <div className="top-1/4 right-1/3 md:top-4 md:right-8 md:absolute">
            <button className=" text-[#1A69B4] font-bold py-2 px-4 rounded-full">
              <ArrowBackIcon w={30} h={30} boxSize={80} />
            </button>
            {/* boton de back */}
            <button
              onClick={changeNext}
              className=" text-[#1A69B4] font-bold py-2 px-4 rounded-full"
            >
              <ArrowForwardIcon w={30} h={30} boxSize={80} />
            </button>
          </div>
          {/* las primeras cards */}
          <div
            className={
              next === 1 ? "md:translate-x-[-200px] shadow-2xl" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK UI/UX"}
              text={"Dedicación, constancia y organización son claves para el éxito del proyecto"}
              imageUrl={imgPablo}
              name={"Pablo Vieyra"}
            />
            {/* <-------------- 1  */}
          </div>
          <div className={next === 1 ? "md:ml-96 shadow-2xl" : "hidden"}>
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={"La comunicación y el trabajo en equipo es fundamental para llevar a cabo un proyecto"}
              imageUrl={imgPedro}
              name={"Pedro Acosta"}
            />
            {/* <-------------- 2  */}
          </div>
          {/* las segundas cards */}
          <div
            className={
              next === 2 ? "md:translate-x-[-200px] shadow-2xl" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={"Aprender de otros desarrolladores es un privilegio que muy pocos valoran"}
              imageUrl={imgMartin}
              name={"Martín Castro"}
            />
            {/* <-------------- 3  */}
          </div>
          <div className={next === 2 ? "md:ml-96 shadow-2xl" : "hidden"}>
            <UserCard
              dev={"FULLSTACK TESTER"}
              text={"Un buen desarrollo y buena estética hacen brillar cualquier proyecto"}
              imageUrl={imgJulian}
              name={"Julian Marc"}
            />
            {/* <-------------- 4  */}
          </div>
          {/* las terceras cards */}
          <div
            className={
              next === 3 ? "md:translate-x-[-200px] shadow-2xl" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={"Da lo mejor de ti en cada asignación, por muy fácil o difícil que resulte"}
              imageUrl={imgEdu}
              name={"Edu Falcón"}
            />
            {/* <-------------- 5  */}
          </div>
          <div className={next === 3 ? "md:ml-96 shadow-2xl" : "hidden"}>
            <UserCard
              dev={"FRONTEND DEVELOPER"}
              text={"Estar en un gran equipo de trabajo hace que queramos esforzarnos cada día"}
              imageUrl={imgMike}
              name={"Miguel Briceño"}
            />
            {/* <-------------- 6  */}
          </div>
        </div>
      </div>
    </section>
  );
}
