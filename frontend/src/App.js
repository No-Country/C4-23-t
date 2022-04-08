import "./App.css";
import Nosotros from "./Pages/Nosotros";
import User from "./Pages/User";
import Analytics from "./Pages/Analytics";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Nosotros />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/userLogin" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>

  );
};

export default App;
