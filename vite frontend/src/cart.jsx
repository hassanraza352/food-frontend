
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/cart.css"> */}
import "./css/common.css"
import "./css/cart.css"
import { Link } from "react-router-dom";

function Cart(){
  return(
<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/home" className="icon-btn">←</Link>
      <h1>My Cart</h1>
      <span style={{width:"40px"}}></span>
    </div>

    <div className="panel-body">
      <div className="cart-item ticket">
        <div className="food-thumb grad-1">🍕</div>
        <div className="food-meta">
          <h3>Cheese Pizza</h3>
          <p className="muted">Large</p>
          <span className="price">Rs. 1200</span>
        </div>
        <div className="qty-row">
          <span className="qty-btn">−</span>
          <span className="qty-val">1</span>
          <span className="qty-btn">+</span>
        </div>
        <span className="del-btn">🗑️</span>
      </div>

      <div className="cart-item ticket">
        <div className="food-thumb grad-2">🍔</div>
        <div className="food-meta">
          <h3>Zinger Burger</h3>
          <p className="muted">Regular</p>
          <span className="price">Rs. 650</span>
        </div>
        <div className="qty-row">
          <span className="qty-btn">−</span>
          <span className="qty-val">1</span>
          <span className="qty-btn">+</span>
        </div>
        <span className="del-btn">🗑️</span>
      </div>

      <div className="cart-item ticket">
        <div className="food-thumb grad-5">🥤</div>
        <div className="food-meta">
          <h3>Coke (1.5L)</h3>
          <p className="muted">Regular</p>
          <span className="price">Rs. 250</span>
        </div>
        <div className="qty-row">
          <span className="qty-btn">−</span>
          <span className="qty-val">1</span>
          <span className="qty-btn">+</span>
        </div>
        <span className="del-btn">🗑️</span>
      </div>

      <div className="summary-box">
        <div className="summary-row"><span className="muted">Subtotal</span><span className="price">Rs. 2100</span></div>
        <div className="summary-row"><span className="muted">Delivery Fee</span><span className="price">Rs. 100</span></div>
        <hr className="divider"/>
        <div className="summary-row total"><span>Total</span><span className="price">Rs. 2200</span></div>
      </div>

      <Link to="/user/checkout" className="btn btn-primary btn-block btn-cta">Proceed to Checkout</Link>
    </div>
  </div>
</div>
)}
export default Cart;

