import { MapPinLine } from 'phosphor-react';
import { CheckoutInfoContainer, InputContainer } from "./styles";
import { UserContext, UserContextType } from '../../../../contexts/UserContext';
import { useContext } from 'react';

export function CheckoutInfo() {
    const {user, setNewUser} = useContext<UserContextType>(UserContext);
    return (
       
        <CheckoutInfoContainer>
            <header>
    
                <MapPinLine size={22} />
                <div>
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </header>
            <form>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='text'
                        placeholder='CEP'
                        name='CEP'
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        type='text'
                        placeholder='Rua'
                        name='Rua' 
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='number' 
                        placeholder='Número'
                        name='Numero' 
                    />
                    <input
                        type='text'
                        placeholder='Complemento'
                        name='Complemento'
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='text'
                        placeholder='Bairro'
                        name='Bairro' 
                    />
                    <input 
                        style={{ maxWidth: "min(276px, 100%)" }} 
                        type='text' 
                        placeholder='Cidade'
                        name='Cidade' 
                    />
                    <input 
                        style={{ maxWidth: "min(60px, 100%)" }} 
                        type='text'
                        placeholder='UF' 
                    />
                </InputContainer>
            </form>
        </CheckoutInfoContainer>
    )
}
