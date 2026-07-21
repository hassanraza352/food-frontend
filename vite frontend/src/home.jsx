import "./css/common.css"
import "./css/home.css"
import { Link } from "react-router-dom";


function Home(){


//         food.name.toLowerCase().includes(search.toLowerCase());

//     const matchCategory =
//         selectedCategory === "All" ||
//         food.category === selectedCategory;

//     return matchSearch && matchCategory;
// });
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

      <section className="category-banner">
  <div className="category-content">
    <span className="tag">🍽️ Explore Our Menu</span>

    <h2>We Have Something crazy for Everyone</h2>

    <p>
      From cheesy pizzas and juicy burgers to refreshing drinks and delicious
      desserts, discover your favorite meal in just one click.
    </p>

    <Link to="/user/food-listing" className="category-btn">
      Explore Categories →
    </Link>
  </div>

  <div className="category-image">
    <img
      src="/images/category-banner.png"
      alt="Food Categories"
    />
  </div>
</section>

      {/* <div className="section-head rise rise-2">
        <h2>Popular Restaurants</h2>
        <Link to="/user/food-listing">View all</Link>
      </div> */}
    {/* <div className="resto-grid"> */}
        {/* <Link to="/user/food-listing" className="resto-card lift rise rise-1">
          <div className="resto-img grad-1">🍕</div>
          <div className="resto-info">
            <h3>Pizza Palace</h3>
            <p className="muted">⭐ 4.5 · 30-40 min</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link> */}
        {/* {filteredFoods.map(restaurant => (
          <Link to="/user/food-listing" className="resto-card lift rise rise-1"
           key={restaurant.id}
           >
          <div className="resto-img grad-1">img</div>
          <div className="resto-info">
            <h3>{restaurant.name}</h3>
            <p className="muted">⭐ {restaurant.rating} · {restaurant.time}</p>
            <span className="badge badge-green">Free Delivery</span>
          </div>
        </Link>
        ))} */}
        
    
      {/* </div> */}
    </main>
  </div>
</div>
)
}

export default Home;
