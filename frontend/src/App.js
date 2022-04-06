import "./App.css";
import Nosotros from "./Pages/Nosotros";
import UserAnalytics from "./Pages/UserAnalytics";
import User from "./Pages/User";
import Analytics from "./Pages/Analytics";
import Payments from "./Pages/Payments";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Pages/Login";

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
      <UserAnalytics />
      <Payments />
      <LoginForm />
    </>
    </div>
  );
}

export default App;
