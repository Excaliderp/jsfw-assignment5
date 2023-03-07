import React from "react"
import styles from "../../drinks.module.css"
import Image from "next/image"
import bottle from "../../../public/glassbottle.png"

const smallZeroCola = () => {
  const sodaBrands = [
    {
      id: 1,
      name: "Coca-Cola Zero",
      buy: "Everywhere",
      cost: "ca 16:-",
      taste: "7/10",
      price: "3/10",
      img: bottle,
      description:
        "The Original Taste has been dominating the soda market for years. In the latest raise of costs however, I feel like the original zero cola isn't quite worth it.",
    },

    {
      id: 2,
      name: "Freeway Cola Zero",
      buy: "Lidl",
      cost: "ca 6:-",
      taste: "5/10",
      price: "9/10",
      img: bottle,
      description:
        "The 'Germans take on the soda market is strong, but falls just short. With great price and decent taste, it's still a good contetstant.",
    },

    {
      id: 3,
      name: "Pepsi Max",
      buy: "Everywhere",
      cost: "ca 14:-",
      taste: "8/10",
      price: "4/10",
      img: bottle,
      description:
        "The markets runner up. I'll be painfully honest with you all, Max has a slightly better taste than Zero. It's something with Pepsis original taste that just works better with sweeteners.",
    },
  ]

  return (
    <div className={styles.content}>
      {sodaBrands.map((brand) => (
        <div className={styles.drinkCard} key={brand.id}>
          <h3>{brand.name}</h3>
          <p>But it at: {brand.buy}</p>
          <p>Costs: {brand.cost}</p>
          <p>Taste rate: {brand.taste}</p>
          <p>Price rate: {brand.price}</p>
          <p className={styles.description}>
            <span className={styles.span}>Words from our sponsor:</span>
            <br />
            {brand.description}
          </p>
          <Image src={brand.img} alt="small bottle" />
        </div>
      ))}
    </div>
  )
}

export default smallZeroCola
