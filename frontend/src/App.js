import "./App.css";
import PublicRouter from "./Routes/PublicRouter";
import PrivateRouter from "./Routes/PrivateRouter";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Register from "./Pages/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<PublicRouter />} />
        <Route path="/private/*" element={<PrivateRouter />} />
      </Routes>
    </Layout>
  );
}

export default App;
