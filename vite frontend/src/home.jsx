import "./css/common.css"
import "./css/home.css"
import { Link } from "react-router-dom";


function Home(){
  return(
<div className="layout-with-side">
  {/* <!-- SIDE NAV --> */}
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> FeastFlow</div>
    <nav className="nav-group">
      <Link to="/user/home" className="active">🏠 Home</Link>
      <Link to="/user/food-listing">📂 Categories</Link>
      <Link to="/user/my-orders">🧾 Orders</Link>
      <Link to="#">❤️ Favorites</Link>
      <Link to="#">👤 Profile</Link>
    </nav>
    <div className="nav-foot">
      <Link to="/">🚪 Logout</Link>
    </div>
  </aside>

  {/* <!-- MAIN --> */}
  <div className="layout-main">
    <header className="topbar">
      <div className="location">
        <span>📍 Deliver to</span>
        <strong>Model Town, Lahore ▾</strong>
      </div>
      <div className="search-box">🔍 <span>Search for food, restaurants...</span></div>
      <div className="topbar-icons">
        <Link to="/user/cart" className="icon-btn">🛒 <span className="dot">2</span></Link>
        <Link to="#" className="icon-btn">🔔 <span className="dot">1</span></Link>
        <Link to="#" className="avatar">A</Link>
      </div>
    </header>

    <main className="app-shell">
      <section className="hero rise">
        <div className="hero-text">
          <span className="hero-eyebrow">🔥 Today's Special</span>
          <h1>Cheesy, Hot &amp;<br/>Delivered Fast</h1>
          <p>Order your favorite food from top restaurants near you.</p>
          <Link to="/user/food-listing" className="btn btn-yellow btn-cta">Order Now →</Link>
        </div>
{/* 
        <!-- HERO PHOTO SLOT
             Apni asal food photo (jaise burger/pizza shot) yahan lagayein:
             1) is div ko background-image: url('images/hero-food.jpg') dey dein, YA
             2) neeche <img> tag uncomment kr k src daal dein
             Filhaal ek placeholder rakha gaya hai jab tak asal photo add na ho. --> */}
        <div className="hero-photo">
          <img src="images/hero-food.jpg" alt="Featured meal"/> 
          <div className="hero-photo-placeholder">🍔</div>
        </div>
      </section>

      <div className="section-head rise rise-1">
        <h2>Categories</h2>
        <Link to="/user/food-listing">View all</Link>
      </div>
      <div className="cat-row">
        <Link to="/user/food-listing" className="cat-pill active rise rise-1"><span className="cat-icon">🍽️</span>All</Link>
        <Link to="/user/food-listing" className="cat-pill rise rise-2"><span className="cat-icon">🍕</span>Pizza</Link>
        <Link to="/user/food-listing" className="cat-pill rise rise-3"><span className="cat-icon">🍔</span>Burger</Link>
        <Link to="/user/food-listing" className="cat-pill rise rise-4"><span className="cat-icon">🥪</span>Sandwich</Link>
        <Link to="/user/food-listing" className="cat-pill rise rise-5"><span className="cat-icon">🥤</span>Drinks</Link>
        <Link to="/user/food-listing" className="cat-pill rise rise-6"><span className="cat-icon">🍰</span>Dessert</Link>
      </div>

      <div className="section-head rise rise-2">
        <h2>Popular Restaurants</h2>
        <Link to="/user/food-listing">View all</Link>
      </div>
      <div className="resto-grid">
        <Link to="/user/food-listing" className="resto-card lift rise rise-1">
          <div className="resto-img grad-1">🍕</div>
          <div className="resto-info">
            <h3>Pizza Palace</h3>
            <p className="muted">⭐ 4.5 · 30-40 min</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link>
        <Link to="/user/food-listing" className="resto-card lift rise rise-2">
          <div className="resto-img grad-2">🍗</div>
          <div className="resto-info">
            <h3>Burger King</h3>
            <p className="muted">⭐ 4.3 · 20-30 min</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link>
        <Link to="/user/food-listing" className="resto-card lift rise rise-3">
          <div className="resto-img grad-3">🍟</div>
          <div className="resto-info">
            <h3>Foodies Hub</h3>
            <p className="muted">⭐ 4.6 · 30-40 min</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link>
        <Link to="/user/food-listing" className="resto-card lift rise rise-4">
          <div className="resto-img grad-4">🥤</div>
          <div className="resto-info">
            <h3>Tasty Bites</h3>
            <p className="muted">⭐ 4.4 · 25-35 min</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link>
      </div>
    </main>
  </div>
</div>
)
}

export default Home;
