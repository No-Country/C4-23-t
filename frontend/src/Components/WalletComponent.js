import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/WalletComponent.css";
import signoPeso from "../Assets/signo_pesos.png";

const Wallet = () => {
  const walletPrueba = {
    ars: 0,
    btc: 0.0012,
    eth: 2,
    bnb: 13,
    usdt: 0,
    usdc: 0,
  };

  const [coins, setCoins] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="walletContainer">
      <table>
        <thead className="walletHead">
          <tr>
            <th>Moneda</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="walletCoinColumn" id="firstRow">
              <div className="walletCoinColumnImg">
                <img src={signoPeso} alt="signo peso" />
              </div>
              <div className="walletCoinColumnName">Pesos</div>
            </td>
          </tr>
          {coins.map((row) => {
            console.log(walletPrueba.hasOwnProperty(row.symbol));
            return walletPrueba.hasOwnProperty(row.symbol) ? (
              <tr className="walletBody">
                <td className="walletCoinColumn">
                  <div className="walletCoinColumnImg">
                    <img src={row.image} alt="coin logo" />
                  </div>
                  <div className="walletCoinColumnName">{row.name}</div>
                </td>
                <td className="walletBalance">
                  <div>${row.current_price.toLocaleString()}</div>
                </td>
                <td>
                  <button>Comprar {row.symbol.toUpperCase()}</button>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Wallet;
