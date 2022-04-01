import "./App.css";
import Nosotros from "./Pages/Nosotros";
import UserAnalytics from "./Pages/UserAnalytics";
import User from "./Pages/User"
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <div className="App">
      <Nosotros />
      <UserAnalytics/>
      <User />
      <Analytics />
    </div>
  );
};

export default App;
