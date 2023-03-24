import { Product } from "../../../../interfaces/Product";


export function Card({name, description, image, price, types}: Product ) {
  return (
    <>
      {name}
    </>
  )
}
