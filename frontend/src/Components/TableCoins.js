import React from "react";
import CoinRow from "./CoinRow.js";

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className="table-auto w-full  h-screen divide-y divide-x  divide-slate-500 border-2 ">
      <thead>
        <tr className="divide-slate-500 border-2">
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 divide-x">
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
