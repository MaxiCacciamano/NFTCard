// import React from "react";
import Designer from "./Designer";
import NFTGIFT from "../assets/IMG/MONKEY.png";
import '../assets/css/Card.css'
import etherum from '../assets/IMG/etherum.png'

const Card = () => {
  return (
    <div className="Card p-5 w-72 rounded-xl h-[500px]">
      <div>
        <img src={NFTGIFT} className="rounded-md h-[250px]" />
      </div>
      <div className="Info text-left my-3">
        <h2 className="my-3 font-bold text-lg">Equilibrium #3429</h2>
        <p className="my-3 col">Our Equilibrium collection promotoes balance and calm.</p>
        <div className="Price flex space-x-14 my-3" >
        <span className="Logandprice text-base font-bold flex"><img src={etherum} className="h-8"/>0.041ETH</span>
          <p>3 days left</p>
        </div>
      </div>
      <div>
        <Designer />
      </div>
    </div>
  );
};

export default Card;