import { useEffect, useState } from "react";

import api from '../../services/api';
import { Product } from "../../interfaces/Product";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Routes } from "../../utils/routes.enum";
import {ProductContainer, ProductGridContainer } from "./styles";

export default function Home() {
    const [products, setProducts ]= useState<Product[] | null>(null)

    useEffect(() => {
        api
          .get(Routes.JSON_URL)
          .then((response) => setProducts(response.data.data))
          .catch((err) => {
            console.error("ops! Não foi possível buscar os produtos" + err);
          });
    }, []);
    
    const productsCards = products && products.map((product: Product) => (<Card key={product.id} {...product}/>)) 
    
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
