import React from 'react';
import styles from "../../drinks.module.css"

const smallZeroCola = () => {
  const sodaBrands = [
    { id: 1, 
      name: 'Coca-Cola Zero',
      buy: "Everywhere",
      cost: "ca 16:-",
      taste: "7/10", 
      price: "3/10",
      description: "The Original Taste has been dominating the soda market for years. In the latest raise of costs however, I feel like the original zero cola isn't quite worth it."},

    { id: 2, 
      name: 'Freeway Cola Zero',
      buy: "Lidl",
      cost: "ca 6:-",
      taste: "5/10", 
      price: "9/10",
      description: "The 'Germans take on the soda market is strong, but falls just short. With great price and decent taste, it's still a good contetstant."},

    { id: 3, 
      name: 'Pepsi Max' ,
      buy: "Everywhere",
      cost: "ca 14:-",
      taste: "8/10", 
      price: "4/10",
      description: "The markets runner up. I'll be painfully honest with you all, Max has a slightly better taste than Zero. It's something with Pepsis original taste that just works better with sweeteners."},

    // { id: X, 
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

export default smallZeroCola;