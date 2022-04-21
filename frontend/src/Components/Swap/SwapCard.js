import React, { useState, useEffect } from 'react';
import '../../CSS/SwapCard.css'

const SwapCard = () => {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    const consultarAPI = async() => { 
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const arrayCriptos = await resultado.map(cripto => (
      cripto.symbol
    ))
    console.log(resultado);
      setCoins(arrayCriptos);
  };
    consultarAPI()
  },[])
  
  const [val, setVal] = useState("");
  const [valConvert, setValConvert] = useState("");
  const [coinInput, setCoinInput] = useState("btc");
  const [coinSelected, setCoinSelected] = useState("btc");

useEffect(() => {setValConvert(val*2)},[val])
  

  const coinInverted = () => {
    setCoinInput(coinSelected);
    setCoinSelected(coinInput);
    setValConvert(val)
    setVal(valConvert)
  }

  useEffect(() => {},[])
    console.log(coinInput)

    console.log(coinSelected);
    return (
      <>
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
                <button className='hover:opacity-100 active:animate-bounce'>
                  <select value={coinInput}
                  onChange={e => setCoinInput((e.target.value))}>
                    {coins.map((cripto) => (
                    <option value={cripto}>
                      {cripto.toUpperCase()}
                    </option>
                    ))};
                  </select>
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
                <button onClick={coinInverted}   className="hover:bg-[#4A88C4] active:bg-[#1A69B4] active:animate-bounce border-solid border-transparent bg-[#C4C4C4]">
                  <i className='fas fa-arrow-down'></i>
                </button>
              </section>

              <section className='sectionCoinButton' >
                <button className='hover:opacity-50 active:animate-bounce'>
                  <select value={coinSelected} onChange={e => setCoinSelected((e.target.value))}>
                  {coins.map((cripto) => (
                  <option value={cripto}>{cripto.toUpperCase()}</option>
                  ))};
                  </select>
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
                    value={valConvert}/>
                  </label>
                </section>

                <section className="sectionButtonExchange" >
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1A69B4] duration-300 active:opacity-75">
                  Intercambiar
                </button>
              </section>
            </div> 

        </section>
        </>
  );
};

export default SwapCard;
