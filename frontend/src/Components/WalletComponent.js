import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/WalletComponent.css";

const Wallet = () => {
  const walletPrueba = {
    ars: 0,
    btc: 0.0012,
    eth: 2,
    bnb: 13,
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
        <thead>
          <tr>
            <th>Moneda</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((row) => {
            console.log(walletPrueba.hasOwnProperty(row.symbol));
            return walletPrueba.hasOwnProperty(row.symbol) ? (
              <tr>
                <td>
                  <div className="walletCoinColumn">
                    <img src={row.image} alt="coin logo" />
                    {row.name}
                  </div>
                </td>
                <td>${row.current_price.toLocaleString()}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Wallet;
