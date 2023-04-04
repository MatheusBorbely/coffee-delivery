export interface User {
    cep: string,
    rua: string,
    numero: number,
    complemento?: string,
    bairro: string,
    cidade: string,
    uf: string;
}

export interface UserContextType {
    user: User | null;
    setNewUser: (newUser: User) => void;
}