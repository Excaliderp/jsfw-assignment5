import bigZeroCola from "../api/largeflasks/route.js"

let drinks = bigZeroCola()

export default function Home() {
  return (
    <>
      <h1>Large flasks</h1>
      {drinks}
    </>
  )
}
