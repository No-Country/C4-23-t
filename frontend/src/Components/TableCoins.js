import React from "react";
import CoinRow from "./CoinRow.js";

const titles = [
  "#",
  "Coin",
  "Price",
  "Symbol",
  "Price Change",
  "24h Volume",
  "Total Volume",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className="table-auto w-full h-96 divide-y divide-x  border-black border-2 ">
      <thead>
        <tr className="divide-sky-500 border-sky-600 ">
          {titles.map((title, i) => (
            <td key={i} className="font-bold text-center">
              {title}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 border-black  divide-x  ">
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
