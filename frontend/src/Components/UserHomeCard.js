import React from "react";
import "../CSS/UserHomeCard.css"

function UserHomeCard(props) {
    const cryptoCoin = props.cryptoCoin
    const price = props.price
    const variation = props.variation
    const graphic = props.graphic
    return (  
        <div className="UserCardHome">
            <h2 className="userCardTitle">{cryptoCoin}</h2>
            <div className="userCardContainer">
                <h3 className="userCardPriceTag">Price</h3>
                <h3 className="userCardVariation">{variation}%</h3>
            </div>
            <h2 className="userCardPrice">{price}</h2>
            <img className="graphic" alt="graphic" src={graphic}/>
           
        </div>
    );
}

export default UserHomeCard;