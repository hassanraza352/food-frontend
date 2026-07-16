
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/cart.css">
<link rel="stylesheet" to="css/checkout.css"> */}
import "./css/common.css"
import "./css/cart.css"
import "./css/checkout.css"
import { Link } from "react-router-dom";

function Checkout(){
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
          <Link to="#" className="link-orange small-link">Change</Link>
        </div>
        <div className="address-box">
          <span className="addr-icon">🏠</span>
          <div>
            <strong>Home</strong>
            <p className="muted">123 Model Town, Lahore, Pakistan</p>
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

      <Link to="/user/order-tracking" className="btn btn-primary btn-block btn-cta">Place Order</Link>
    </div>
  </div>
</div>

)}
export default Checkout;

