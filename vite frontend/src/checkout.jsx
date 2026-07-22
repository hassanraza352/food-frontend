import "./css/common.css"
import "./css/cart.css"
import "./css/checkout.css"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout(){
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("https://food-shop-backend-production-5a9f.up.railway.app/api/cart", {
        withCredentials: true
    })
    .then((response) => {

        console.log(response.data);

        setCartItems(response.data.cart);

    })
    .catch((error) => {

        console.log(error);

    });

}, []);

  const [phone, setPhone] = useState("");

const [address, setAddress] = useState("");



const placeOrder = () => {

    axios.post(
        "https://food-shop-backend-production-5a9f.up.railway.app/api/orders",
        {
            phone,
            address
        },
        {
            withCredentials: true
        }
    )
    .then((response) => {

        alert(response.data.message);

        navigate("/user/my-orders");

    })
    .catch((error) => {

        console.log(error);

        alert("Order Failed");

    });

  }
   
   const subtotal = cartItems.reduce((total, item) => {
    return total + (item.food.price * item.quantity);
}, 0);
const deliveryFee = 100;

const total = subtotal + deliveryFee;
  return(

<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/cart" className="icon-btn">←</Link>
      <h1>Checkout</h1>
      <span style={{width:"40px"}}></span>
    </div>

    <div className="panel-body">
      <div>
  <div className="flex justify-between items-center">
    <label className="block-label">Delivery Address</label>
  </div>

  <div className="address-box">
    <span className="addr-icon">🏠</span>

    <div className="address-content">
      <strong>Address</strong>

      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your delivery address"
      />
    </div>
  </div>
</div>

<div>
  <div className="flex justify-between items-center">
    <label className="block-label">Phone No.</label>
  </div>

  <div className="address-box">
    <span className="addr-icon">📞</span>

    <div className="address-content">
      <strong>Phone Number</strong>

      <input
        type="text"
        placeholder="03XXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  </div>
</div>

      <div>
        <label className="block-label">Payment Method</label>
        <label className="pay-option selected">
          <input type="radio" name="pay"  checked={true}
  readOnly/>
          <span>Cash on Delivery</span>
        </label>
        <label className="pay-option">
          <input type="radio" name="pay"/>
          <span>Online Payment</span>
        </label>
      </div>

      <div className="summary-box">
        <div className="summary-row"><span className="muted">Subtotal</span><span className="price">Rs. {subtotal}</span></div>
        <div className="summary-row"><span className="muted">Delivery Fee</span><span className="price">Rs.{cartItems.length > 0 ? deliveryFee : 0} </span></div>
        <hr className="divider"/>
        <div className="summary-row total"><span>Total</span><span className="price">Rs. {cartItems.length > 0 ? total : 0}</span></div>
      </div>

      <button to="/user/order-tracking" className="btn btn-primary btn-block btn-cta" onClick={placeOrder}>Place Order</button>
    </div>
  </div>
</div>

)}
export default Checkout;

