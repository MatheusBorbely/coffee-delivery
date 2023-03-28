import { ProductItemContainer, ProductItemActions, ProductItemActionRemove, ProductItemInput } from "./styles";
import { Minus, Plus, Trash} from 'phosphor-react';
import { useState } from "react";

export function ProductItem() {
    const [quantity, setQuantity] = useState<string>('1');
    return (
     <ProductItemContainer>
        <header>
                <img src="/assets/image/products/expresso.svg" />
                <section>
                    <p>Expresso Tradicional</p>
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
                </section>
            </header>
            <span>R$ 9,90</span>
     </ProductItemContainer>
       
    )
  }
  