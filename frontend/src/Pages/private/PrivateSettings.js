import React from "react";
import CardsSetings from "../../Components/CardsSettins";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateSettings() {
  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return (
    <div className="flex flex-col">
      <CardsSetings />
    </div>
  );
}
