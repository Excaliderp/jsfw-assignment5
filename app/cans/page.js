import canZeroCola from "../api/cans/route"

let drinks = canZeroCola()

export default function Home() {
  return (
    <div>
      <h1>Cans</h1>
      {drinks}
    </div>
  )
}
