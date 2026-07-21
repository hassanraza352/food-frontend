
  {/* <link rel="stylesheet" to="css/common.css">
  <link rel="stylesheet" to="css/admin.css"> */}
  import "./css/common.css"
  import "./css/admin.css"
  import { Link } from "react-router-dom";
  import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




  function Admin_dashboard(){
      const navigate = useNavigate();
    const [dashboard, setDashboard] = useState({
  totalOrders: 0,
  totalRevenue: 0,
  totalFoods: 0,
  totalUsers: 0,
  recentOrders: []
});

const getDashboard = async () => {
  try {

  const response = await axios.get(
  "http://localhost:3000/api/admin/dashboard",{
    withCredentials: true
  }
);
    console.log(response.data);

    setDashboard(response.data);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {
  getDashboard();
}, []);

const logout = async () => {
  await axios.post(
    "http://localhost:3000/api/logout",
    {},
    {
      withCredentials: true,
    }
  );

  navigate("/");
};
    return(
  <div className="layout-with-side">
    <aside className="sidenav">
      <div className="brand"><span className="brand-mark">🍔</span> Food Admin</div>
      <nav className="nav-group">
        <Link to="/admin/dashboard" className="active">📊 Dashboard</Link>
        <Link to="/admin/add-food">🍕 Foods</Link>
        <Link to="/admin/manage-orders">🧾 Orders</Link>
        <Link to="#">👥 Users</Link>
        <Link to="/Admin/manage-food">📂 Food added List</Link>
        <Link to="#">⚙️ Settings</Link>
      </nav>
      <div className="nav-foot"><buttton onClick={logout}>🚪 Logout</buttton></div>
    </aside>

    <div className="layout-main admin-main">
      <header className="admin-topbar">
        <h1>Dashboard</h1>
        <Link to="#" className="avatar">A</Link>
      </header>

      <main className="app-shell">
        <div className="stat-grid">
          <div className="stat-card ticket rise rise-1">
            <span className="stat-icon icon-orange">🧾</span>
            <div><p className="muted">Total Orders</p><h2>{dashboard.totalOrders}</h2></div>
          </div>
          <div className="stat-card ticket rise rise-2">
            <span className="stat-icon icon-green">💰</span>
            <div><p className="muted">Total Revenue</p><h2>Rs. {dashboard.totalRevenue}</h2></div>
          </div>
          <div className="stat-card ticket rise rise-3">
            <span className="stat-icon icon-purple">🍕</span>
            <div><p className="muted">Total Foods</p><h2>{dashboard.totalFoods}</h2></div>
          </div>
          <div className="stat-card ticket rise rise-4">
            <span className="stat-icon icon-blue">👥</span>
            <div><p className="muted">Total Users</p><h2>{dashboard.totalUsers}</h2></div>
          </div>
        </div>

        <div className="section-head rise">
          <h2>Recent Orders</h2>
          <Link to="/admin/manage-orders">View All Orders</Link>
        </div>

        <div className="table-card rise">
          <table>
            <thead>
              <tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr>
            </thead>
          <tbody>
  {dashboard.recentOrders.map((order) => (
    <tr key={order._id}>
      <td className="mono">#{order._id}</td>

      <td>{order.customer?.name || "Unknown User"}</td>

      <td className="price">
        Rs. {order.totalAmount}
      </td>

      <td>
        <span className="badge badge-orange">
          {order.status}
        </span>
      </td>

      <td>
        {order.createdAt
          ? order.createdAt.split("T")[0]
          : "N/A"}
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
    )}
    export default Admin_dashboard;

