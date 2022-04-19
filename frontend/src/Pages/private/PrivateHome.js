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
  const [coinsName, getCoinsName] = useState([])
  const [coinOne, getCoinOne] = useState([])
  const [coinTwo, getCoinTwo] = useState([])
  const [coinThree, getCoinThree] = useState([])
  const APITrending = "https://api.coingecko.com/api/v3/search/trending"
  function getUrl (coinId){return "https://api.coingecko.com/api/v3/simple/price?ids=" + coinId + "&vs_currencies=ars&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true"}
  const fetchGet = async (url) => {
    const response = await fetch(url)
    if (!response.ok){
      throw new Error ("Data could not be fetched")
    } else {
      return response.json()
    }
  }
  useEffect (() => {
    fetchGet(APITrending)
    .then((res) => {

      getCoinsName(res.coins.map((data) => data.item).slice(0-3))

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[0].id))
      .then((res1) => {
        getCoinOne(res1)
        })
      .catch((e) => {})

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[1].id))
      .then((res2) => {
        getCoinTwo(res2)
        })
      .catch((e) => {})

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[2].id))
      .then((res3) => {
        getCoinThree(res3)
        })
      .catch((e) => {})
      
      })
    .catch((e) => {
      
    })
  }, [])
  
if(coinOne[Object.keys(coinOne)[0]]){
  console.log(coinOne[Object.keys(coinOne)[0]].ars)
}

if (auth.token == null) return <Navigate to="/userLogin" />;

  return (
    
    <div className="PrivateHome">
      <h3 className="privateHomeTitle">Tendencias</h3>
      <div className="privateHomeContainer">
        <UserHomeCard cryptoCoin={coinsName[0] && coinsName[0].symbol} price={coinOne[Object.keys(coinOne)[0]] && coinOne[Object.keys(coinOne)[0]].ars} variation={coinOne[Object.keys(coinOne)[0]] && coinOne[Object.keys(coinOne)[0]].ars_24h_change.toFixed(3)} graphic={demoGraphic}/>
        <UserHomeCard cryptoCoin={coinsName[1] && coinsName[1].symbol} price={coinTwo[Object.keys(coinTwo)[0]] && coinTwo[Object.keys(coinTwo)[0]].ars} variation={coinTwo[Object.keys(coinTwo)[0]] && coinTwo[Object.keys(coinTwo)[0]].ars_24h_change.toFixed(3)} graphic={demoGraphic}/>
        <UserHomeCard cryptoCoin={coinsName[2] && coinsName[2].symbol} price={coinThree[Object.keys(coinThree)[0]] && coinThree[Object.keys(coinThree)[0]].ars} variation={coinTwo[Object.keys(coinTwo)[0]] && coinTwo[Object.keys(coinTwo)[0]].ars_24h_change.toFixed(3)} graphic={demoGraphic}/>
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
