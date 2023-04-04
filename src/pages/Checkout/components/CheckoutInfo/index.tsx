import { useContext, useState, ChangeEvent, useRef, useEffect } from 'react';
import { MapPinLine } from 'phosphor-react';
import InputMask from 'react-input-mask';

import { UserContext } from '../../../../contexts/UserContext';
import { UserContextType, User } from '../../../../interfaces/User';
import { CheckoutInfoContainer, InputContainer } from "./styles";
import api from '../../../../services/api';
import { Routes } from '../../../../utils/routes.enum';


export function CheckoutInfo() {
    const {user, setNewUser} = useContext<UserContextType>(UserContext);
    const [cep, setCep] = useState(user?.cep || '');
    const [numero, setNumero] = useState(user?.numero);
    const [complemento, setComplemento] = useState(user?.complemento);

    const isCepValid = cep && /^[0-9]{5}-[0-9]{3}$/.test(cep);

    useEffect(() => {
        if (isCepValid) {
            fetchAddressData();
        }
    }, [cep]);

    async function fetchAddressData() {
        try {
            const response = await api.get(`${Routes.VIA_CEP}/${cep}/json/`);
            const newUser: User = {
                cep,
                rua: response.data.logradouro,
                numero,
                complemento,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                uf: response.data.uf,
            };
            setNewUser(newUser);
        } catch (error) {
            console.error("ops! Não foi possível buscar o cep" + error);
        }
    }
    
   /* function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const newUser: User = {
            ...user,
            [name]: value ?
        }
        setNewUser(newUser)
    } */
      
      
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
                    <InputMask
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='text'
                        placeholder='CEP'
                        name='CEP'
                        value={cep}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setCep(event.target.value)}
                        onBlur={fetchAddressData}
                        mask="99999-999"
                        
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        type='text'
                        placeholder='Rua'
                        name='Rua'
                        value={user?.rua} 
                        readOnly
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='number' 
                        placeholder='Número'
                        name='Numero'
                        value={numero}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setNumero(Number(event.target.value))}
                        onBlur={fetchAddressData}

                    />
                    <input
                        type='text'
                        placeholder='Complemento'
                        name='Complemento'
                        value={complemento}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setComplemento(event.target.value)}
                        onBlur={fetchAddressData}
                    />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type='text'
                        placeholder='Bairro'
                        name='Bairro'
                        value={user?.bairro}
                        readOnly
                    />
                    <input 
                        style={{ maxWidth: "min(276px, 100%)" }} 
                        type='text' 
                        placeholder='Cidade'
                        name='Cidade'
                        value={user?.cidade} 
                        readOnly
                    />
                    <input 
                        style={{ maxWidth: "min(60px, 100%)" }} 
                        type='text'
                        placeholder='UF'
                        value={user?.uf}
                        readOnly
                    />
                </InputContainer>
            </form>
        </CheckoutInfoContainer>
    )
}
