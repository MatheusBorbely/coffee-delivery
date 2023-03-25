import { useEffect, useState } from "react";

import api from '../../services/api';
import { Product } from "../../interfaces/Product";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import {ProductContainer, ProductGridContainer } from "./styles"

export default function Home() {
    const [products, setProducts ]= useState<Product[] | null>(null)

    useEffect(() => {
        api
          .get("public/products.json")
          .then((response) => setProducts(response.data.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);
    
    const productsCards = products ? products.map((product: Product) => (<Card key={product.id} {...product}/>)) : <></>
    
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
