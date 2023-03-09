import React from "react"
import styles from "../../drinks.module.css"
import Image from "next/image"
import bottle from "../../../public/bigbottle.png"

const bigZeroCola = () => {
  const sodaBrands = [
    {
      name: "Coca-Cola Zero",
      buy: "Everywhere",
      cost: "ca 23-26:-",
      taste: "7/10",
      price: "4/10",
      img: bottle,
      description:
        "The Original Taste has been dominating the soda market for years. In the latest raise of costs however, I feel like the original zero cola isn't quite worth it.",
    },

    {
      name: "Freeway Cola Zero",
      buy: "Lidl",
      cost: "ca 12:-",
      taste: "5/10",
      price: "9/10",
      img: bottle,
      description:
        "The 'Germans take on the soda market is strong, but falls just short. With great price and decent taste, it's still a good contetstant.",
    },

    {
      name: "ICA Cola Zero",
      buy: "ICA",
      cost: "ca 14:-",
      taste: "3/10",
      price: "8/10",
      img: bottle,
      description:
        "Swedens no.1 off-brand (don't quote me on this) is as good as anyone can expect... quite shitty. Coming up on a sligthly higher price than most 'off-brands' and with inferior taste, it's a no-go.",
    },

    {
      name: "Premier Cola Zero",
      buy: "Willy:s, Hemköp, City Gross, ",
      cost: "ca 9-14:-",
      taste: "10/10",
      price: "8/10",
      img: bottle,
      description:
        "I've always enjoyed Premier Cola. Once I tried the zero version, it was like an angel choir started singing. I can't really put my finger on it, but the taste is amazing, even surpassing 'The Orinigal Taste', and I've been a hardcore Coke-fan forever.",
    },

    {
      name: "Pepsi Max",
      buy: "Everywhere",
      cost: "ca 14:-",
      taste: "8/10",
      price: "4/10",
      img: bottle,
      description:
        "The markets runner up. I'll be painfully honest with you all, Max has a slightly better taste than Zero. It's something with the original taste that just works better with sweeteners.",
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
          <Image src={brand.img} alt="large bottle" />
        </div>
      ))}
    </div>
  )
}

export default bigZeroCola
