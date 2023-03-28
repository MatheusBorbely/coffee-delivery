import { Minus, Plus, ShoppingCartSimple} from 'phosphor-react';
import { useState } from "react";

import { Product } from "../../../../interfaces/Product";
import { CardAction, CardForm, CardInfo, CardInput, CardPrice, CardProduct, CardType } from './styles';


export function Card({id, name, description, image, price, types}: Product ) {
  const [quantity, setQuantity] = useState<string>('1');
  const allTypes = types.map( type => (
    <span>{type}</span>
  ))
  return (
    <CardProduct>
      <img src={image} alt={`Foto do produto - Café ${name}`} />
      <CardType>
        {allTypes}
      </CardType>
      <CardInfo>
        <h2>
          {name}
        </h2>
        <p>
          {description}
        </p>
      </CardInfo>
      <CardAction>
        <CardPrice>
          <h3>
            <span>R$</span>
            {price.toString().replace('.', ',')}
          </h3>
        </CardPrice>
        <CardForm>
          <CardInput variantColor='purple'>
            <Minus size={14} weight="bold" />
            <input value={quantity} onChange={(event) => setQuantity(event.target.value)} min="1" name="quantity" type="number" />
            <Plus size={14} weight="bold" />
          </CardInput>
          <button>
            <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
          </button>
        </CardForm>
      </CardAction>
    </CardProduct>
  )
}
