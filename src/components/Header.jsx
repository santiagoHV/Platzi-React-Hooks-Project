import React, {useContext} from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import '../styles/components/Header.css';

const Header = () => {
    const { state } = useContext(AppContext);
    const cart = state.cart;
    return (
        <div className="Header">
            <Link to='/'>
                <h1 className="Header-title">PlatziConf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to='/Checkout'>
                    <i className='fas fa-shopping-basket'/>
                </Link>
                {cart.length > 0 && (
                    <div className="Header-alert">
                        {cart.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;