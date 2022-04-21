import React, { useState, useEffect } from "react";
import NewWallet from "../../Components/NewWallet";
import Wallet from "../../Components/WalletComponent";
import { getWallet } from "../../store/actions/walletActions";

import { useDispatch, useSelector } from "react-redux";

const WalletPage = () => {
  const dispatch = useDispatch();
  const wallets = useSelector((state) => state.wallet);
  console.log(wallets);

  const [walletM, setWalletM] = useState({
    directionName: "Prueba",
    arg: 0,
    btc: 0,
    eth: 0,
    usdt: 0,
    bnb: 0,
    usdc: 0,
  });

  useEffect(() => {
    dispatch(getWallet());
  }, [wallets, dispatch]);

  return (
    <>
      {wallets._id === undefined ? (
        <>
          <NewWallet walletM={walletM} setWalletM={setWalletM} />
        </>
      ) : (
        <>
          <Wallet />
        </>
      )}
    </>
  );
};

export default WalletPage;
