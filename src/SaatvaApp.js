import { useState } from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import { ProductContext } from "./context/ProductContext";

const SaatvaApp = () => {

    const [items, setItems] = useState(0);

    return (
        <ProductContext.Provider value={{ items, setItems }}>
            <Header />
            <Products />
        </ProductContext.Provider>
    );
}

export default SaatvaApp;