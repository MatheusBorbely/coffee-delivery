import { useEffect, useState } from "react";

import api from '../../services/api';
import { Product } from "../../interfaces/Product";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import {ProductContainer, ProductGridContainer } from "./styles"

interface IProductData{
    data: Product[]
}
export default function Home() {
    const [products, setProducts ]= useState<IProductData | null>(null)

    useEffect(() => {
        api
          .get("public/products.json")
          .then((response) => setProducts(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);
    
    const productsCards = products ? products.data.map((product: Product) => (<Card {...product}/>)) : <></>
    return (
        <main>
            <Banner />
            <ProductContainer>
                <h2>Nossos cafés</h2>
                <ProductGridContainer>
                    {productsCards}
                </ProductGridContainer>
            </ProductContainer>
        </main> 
    )
}
