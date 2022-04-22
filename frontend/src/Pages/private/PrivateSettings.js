import React from "react";
import CardsSetings from "../../Components/CardsSettins";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTitle from "../../Utils/useTitle";

export default function PrivateSettings() {
  useTitle("Settings")
  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return (
    <div className="flex flex-col">
      <CardsSetings />
    </div>
  );
}
