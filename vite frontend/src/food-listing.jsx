import "./css/common.css"
import "./css/food-listing.css"
import "./css/home.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function Food_listing(){
const [foods, setFoods] = useState([]); 
const [search, setSearch] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("All");
 const [sortOrder, setSortOrder] = useState("");
 useEffect(() => {
     axios.get("http://localhost:3000/api/foods",{
        withCredentials: true
     })
        .then((response) => {
           setFoods(response.data.foods);
        })
        .catch((error) => {

            console.log(error);

        });
}, []);

 const filteredFoods = foods.filter((food) => {
  const matchSearch =
      food.foodName.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
      selectedCategory === "All" ||
      food.category === selectedCategory;

  return matchSearch && matchCategory;
});

const sortedFoods = [...filteredFoods];

if (sortOrder === "lowToHigh") {
  sortedFoods.sort((a, b) => a.price - b.price);
}

if (sortOrder === "highToLow") {
  sortedFoods.sort((a, b) => b.price - a.price);
}
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
    <div className="nav-foot"><Link to="/">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main">
    <header className="topbar">
      <Link to="/user/home" className="icon-btn">←</Link>
       <div className="search-box">🔍 
        <input className="search-input"
    type="text"
    placeholder="Search fast foods..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
      </div>
      <div className="topbar-icons">
        <Link to="/user/cart" className="icon-btn">🛒 <span className="dot">{foods.length}</span></Link>
        <Link to="#" className="avatar">A</Link>
      </div>
    </header>

    <main className="app-shell">
      <div className="section-head rise">
        <h2>All  availabe Foods</h2>
        <div className="flex gap-12">
<select
  className="btn btn-outline btn-sm"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
>
  <option value="">Sort By</option>
  <option value="lowToHigh">Price: Low → High</option>
  <option value="highToLow">Price: High → Low</option>
</select>      
  </div>
      </div>
      <div className="section-head rise rise-1">
        <h2>Categories</h2>

      </div>
      <div className="cat-row">
        <Link  className="cat-pill active rise rise-1" onClick={() => setSelectedCategory("All")}><span className="cat-icon">🍽️</span>All</Link>
        <Link  className="cat-pill rise rise-2"onClick={() => setSelectedCategory("Pizza")}><span className="cat-icon" >🍕</span>Pizza</Link>
        <Link  className="cat-pill rise rise-3"onClick={() => setSelectedCategory("Burger")}><span className="cat-icon">🍔</span>Burger</Link>
        <Link  className="cat-pill rise rise-4"onClick={() => setSelectedCategory("Sandwich")}><span className="cat-icon">🥪</span>Sandwich</Link>
        <Link  className="cat-pill rise rise-5"onClick={() => setSelectedCategory("Drinks")}><span className="cat-icon">🥤</span>Drinks</Link>
        <Link  className="cat-pill rise rise-6"onClick={() => setSelectedCategory("Dessert")}><span className="cat-icon">🍰</span>Dessert</Link>
      </div> 

      <div className="food-list">
        {
          sortedFoods.map((food) => (
 <Link to={`/user/food-details/${food._id}`} className="food-row ticket lift rise rise-1"
     key={food._id}
 >
          <div className="food-thumb grad-1"><img
  src={`http://localhost:3000/${food.image}`}

/></div>
          <div className="food-meta">
            <h3>{food.foodName}</h3>
            <p className="muted">{food.category}</p>
          </div>
          <div className="food-price">
            <span className="price">RS.{food.price}</span>
          </div>
          <span className="btn btn-primary btn-sm add-btn">+ Add</span>
        </Link>
          ))
        }
       


   
      </div>
    </main>
  </div>
</div>
  )}
  export default Food_listing;

