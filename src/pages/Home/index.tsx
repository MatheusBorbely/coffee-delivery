import { useEffect } from "react";


import { Banner } from "./components/Banner";
import {ProductsGroup} from "./styles"

export default function Home() {
    

    return (
        <main>
            <Banner />
            <ProductsGroup>
                <h2>Nossos cafés</h2>
            </ProductsGroup>
        </main> 
    )
}
