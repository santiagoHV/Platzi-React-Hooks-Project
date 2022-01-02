import React, {useRef, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import '../styles/components/Information.css';


const Information = () => {
    const history = useHistory();
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const cart = state.cart;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            apto: formData.get('apto'),
            city: formData.get('city'),
            country: formData.get('country'),
            state: formData.get('state'),
            cp: formData.get('cp'),
        }
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }        

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input 
                            type="text" 
                            placeholder="Nombre completo"
                            name="name" />
                        <input 
                            type="text" 
                            placeholder="Correo electrónico"
                            name="email" />
                        <input 
                            type="text" 
                            placeholder="Dirección"
                            name="address" />
                        <input 
                            type="text" 
                            placeholder="Apto, Casa, Oficina"
                            name="apto" />
                        <input 
                            type="text" 
                            placeholder="Ciudad"
                            name="city" />
                        <input 
                            type="text" 
                            placeholder="Pais"
                            name="country" />
                        <input 
                            type="text" 
                            placeholder="Estado o departamento"
                            name="state" />
                        <input 
                            type="text" 
                            placeholder="Código postal"
                            name="cp" />
                        <input 
                            type="text" 
                            placeholder="Teléfono"
                            name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to='/checkout'>
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                {cart.map(item => (
                    <div className="Information-item">
                    <div className="Information-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>      
                    </div>
                </div>
                ))}
                <h3>Pedido:</h3>
                
            </div>
        </div>
    );
};

export default Information;