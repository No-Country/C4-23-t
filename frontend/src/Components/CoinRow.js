import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <tr className=" h-5 divide-x divide-slate-500 border-sky-300 text-center">
      <td className="text-muted font-bold">{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className=" rounded-full w-6 block m-auto"
        />
      </td>
      <td>
        <span className="font-bold text-blue-700">{coin.name}</span>
      </td>
      <td>
        <span className="w-2 ml-7 text-black-300 font-bold">
          {coin.symbol.toUpperCase()}
        </span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_24h > 0
            ? "text-blue-700 font-bold bg-green-200"
            : "text-blue-700 font-bold bg-red-300"
        }
      >
        {coin.price_change_percentage_24h}
      </td>

      <td>${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default CoinRow;
