
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/cart.css">
<link rel="stylesheet" href="css/my-orders.css"> */}

import "./css/common.css"
import "./css/cart.css"
import "./css/my-orders.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function My_orders(){
  const [orders, setOrders] = useState([]);
  useEffect(() => {

    axios.get(
        "https://food-shop-backend-production-5a9f.up.railway.app/api/my-orders",
        {
            withCredentials: true
        }
    )
    .then((response) => {

        console.log(response.data);

        setOrders(response.data.orders);

    })
    .catch((error) => {

        console.log(error);

    });

}, []);
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
        {
          orders.map((order) => (
            <Link key={order._id} to={`/user/order-tracking/${order._id}`} className="order-row ticket lift rise rise-1">
            <div>
            <h3>Order #{order._id}</h3>
            <p className="muted">{order.createdAt.split("T")[0]}</p>
          </div>
          <span className="price">Rs. {order.totalAmount}</span>
          <span className="badge badge-orange">{order.status}</span>
        </Link>
          ))
        }
      </div>
    </main>
  </div>
</div>
  )}
  export default My_orders;


