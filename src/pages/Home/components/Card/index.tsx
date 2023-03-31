import { Minus, Plus, ShoppingCartSimple} from 'phosphor-react';
import { FormEvent, useContext, useState } from "react";

import { Product } from "../../../../interfaces/Product";
import { CardAction, CardForm, CardInfo, CardInput, CardPrice, CardProduct, CardType } from './styles';
import { CartContext } from '../../../../contexts/CartContext';
import { CartItem } from '../../../../interfaces/CartItem';


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
  function handleIncrement(){
    setQuantity((quantity) => ++quantity);  
  }
  function handleDecrement(){
    if(quantity - 1)  setQuantity((quantity) => --quantity);
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
          <CardInput variantColor='purple'>
            <Minus size={14} weight="bold" onClick={handleDecrement}/>
            <input value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} min="1" name="quantity" type="number" />
            <Plus size={14} weight="bold" onClick={handleIncrement}/>
          </CardInput>
          <button type="submit" onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
          </button>
        </CardForm>
      </CardAction>
    </CardProduct>
  )
}
