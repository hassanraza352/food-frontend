
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/cart.css">
<link rel="stylesheet" href="css/my-orders.css"> */}

import "./css/common.css"
import "./css/cart.css"
import "./css/my-orders.css"
import { Link } from "react-router-dom";


function My_orders(){
  return(
<div className="layout-with-side">
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> FeastFlow</div>
    <nav className="nav-group">
      <Link to="/user/home">🏠 Home</Link>
      <Link to="/user/food-listing">📂 Categories</Link>
      <Link to="/user/my-orders" className="active">🧾 Orders</Link>
      <Link to="#">❤️ Favorites</Link>
      <Link to="#">👤 Profile</Link>
    </nav>
    <div className="nav-foot"><Link to="/">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main">
    <main className="app-shell orders-wrap">
      <h1 className="orders-title rise">My Orders</h1>

      <div className="tabs rise rise-1">
        <span className="tab active">All</span>
        <span className="tab">Ongoing</span>
        <span className="tab">Delivered</span>
        <span className="tab">Cancelled</span>
      </div>

      <div className="orders-list">
        <Link to="/user/billing-details" className="order-row ticket lift rise rise-1">
          <div>
            <h3>Order #ORD12345</h3>
            <p className="muted">20 May, 2024</p>
          </div>
          <span className="price">Rs. 2200</span>
          <span className="badge badge-orange">Out for Delivery</span>
        </Link>

        <Link to="/user/billing-details" className="order-row ticket lift rise rise-2">
          <div>
            <h3>Order #ORD12300</h3>
            <p className="muted">20 May, 2024</p>
          </div>
          <span className="price">Rs. 1800</span>
          <span className="badge badge-green">Delivered</span>
        </Link>

        <Link to="/user/billing-details" className="order-row ticket lift rise rise-3">
          <div>
            <h3>Order #ORD12250</h3>
            <p className="muted">15 May, 2024</p>
          </div>
          <span className="price">Rs. 950</span>
          <span className="badge badge-green">Delivered</span>
        </Link>

        <Link to="/user/billing-details" className="order-row ticket lift rise rise-4">
          <div>
            <h3>Order #ORD12200</h3>
            <p className="muted">10 May, 2024</p>
          </div>
          <span className="price">Rs. 1200</span>
          <span className="badge badge-red">Cancelled</span>
        </Link>
      </div>
    </main>
  </div>
</div>
  )}
  export default My_orders;


