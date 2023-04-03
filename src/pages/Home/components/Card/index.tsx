import { ShoppingCartSimple} from 'phosphor-react';
import { FormEvent, useContext, useState } from "react";

import { CartContext } from '../../../../contexts/CartContext';
import { Product } from "../../../../interfaces/Product";
import { CartItem } from '../../../../interfaces/CartItem';
import {QuantitySelector} from '../../../../components/QuantitySelector';
import { CardAction, CardForm, CardInfo, CardPrice, CardProduct, CardType } from './styles';

export function Card({id, name, description, image, price, types}: Product ) {
  const {addToCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(1);

  function handleAddToCart(event: FormEvent){
    event.preventDefault();
    const newProduct: CartItem ={
      id,
      name,
      image,
      price,
      quantity
    }
    addToCart(newProduct)
  }

  function handleChangeQuantity(quantitySelector: number){
    setQuantity(quantitySelector)
  }

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
        <h3>
          {name}
        </h3>
        <p>
          {description}
        </p>
      </CardInfo>
      <CardAction>
        <CardPrice>
          <h3>
            <span>R$ </span>
            {price.toString().replace('.', ',')}
          </h3>
        </CardPrice>
        <CardForm>
          <QuantitySelector quantity={quantity} onChangeQuantitySelector={handleChangeQuantity} />
          <button type="submit" onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
          </button>
        </CardForm>
      </CardAction>
    </CardProduct>
  )
}
