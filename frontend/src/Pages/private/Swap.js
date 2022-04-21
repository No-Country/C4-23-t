import React from "react";
import GraphicSwap from "../../Components/Swap/GraphicSwap";
import SwapCard from "../../Components/Swap/SwapCard";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Swap = () => {
  const auth = useSelector((state) => state.auth);
  const wallets = useSelector((state) => state.wallet);
  console.log(wallets);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return (
    <div className="md:flex flex-row gap-[1%]">
      <GraphicSwap />
      <SwapCard />
    </div>
  );
};

export default Swap;
