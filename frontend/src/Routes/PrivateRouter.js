import { Route, Routes } from "react-router-dom";
import User from "../Pages/User";
import Error from "../Pages/Error";
import PrivateSettings from "../Pages/private/PrivateSettings";
import PrivateHome from "../Pages/private/PrivateHome";
import ProfileComponent from "../Components/ProfileComponent";
import UserLayout from "../Components/UserLayout";

const PrivateRouter = () => {
  return (
    <>
      <UserLayout>
        <Routes>
          <Route>
            <Route exact match path="/" element={<PrivateHome />} />
            <Route exact match path="user" element={<User />} />
            <Route exact match path="settings" element={<PrivateSettings />} />
            <Route exact match path="profile" element={<ProfileComponent />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserLayout>
    </>
  );
};

export default PrivateRouter;
