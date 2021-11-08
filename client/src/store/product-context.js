import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get("/products");
            setProduct(res.data);
        }
        getProducts();
        setLoading(false);
    }, [])

    return (
        <ProductContext.Provider value={{ product, loading }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;