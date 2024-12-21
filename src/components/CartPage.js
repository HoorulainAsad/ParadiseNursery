import React from 'react';
import './styles.css';


const CartPage = ({ cart, updateCart, removeFromCart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">

<h3>Total: ${totalAmount}</h3>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name}  width={270} height={220}/>
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div>
                <button style={{backgroundColor: 'grey', borderRadius: 4}} onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button  style={{backgroundColor: 'grey', borderRadius: 4}} onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>

           
          </div>
        ))
      )}
      <button style={{borderRadius: 4, marginTop: 10}}>Checkout</button>
      <br/>
      <br/>
      <button  style={{borderRadius: 4}}>Continue Shopping </button>
    </div>
  );
};

export default CartPage;
