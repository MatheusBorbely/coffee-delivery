import { Minus, Plus, Trash} from 'phosphor-react';
import { useState } from "react";

import { ProductItemContainer, ProductItemActions, ProductItemActionRemove, ProductItemInput } from "./styles";



export function ProductItem() {
    const [quantity, setQuantity] = useState<string>('1');
    return (
     <ProductItemContainer>
            <article>
                <img src="/assets/image/products/expresso.svg" />
                <div>
                    <h3>Expresso Tradicional</h3>
                    <ProductItemActions>
                        <ProductItemInput>
                            <Minus size={14} weight="bold" />
                            <input value={quantity} onChange={(event) => setQuantity(event.target.value)} min="1" name="quantity" type="number" />
                            <Plus size={14} weight="bold" />
                        </ProductItemInput>
                        <ProductItemActionRemove>
                            <Trash size={16} />
                            <span>Remover</span>
                        </ProductItemActionRemove>
                    </ProductItemActions>
                </div>
            </article>
            <span>R$ 9,90</span>
     </ProductItemContainer>
       
    )
  }
  