
{/* <link rel="stylesheet" tof="css/common.css">
<link rel="stylesheet" tof="css/food-listing.css"> */}
import "./css/common.css"
import "./css/food-listing.css"
import { Link } from "react-router-dom";

function Food_listing(){
  return(
<div className="layout-with-side">
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> FeastFlow</div>
    <nav className="nav-group">
      <Link to="/user/home">🏠 Home</Link>
      <Link to="/user/food-listing" className="active">📂 Categories</Link>
      <Link to="/user/my-orders">🧾 Orders</Link>
      <Link to="#">❤️ Favorites</Link>
      <Link to="#">👤 Profile</Link>
    </nav>
    <div className="nav-foot"><Link tof="/">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main">
    <header className="topbar">
      <Link to="/user/home" className="icon-btn">←</Link>
      <div className="search-box">🔍 <span>Search for food, restaurants...</span></div>
      <div className="topbar-icons">
        <Link to="/user/cart" className="icon-btn">🛒 <span className="dot">2</span></Link>
        <Link to="#" className="avatar">A</Link>
      </div>
    </header>

    <main className="app-shell">
      <div className="section-head rise">
        <h2>All Foods</h2>
        <div className="flex gap-12">
          <button className="btn btn-outline btn-sm">⇅ Sort</button>
          <button className="btn btn-outline btn-sm">▤ Filter</button>
        </div>
      </div>

      <div className="food-list">
        <Link to="/user/food-details" className="food-row ticket lift rise rise-1">
          <div className="food-thumb grad-1">🍕</div>
          <div className="food-meta">
            <h3>Cheese Pizza</h3>
            <p className="muted">Pizza Palace</p>
          </div>
          <div className="food-price">
            <span className="price">Rs. 1200</span>
          </div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>

        <Link to="/user/food-details" className="food-row ticket lift rise rise-2">
          <div className="food-thumb grad-2">🍔</div>
          <div className="food-meta">
            <h3>Zinger Burger</h3>
            <p className="muted">Burger King</p>
          </div>
          <div className="food-price"><span className="price">Rs. 650</span></div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>

        <Link to="/user/food-details" className="food-row ticket lift rise rise-3">
          <div className="food-thumb grad-3">🥪</div>
          <div className="food-meta">
            <h3>Chicken Sandwich</h3>
            <p className="muted">Foodies Hub</p>
          </div>
          <div className="food-price"><span className="price">Rs. 550</span></div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>

        <Link to="/user/food-details" className="food-row ticket lift rise rise-4">
          <div className="food-thumb grad-4">🍟</div>
          <div className="food-meta">
            <h3>French Fries</h3>
            <p className="muted">Tasty Bites</p>
          </div>
          <div className="food-price"><span className="price">Rs. 320</span></div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>

        <Link to="/user/food-details" className="food-row ticket lift rise rise-5">
          <div className="food-thumb grad-5">🥤</div>
          <div className="food-meta">
            <h3>Coke (1.5L)</h3>
            <p className="muted">Drinks Point</p>
          </div>
          <div className="food-price"><span className="price">Rs. 250</span></div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>
      </div>
    </main>
  </div>
</div>
  )}
  export default Food_listing;

