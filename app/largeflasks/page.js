// import styles from './largeflasks.module.css'
// import Link from "next/link"
import bigZeroCola from "../api/bigflasks/route.js"

let drinks = bigZeroCola()

export default function Home() {
  return (
      <div>
        <h1>
          Large flasks
        </h1>
        {drinks}
      </div>
  )
}
