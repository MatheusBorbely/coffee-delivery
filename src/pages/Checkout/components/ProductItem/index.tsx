import { useState } from "react";
import { Trash } from 'phosphor-react';

import {QuantitySelector} from '../../../../components/QuantitySelector';
import { CartItem } from '../../../../interfaces/CartItem';
import { floatToMoney } from "../../../../utils/money";
import { ProductItemContainer, ProductItemActions, ProductItemActionRemove } from "./styles";

interface ProductItemProps {
    item: CartItem,
    changeQuantityCartItem: (productId: number, quantity: number) => void, 
    removeCartItem: (productId: number) => void, 
}

export function ProductItem({item, changeQuantityCartItem, removeCartItem}: ProductItemProps) {
    const {id, name, image, price, quantity} = item;
    const [quantityInput, setQuantityInput] = useState<number>(quantity);
    const totalPrice = price * quantityInput;

    function handleChangeQuantity(quantitySelector: number){
        changeQuantityCartItem(id, quantitySelector);
        setQuantityInput(quantitySelector);
    }
    function handleRemoveCartItem(){
        removeCartItem(id)
    }

    return (
        <ProductItemContainer>
            <article>
                <img src={image} alt={`Foto do produto - Café ${name}`} />
                <div>
                    <h3>{name}</h3>
                    <ProductItemActions>
                        <QuantitySelector quantity={quantityInput} onChangeQuantitySelector={handleChangeQuantity}/>
                        <ProductItemActionRemove onClick={handleRemoveCartItem}>
                            <Trash size={16} />
                            <span>Remover</span>
                        </ProductItemActionRemove>
                    </ProductItemActions>
                </div>
            </article>
            <span>{floatToMoney(totalPrice)}</span>
        </ProductItemContainer>
    )
  }
  