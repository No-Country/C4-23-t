import "./App.css";
import Nosotros from "./Pages/Nosotros";
import UserAnalytics from "./Pages/UserAnalytics";
import User from "./Pages/User";
import Analytics from "./Pages/Analytics";
import Payments from "./Pages/Payments";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Nosotros />
      <UserAnalytics />
      <User />
      <Analytics />
      <Payments />
    </div>
  );
}

export default App;
