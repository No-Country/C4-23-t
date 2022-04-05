import "./App.css";
import Nosotros from "./Pages/Nosotros";
import User from "./Pages/User";
import Analytics from "./Pages/Analytics";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Nosotros />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/userLogin" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
