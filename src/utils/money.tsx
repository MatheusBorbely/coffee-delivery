export const floatToMoney = (float: number) => {
    return float.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}