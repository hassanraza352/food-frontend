
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/cart.css">
<link rel="stylesheet" href="css/my-orders.css"> */}

import "./css/common.css"
import "./css/cart.css"
import "./css/my-orders.css"
import { Link } from "react-router-dom";


function My_orders(){
  return(
<div class="layout-with-side">
  <aside class="sidenav">
    <div class="brand"><span class="brand-mark">🍔</span> FeastFlow</div>
    <nav class="nav-group">
      <Link to="/user/home">🏠 Home</Link>
      <Link to="/user/food-listing">📂 Categories</Link>
      <Link to="/user/my-orders" class="active">🧾 Orders</Link>
      <Link to="#">❤️ Favorites</Link>
      <Link to="#">👤 Profile</Link>
    </nav>
    <div class="nav-foot"><Link to="/">🚪 Logout</Link></div>
  </aside>

  <div class="layout-main">
    <main class="app-shell orders-wrap">
      <h1 class="orders-title rise">My Orders</h1>

      <div class="tabs rise rise-1">
        <span class="tab active">All</span>
        <span class="tab">Ongoing</span>
        <span class="tab">Delivered</span>
        <span class="tab">Cancelled</span>
      </div>

      <div class="orders-list">
        <Link to="/user/billing-details" class="order-row ticket lift rise rise-1">
          <div>
            <h3>Order #ORD12345</h3>
            <p class="muted">20 May, 2024</p>
          </div>
          <span class="price">Rs. 2200</span>
          <span class="badge badge-orange">Out for Delivery</span>
        </Link>

        <Link to="/user/billing-details" class="order-row ticket lift rise rise-2">
          <div>
            <h3>Order #ORD12300</h3>
            <p class="muted">20 May, 2024</p>
          </div>
          <span class="price">Rs. 1800</span>
          <span class="badge badge-green">Delivered</span>
        </Link>

        <Link to="/user/billing-details" class="order-row ticket lift rise rise-3">
          <div>
            <h3>Order #ORD12250</h3>
            <p class="muted">15 May, 2024</p>
          </div>
          <span class="price">Rs. 950</span>
          <span class="badge badge-green">Delivered</span>
        </Link>

        <Link to="/user/billing-details" class="order-row ticket lift rise rise-4">
          <div>
            <h3>Order #ORD12200</h3>
            <p class="muted">10 May, 2024</p>
          </div>
          <span class="price">Rs. 1200</span>
          <span class="badge badge-red">Cancelled</span>
        </Link>
      </div>
    </main>
  </div>
</div>
  )}
  export default My_orders;


