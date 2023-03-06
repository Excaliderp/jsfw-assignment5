import React from 'react';
import styles from "../../drinks.module.css"

const canZeroCola = () => {
  const sodaBrands = [
    { id: 1, 
      name: 'Coca-Cola Zero',
      buy: "Everywhere",
      cost: "ca 23-26:-",
      taste: "7/10", 
      price: "4/10",
      description: "The Original Taste has been dominating the soda market for years. In the latest raise of costs however, I feel like the original zero cola isn't quite worth it."},

    { id: 2, 
      name: 'Freeway Cola Zero',
      buy: "Lidl",
      cost: "ca 12:-",
      taste: "5/10", 
      price: "9/10",
      description: "The 'Germans take on the soda market is strong, but falls just short. With great price and decent taste, it's still a good contetstant."},

    { id: 3, 
      name: 'ICA Cola Zero',
      buy: "ICA",
      cost: "ca 14:-",
      taste: "3/10", 
      price: "8/10",
      description: "Swedens no.1 off-brand (don't quote me on this) is as good as anyone can expect... quite shitty. Coming up on a sligthly higher price than most 'off-brands' and with inferior taste, it's a no-go."},

    { id: 4, 
      name: 'Premier Cola Zero',
      buy: "Willy:s, Hemköp, City Gross, ",
      cost: "ca 9-14:-",
      taste: "10/10", 
      price: "8/10",
      description: "I've always enjoyed Premier Cola. Once I tried the zero version, it was like an angel choir started singing. I can't really put my finger on it, but the taste is amazing, even surpassing 'The Orinigal Taste', and I've been a hardcore Coke-fan forever." },

    { id: 5, 
      name: 'Pepsi Max' ,
      buy: "Everywhere",
      cost: "ca 14:-",
      taste: "8/10", 
      price: "4/10",
      description: "The markets runner up. I'll be painfully honest with you all, Max has a slightly better taste than Zero. It's something with the original taste that just works better with sweeteners."},

    // { id: 6, 
    //   name: 'Placeholder' ,
    //   buy: "placeholder",
    //   cost: "ca xx:-",
    //   taste: "0/10", 
    //   price: "0/10",
    //   description: "lorem ipsum"},

  ];

  return (

      <div>
        {sodaBrands.map((brand) => (
          <div className={styles.drinkCard} key={brand.id}>
            <h3>{brand.name}</h3> 
            <p>{brand.buy}</p> 
            <p>{brand.cost}</p> 
            <p>{brand.taste}</p> 
            <p>{brand.price}</p> 
            <p>{brand.description}</p> 
            
          </div>
        ))}
      </div>
  );
};

export default canZeroCola;