import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import { PayPalButton } from "react-paypal-button";
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer }= state;
    const history = useHistory();

    const paypalOptions = {
        clientId: 'Af_jUBe6z2qRrZhEp1AjJbVP4xyaRs7pDfz7kdM1Q5GFFi_Q8tqSIK9MHAJevpl-KH6Kx0-PJr-W-s7q',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layaout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSuccess = data => {
        console.log(data)
        if(data.status === 'COMPLETE'){
            const newOrder = {
                buyer: buyer,
                products: cart,
            }
            addNewOrder(newOrder);  
        }
        history.push('/checkout/success');
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        return cart.reduce(reducer, 0);
    }


    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Payment started')}
                        onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                        onPaymentError={(error) => console.log(error)}
                        onPaymentCancel={() => console.log('Payment cancelled')}
                        />
                </div>
            </div>
        </div>
    );
};

export default Payment;