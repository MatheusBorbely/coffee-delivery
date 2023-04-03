import { Minus, Plus } from "phosphor-react";
import {QuantitySelectorInput} from './styles'

interface QuantitySelectorProps{
    quantity: number,
    onChangeQuantitySelector: (quantityInput: number) => void
}

export function QuantitySelector({quantity, onChangeQuantitySelector}: QuantitySelectorProps) {
    function handleIncrement(){
        onChangeQuantitySelector(++quantity)  
    }
    function handleDecrement(){
        const isPositive = quantity - 1;
        if(isPositive) onChangeQuantitySelector(--quantity)  
    }
    return (
        <QuantitySelectorInput>
           <Minus size={14} weight="bold" onClick={handleDecrement}/>
                <input value={quantity} onChange={(event) => onChangeQuantitySelector(Number(event.target.value))} min="1" name="quantity" type="number" />
            <Plus size={14} weight="bold" onClick={handleIncrement}/>
        </QuantitySelectorInput>
    )
}
