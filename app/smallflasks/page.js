import smallZeroCola from "../api/smallflasks/route.js"

let drinks = smallZeroCola()

export default function Home() {
  return (
    <div>
      <h1>Small flasks</h1>
      {drinks}
    </div>
  )
}
