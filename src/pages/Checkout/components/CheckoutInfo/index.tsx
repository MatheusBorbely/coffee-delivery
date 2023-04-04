import { useContext } from 'react';
import { MapPinLine } from 'phosphor-react';

import { UserContext } from '../../../../contexts/UserContext';
import { UserContextType } from '../../../../interfaces/User';
import { CheckoutInfoContainer, InputContainer } from "./styles";

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
                        value={user?.cep}
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        type='text'
                        placeholder='Rua'
                        name='Rua'
                        value={user?.rua} 
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='number' 
                        placeholder='Número'
                        name='Numero'
                        value={user?.numero}
                    />
                    <input
                        type='text'
                        placeholder='Complemento'
                        name='Complemento'
                        value={user?.complemento}
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='text'
                        placeholder='Bairro'
                        name='Bairro'
                        value={user?.bairro}
                    />
                    <input 
                        style={{ maxWidth: "min(276px, 100%)" }} 
                        type='text' 
                        placeholder='Cidade'
                        name='Cidade'
                        value={user?.cidade} 
                    />
                    <input 
                        style={{ maxWidth: "min(60px, 100%)" }} 
                        type='text'
                        placeholder='UF'
                        value={user?.uf} 
                    />
                </InputContainer>
            </form>
        </CheckoutInfoContainer>
    )
}
