import "./css/common.css"
import "./css/cart.css"
import "./css/checkout.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout(){
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

const [address, setAddress] = useState("");



const placeOrder = () => {

    axios.post(
        "http://localhost:3000/api/orders",
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

};
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
          <input type="radio" name="pay" checked/>
          <span>Cash on Delivery</span>
        </label>
        <label className="pay-option">
          <input type="radio" name="pay"/>
          <span>Online Payment</span>
        </label>
      </div>

      <div className="summary-box">
        <div className="summary-row"><span className="muted">Subtotal</span><span className="price">Rs. 2100</span></div>
        <div className="summary-row"><span className="muted">Delivery Fee</span><span className="price">Rs. 100</span></div>
        <hr className="divider"/>
        <div className="summary-row total"><span>Total</span><span className="price">Rs. 2200</span></div>
      </div>

      <button to="/user/order-tracking" className="btn btn-primary btn-block btn-cta" onClick={placeOrder}>Place Order</button>
    </div>
  </div>
</div>

)}
export default Checkout;

