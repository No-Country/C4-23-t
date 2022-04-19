import React from "react";
import GraphicSwap from "../../Components/Swap/GraphicSwap";
import SwapCard from "../../Components/Swap/SwapCard";
import UserLayout from "../../Components/UserLayout";

const Swap = () => {
  return (
    <div className="md:flex flex-row gap-[1%]">
      <GraphicSwap />
      <SwapCard />
    </div>
  );
};

export default Swap;
