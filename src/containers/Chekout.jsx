import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => {
        removeFromCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        return cart.reduce(reducer, 0);
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? (<h3>Lista de Pedidos:</h3>) : (<h3>No hay productos en el carrito</h3>)}

                {cart.map(item => (
                    <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                    <button type="button" onClick={() => handleRemove(item)}>
                        <i className="fas fa-trash-alt"/>
                    </button>
                </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                <h3>Precio Total: ${handleSumTotal()}</h3>
                <Link to='/checkout/information'>
                    <button type="button">Continuar pedido</button>
                </Link>
            </div>
            )}   
        </div>
    );
};

export default Checkout;