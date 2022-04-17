import React, { useState, useEffect} from "react";
import logoHome from "../../Assets/logoHome.svg";
import "../../CSS/PrivateHome.css";
import UserHomeCard from "../../Components/UserHomeCard";
import demoGraphic from "../../Assets/DemoGraphic.svg";
import useTitle from "../../Utils/useTitle";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateHome = () => {
  useTitle("Home")
  const auth = useSelector((state) => state.auth);
  const [coinOne, getCoinOne] = useState([])
  const [coinTwo, getCoinTwo] = useState([])
  const [coinThree, getCoinThree] = useState([])
  const APITrending = "https://api.coingecko.com/api/v3/search/trending"
  const fetchPost = async () => {
    const response = await fetch(APITrending)
    if (!response.ok){
      throw new Error ("Data could not be fetched")
    } else {
      return response.json()
    }
  }
  useEffect (() => {
    fetchPost()
    .then((res) => {
      getCoinOne(res.coins.slice(0-3).map((data) =>
      data.item)[0])
      getCoinTwo(res.coins.slice(0-3).map((data) =>
      data.item)[1])
      getCoinThree(res.coins.slice(0-3).map((data) =>
      data.item)[2])
      })
    .catch((e) => {
      
    })
  }, [])
  


console.log(coinOne)
console.log(coinTwo)
console.log(coinThree.name)


/* const coinOne = post[0]
const coinTwo = post[1]
const coinThree = post[2] */

/* console.log(coinOne)
console.log(coinTwo)
console.log(coinThree) */


if (auth.token == null) return <Navigate to="/userLogin" />;


  return (
    
    <div className="PrivateHome">
      <h3 className="privateHomeTitle">Tendencias</h3>
      <div className="privateHomeContainer">
        <UserHomeCard cryptoCoin={coinOne.symbol} price={coinOne.price_btc} variation="26" graphic={demoGraphic}/>
        <UserHomeCard cryptoCoin={coinTwo.symbol} price={coinTwo.price_btc} variation="26" graphic={demoGraphic}/>
        <UserHomeCard cryptoCoin={coinThree.symbol} price={coinThree.price_btc} variation="26" graphic={demoGraphic}/>
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
