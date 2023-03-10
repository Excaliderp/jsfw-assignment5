"use client"
import Image from "next/image"
import can from "/public/can.jpg"
import drink from "/public/drink.jpg"
import Styles from "./index.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div className={Styles.content}>
        <p>Prices go up, the need for soda stays the same. It is time to explore the unexplored, travel the roads less traveled.</p>
        <Image 
        src={can}
        alt="soda can"
        width={500}
        />
      </div>

      <div className={Styles.content}>
        <Image 
        src={drink}
        alt="refreshing drink"
        width={500}
        />
        <p>I have taken it upon myself to debunk the myth of off-brand sodas being worse that the OG, or go down trying.</p>
      </div>

      <Link href="./addsoda">Secret Link</Link>
    </>
  )
}
