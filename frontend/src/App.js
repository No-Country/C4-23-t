import "./App.css";
import PublicRouter from "./Routes/PublicRouter";
import PrivateRouter from "./Routes/PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route path="/private/*" element={<PrivateRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
