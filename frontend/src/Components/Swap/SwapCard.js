import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CSS/SwapCard.css'
import imgBTC from '../../Assets/btc-icon.svg'

const SwapCard = () => {
  /*const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(coins);*/


  const [val, setVal] = useState("");
  const [valConvert, setValConvert] = useState("");

    return (
      <section className='container1st' >
              <div className='containerOne'>
                <section className='sectionOne' >
                  <h1>Swap</h1>
                  <p>
                    Canjea tus criptomonedas en un instante
                  </p>
                </section>

                <hr/>

                <section className='sectionCoinButton' >
                  <button className='hover:opacity-50 active:animate-bounce'>
                    <img src={imgBTC} alt='' />
                    <h2>BTC</h2>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"} alt='down-arrow' />
                  </button>
                </section>

                <section className='sectionLabel'>
                  <label>
                  <input 
                  type="text" 
                  name='amount'
                  inputMode='decimal'
                  pattern='^[0-9]*[.,]?[0-9]*$'
                  autoComplete='off'
                  placeholder="0.0"
                  minLength={1}
                  maxLength={79} 
                  value={val}
                  onChange={(e) => 
                  setVal((v) => (e.target.validity.valid ? e.target.value : v))} />
                  </label>
                </section>

                <section className='sectionButtonInvert'>
                  <button id='buttonList' className="hover:bg-[#4A88C4] active:bg-[#1A69B4] active:animate-bounce border-solid border-transparent bg-[#C4C4C4]">
                    <i className='fas fa-arrow-down'></i>
                  </button>
                </section>

                <section className='sectionCoinButton' >
                  <button className='hover:opacity-50 active:animate-bounce'>
                    <img src={''} alt='' />
                    <h2>{}</h2>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"} alt='down-arrow' />
                  </button>
                </section>

                <section className='sectionLabel'>
                  <label>
                    <input 
                    type="text" 
                    name='amount' 
                    inputmode='decimal'
                    pattern='^[0-9]*[.,]?[0-9]*$'
                    autoComplete='off'
                    placeholder="0.0"
                    minLength={1}
                    maxLength={79} 
                    value={valConvert}
                    onChange={(e) => 
                    setValConvert((v) => (e.target.validity.valid ? e.target.value : v))} />
                  </label>
                </section>

                <section className="sectionButtonExchange" >
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1A69B4] duration-300 active:opacity-75">
                  Intercambiar
                </button>
              </section>
            </div> 

        </section>
  );
};

export default SwapCard;
