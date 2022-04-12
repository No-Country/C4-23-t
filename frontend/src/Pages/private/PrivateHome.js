import logoHome from "../../Assets/logoHome.svg";
import "../../CSS/PrivateHome.css";

const PrivateHome = () => {
  return (
    <>
      <div>
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
    </>
  );
};

export default PrivateHome;
