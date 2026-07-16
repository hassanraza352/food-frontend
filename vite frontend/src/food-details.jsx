
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/food-details.css"> */}

import "./css/common.css"
import "./css/food-details.css"
import { Link } from "react-router-dom";


function Food_details(){
  return(
<div className="center-shell details-shell">
  <div className="details-card rise">
    <div className="details-topbar">
      <Link to="/user/food-listing" className="icon-btn">←</Link>
      <span className="icon-btn">🤍</span>
    </div>

    <div className="details-hero grad-1">🍕</div>

    <div className="details-body">
      <h1>Cheese Pizza</h1>
      <p className="muted">Pizza Palace</p>
      <p className="muted">⭐ 4.5 (230 reviews)</p>

      <div className="details-price price">Rs. 1200</div>

      <p className="details-desc">Delicious cheese pizza with fresh ingredients and special pizza sauce, baked to a golden crust and served hot.</p>

      <div className="field">
        <label>Size</label>
        <div className="option-row">
          <span className="option-pill">Small</span>
          <span className="option-pill">Medium</span>
          <span className="option-pill active">Large</span>
        </div>
      </div>

      <div className="field">
        <label>Quantity</label>
        <div className="qty-row">
          <span className="qty-btn">−</span>
          <span className="qty-val">1</span>
          <span className="qty-btn">+</span>
        </div>
      </div>

      <Link to="/user/cart" className="btn btn-primary btn-block btn-cta">🛒 Add to Cart</Link>
    </div>
  </div>
</div>
)}

export default Food_details;