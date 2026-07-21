
import "./css/common.css"
import "./css/admin.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



function Admin_manage_orders(){
  const [statusFilter, setStatusFilter] = useState("All");
 const [orders, setOrders] = useState([]);
 const getOrders = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/orders");

    setOrders(response.data.orders);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
  getOrders();
}, []);


const changeStatus = async (orderId, newStatus) => {

  try {

    await axios.put(
      `http://localhost:3000/api/orders/${orderId}`,
      {
        status: newStatus
      },
      {
        withCredentials: true
      }
    );

    setOrders(
      orders.map(order =>
        order._id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );

  } catch (error) {

    console.log(error);

  }

};
const filterOrders = () => {
  return orders.filter((order) => {
    return statusFilter === "All" || order.status === statusFilter;
  });
};
  const filteredOrders = filterOrders();
 
  return(
<div className="layout-with-side">
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> Food Admin</div>
    <nav className="nav-group">
      <Link to="/admin/dashboard">📊 Dashboard</Link>
      <Link to="/admin/add-food">🍕 Foods</Link>
      <Link to="/admin/manage-orders" className="active">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="/Admin/manage-food">📂 Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><Link to="/.">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Manage Orders</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <div className="section-head" style={{ marginTop: "0" }}>
        <h2>All Orders</h2>
        <div className="filters-bar">
          <select value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}>
    <option value="All" >All Status</option>
    <option value="Confirmed" >Confirmed</option>
    <option value="Preparing" >Preparing</option>
    <option value="Out for Delivery" >Out for Delivery</option>
    <option value="Delivered" >Delivered</option>
    <option value="Cancelled" >Cancelled</option></select>
        </div>
      </div>

      <div className="table-card rise">
        <table>
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {
              filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td className="mono"># {order._id}</td>
                  <td>{order.customer?.name}</td>
                  <td className="muted">{order.items.length} items</td>
                  <td className="price">Rs. {order.totalAmount}</td>  
                  <td>

  <select
    value={order.status}
    onChange={(e) =>
      changeStatus(order._id, e.target.value)
    }
    className="badge badge-orange"
  >

    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Preparing">Preparing</option>
    <option value="Out for Delivery">
      Out for Delivery
    </option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>

  </select>

</td>
                  <td>
                    <Link to={`/admin/order-tracking/${order._id}`} className="action-link">View</Link>
                  </td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )
  }
  export default Admin_manage_orders;
  
