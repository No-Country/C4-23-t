import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <tr className="  divide-x divide-slate-500">
      <td className="text-muted font-bold">{index}</td>
      <td>
        <img src={coin.image} alt="" className=" rounded-full w-6" />
      </td>
      <td>
        <span className="font-bold">{coin.name}</span>
        <span className="w-2 ml-7 text-indigo-300">{coin.symbol}</span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_24h > 0
            ? "text-green-500 font-bold"
            : "text-red-700 font-bold"
        }
      >
        {coin.price_change_percentage_24h}
      </td>

      <td>${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default CoinRow;
