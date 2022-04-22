import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/WalletComponent.css";
import signoPeso from "../Assets/signo_pesos.png";

const Wallet = ({ datos, setDatos }) => {
  const [coins, setCoins] = useState([]);
  const [pesos, setPesos] = useState(0);
  const [inputPesos, setInputPesos] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=10&page=1"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    const value = parseInt(inputPesos) + parseInt(pesos);
    setPesos(value);
    setInputPesos(0);
  };

  const addPesos = (e) => {
    setInputPesos(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pesos);

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
            <td className="walletBalance">
              <div className="walletBalanceAmount">
                {datos[0] && datos[0].arg}
              </div>
            </td>
            <td>
              <button id="walletPesosButton">Ingresar $</button>
            </td>
          </tr>
          {coins.map((row) => {
            return datos[0].hasOwnProperty(row.symbol) ? (
              <tr className="walletBody">
                <td className="walletCoinColumn" id="walletCoins">
                  <div className="walletCoinColumnImg">
                    <img src={row.image} alt="coin logo" />
                  </div>
                  <div className="walletCoinColumnName">{row.name}</div>
                </td>
                <td className="walletBalance">
                  <div>{datos[0][row.symbol]}</div>
                  <div id="walletBalanceAmount">
                    = ${datos[0][row.symbol] * row.current_price}
                  </div>
                </td>
                <td>
                  <button>Comprar {row.symbol.toUpperCase()}</button>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
      <div className="buyPesos">
        <form>
          <input
            type="number"
            placeholder="Ingrese monto"
            onChange={addPesos}
            value={inputPesos}
          />
          <button onClick={onButtonClick}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Wallet;
