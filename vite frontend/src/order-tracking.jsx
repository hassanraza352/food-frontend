
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/cart.css">
<link rel="stylesheet" href="css/order-tracking.css"> */}

import "./css/common.css"
import "./css/cart.css"
import "./css/order-tracking.css"
import { Link } from "react-router-dom";

function Order_tracking(){
  return(
<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/home" className="icon-btn">←</Link>
      <h1>Order #ORD12345</h1>
      <span className="badge badge-orange">Out for Delivery</span>
    </div>

    <div className="panel-body">
      <ul className="timeline">
        <li className="done">
          <span className="tl-dot">✓</span>
          <div><strong>Order Placed</strong><p className="muted">20 May, 10:30 AM</p></div>
        </li>
        <li className="done">
          <span className="tl-dot">✓</span>
          <div><strong>Confirmed</strong><p className="muted">20 May, 10:32 AM</p></div>
        </li>
        <li className="done">
          <span className="tl-dot">✓</span>
          <div><strong>Preparing</strong><p className="muted">20 May, 10:40 AM</p></div>
        </li>
        <li className="current">
          <span className="tl-dot pulse">🛵</span>
          <div><strong>Out for Delivery</strong><p className="muted">20 May, 11:10 AM</p></div>
        </li>
        <li className="pending">
          <span className="tl-dot">○</span>
          <div><strong>Delivered</strong><p className="muted">Pending</p></div>
        </li>
      </ul>

      <Link to="/user/my-orders" className="btn btn-outline btn-block">View Order Details</Link>
    </div>
  </div>
</div>
  )}
  export default Order_tracking;


