import type { FC } from "react"
import { type pizzaDataProps } from "../data"

const getImage = (photoName: string): string => {
  return new URL(`${photoName}`, import.meta.url).href
}

const Pizza: FC<pizzaDataProps> = ({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={getImage(`../${photoName}`)} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  )
}

export default Pizza
