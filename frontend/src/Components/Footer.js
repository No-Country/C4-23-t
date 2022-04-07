import logo from "../Images/neocoin_logo.png";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="socialWrapper">
          <h2>Twitter</h2>
        </div>
        <div className="footerImageWrapper">
          <img src={logo} alt="neo coin logo" />
        </div>
        <div className="socialWrapper">
          <h2>Instagram</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
