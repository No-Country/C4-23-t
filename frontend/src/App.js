import "./App.css";
import Nosotros from "./Pages/Nosotros";
import UserAnalytics from "./Pages/UserAnalytics";
import User from "./Pages/User";
import Analytics from "./Pages/Analytics";
import Payments from "./Pages/Payments";
import LoginForm from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Nosotros />
      <UserAnalytics />
      <User />
      <Analytics />
      <Payments />
      <LoginForm />
    </div>
  );
}

export default App;
