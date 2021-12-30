import React from "react";
import Product from "../components/Product";

import '../styles/components/Products.css';

const Products = ({ products, children }) => {
    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => (
                        <Product key={Product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default Products;