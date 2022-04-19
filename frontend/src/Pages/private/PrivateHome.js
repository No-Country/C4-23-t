import logoHome from "../../Assets/logoHome.svg";
import "../../CSS/PrivateHome.css";
import UserHomeCard from "../../Components/UserHomeCard";
import demoGraphic from "../../Assets/DemoGraphic.svg";
import useTitle from "../../Utils/useTitle";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateHome = () => {
  useTitle("Home");

  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;

  return (
    <div className="PrivateHome">
      <h3 className="privateHomeTitle">Tendencias</h3>
      <div className="privateHomeContainer">
        <UserHomeCard
          cryptoCoin="Bitcoin"
          price="1000.121"
          variation="26"
          graphic={demoGraphic}
        />
        <UserHomeCard
          cryptoCoin="Bitcoin"
          price="1000.121"
          variation="26"
          graphic={demoGraphic}
        />
        <UserHomeCard
          cryptoCoin="Bitcoin"
          price="1000.121"
          variation="26"
          graphic={demoGraphic}
        />
      </div>
      <h3 className="title">Noticias</h3>
      <h4 className="subtitle">Proximamente......</h4>
      <div className="containerFirst">
        <div className="containerPrivateHome">
          <div>
            <p className="news">NoCountryCoin</p>
            <img className="image" src={logoHome} alt="No country Logo" />
          </div>
          <div>
            <p className="news">La Moneda para los </p>
            <p className="news"> desarrolladores</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateHome;
