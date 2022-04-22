import React, { useState, useEffect } from "react";
import NewWallet from "../../Components/NewWallet";
import Wallet from "../../Components/WalletComponent";
import { getWallet } from "../../store/actions/walletActions";
import axios from "axios";
import { url, setHeaders } from "../../api/index.js";

const WalletPage = () => {
  const [datos, setDatos] = useState({});
  useEffect(() => {document.title="Wallet"}, []);
  const getData = async () => {
    try {
      const res = await axios.get(`${url}/wallet`, setHeaders());

      setDatos(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(datos);

  useEffect(() => {
    getData();
  }, []);

  const [walletM, setWalletM] = useState({
    directionName: "Prueba",
    arg: 0,
    btc: 0,
    eth: 0,
    usdt: 0,
    bnb: 0,
    usdc: 0,
  });

  return (
    <>
      {datos.length === 0 ? (
        <>
          <NewWallet walletM={walletM} setWalletM={setWalletM} />
        </>
      ) : (
        <>
          <Wallet datos={datos} setDatos={setDatos} />
        </>
      )}
    </>
  );
};

export default WalletPage;
