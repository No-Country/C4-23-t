import { Route, Routes } from "react-router-dom";
import User from "../Pages/User";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import PrivateSettings from "../Pages/private/PrivateSettings";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route>
        <Route exact match path="/" element={<Home />} />
        <Route exact match path="user" element={<User />} />
        <Route exact match path="settings" element={<PrivateSettings />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouter;
