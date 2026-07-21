
import "./css/common.css"
import "./css/cart.css"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";


function Cart(){
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cart", {
        withCredentials: true
    })
    .then((response) => {
          console.log("axios mei")
        console.log(response.data);

        setCartItems(response.data.cart);

    })
    .catch((error) => {

        console.log(error);

    });

}, []);

const removeItem = (id) => {
axios.delete(
    `http://localhost:3000/api/cart/${id}`,
    {
        withCredentials: true
    }
)
.then(() => {
setCartItems(
    cartItems.filter(item => item._id !== id)
);
})
.catch((error) => {

    console.log(error);

});
};

const subtotal = cartItems.reduce((total, item) => {
    if (!item.food) return total;

    return total + (item.food.price * item.quantity);
}, 0);
const increaseQuantity = (item) => {

    axios.put(
        `http://localhost:3000/api/cart/${item._id}`,
        {
            quantity: item.quantity + 1
        },
        {
            withCredentials: true
        }
    )
    .then(() => {

        setCartItems(
            cartItems.map(cartItem =>
                cartItem._id === item._id
                    ? {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                    : cartItem
            )
        );

    })
    .catch(error => console.log(error));

};

const decreaseQuantity = (item) => {

    if (item.quantity === 1) return;

    axios.put(
        `http://localhost:3000/api/cart/${item._id}`,
        {
            quantity: item.quantity - 1
        },
        {
            withCredentials: true
        }
    )
    .then(() => {

        setCartItems(
            cartItems.map(cartItem =>
                cartItem._id === item._id
                    ? {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                    : cartItem
            )
        );

    })
    .catch(error => console.log(error));

};

const deliveryFee = 100;
const total = subtotal + deliveryFee;
  return(
<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/home" className="icon-btn">←</Link>
      <h1>My Cart</h1>
      <span style={{width:"40px"}}></span>
    </div>

    <div className="panel-body">
      {cartItems
  .filter(item => item.food)
  .map(item  => (
        <div className="cart-item ticket" key={item._id}>
          <div className="food-thumb grad-1"><img
  src={`http://localhost:3000/${item.food.image}`}

/></div>
        <div className="food-meta">
          <h3>{item.food.foodName}</h3>
          <p className="muted">{item.food.category}</p>
          <span className="price">Rs. {item.food.price}</span>
        </div>
        <div className="qty-row">
          <button className="qty-btn" onClick={() => decreaseQuantity(item)}
>-</button>
          <span className="qty-val">{item.quantity}</span>
          <button className="qty-btn" onClick={() => increaseQuantity(item)}>+</button>
        </div>
<button
    className="del-btn"
    onClick={() => removeItem(item._id)}
>
    🗑️
</button>      </div>
      ))}

      <div className="summary-box">
        <div className="summary-row"><span className="muted">Subtotal</span><span className="price">{subtotal}</span></div>
        <div className="summary-row"><span className="muted">Delivery Fee</span><span className="price"> Rs {cartItems.length > 0 ? deliveryFee : 0}</span></div>
        <hr className="divider"/>
        <div className="summary-row total"><span>Total</span><span className="price">{cartItems.length > 0 ? total : 0}</span></div>
      </div>

      <Link to="/user/checkout" className="btn btn-primary btn-block btn-cta">Proceed to Checkout</Link>
    </div>
  </div>
</div>
)}
export default Cart;

