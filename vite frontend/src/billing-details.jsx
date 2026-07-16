
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/cart.css">
<link rel="stylesheet" to="css/billing-details.css"> */}
import "./css/common.css"
import "./css/cart.css"
import "./css/billing-details.css"
import { Link } from "react-router-dom";

function Billing_details(){
  return(
<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/my-orders" className="icon-btn">←</Link>
      <h1>Order Details</h1>
      <span style={{width:"40px"}}></span>
    </div>

    <div className="panel-body">
      <div className="receipt-head">
        <div className="flex justify-between">
          <span className="muted">Order ID</span>
          <span className="mono">#ORD12345</span>
        </div>
        <div className="flex justify-between mt-8">
          <span className="muted">Ordered on</span>
          <span>20 May, 2024 at 10:30 AM</span>
        </div>
        <div className="flex justify-between mt-8">
          <span className="muted">Payment Method</span>
          <span className="badge badge-green">💵 Cash on Delivery</span>
        </div>
        <div className="flex justify-between mt-8">
          <span className="muted">Address</span>
          <span>123 Model Town, Lahore</span>
        </div>
      </div>

      <hr className="divider"/>

      <label className="block-label">Items</label>
      <div className="receipt-items">
        <div className="receipt-item">
          <span>Cheese Pizza (Large) <span className="muted">x1</span></span>
          <span className="price">Rs. 1200</span>
        </div>
        <div className="receipt-item">
          <span>Zinger Burger <span className="muted">x1</span></span>
          <span className="price">Rs. 650</span>
        </div>
        <div className="receipt-item">
          <span>Coke (1.5L) <span className="muted">x1</span></span>
          <span className="price">Rs. 250</span>
        </div>
      </div>

      <div className="summary-box">
        <div className="summary-row"><span className="muted">Subtotal</span><span className="price">Rs. 2100</span></div>
        <div className="summary-row"><span className="muted">Delivery Fee</span><span className="price">Rs. 100</span></div>
        <hr className="divider"/>
        <div className="summary-row total"><span>Total</span><span className="price">Rs. 2200</span></div>
      </div>

      <Link to="/user/order-tracking" className="btn btn-outline btn-block">Track this Order</Link>
    </div>
  </div>
</div>
)}

export default Billing_details;