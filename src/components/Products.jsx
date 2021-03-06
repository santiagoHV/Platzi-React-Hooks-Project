import React, {useContext} from "react";
import Product from "../components/Product";
import AppContext from "../context/AppContext";

import '../styles/components/Products.css';

const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => {
        addToCart(product);
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => (
                        <Product 
                            key={Product.id} 
                            product={product} 
                            handleAddToCart={handleAddToCart}/>
                        ))
                }
            </div>
        </div>
    )
}

export default Products;