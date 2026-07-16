
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/admin.css"> */}
import "./css/common.css"
import "./css/admin.css"
import { Link } from "react-router-dom";


function Admin_dashboard(){
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
    <div className="nav-foot"><Link to="/">🚪 Logout</Link></div>
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
          <div><p className="muted">Total Orders</p><h2>245</h2></div>
        </div>
        <div className="stat-card ticket rise rise-2">
          <span className="stat-icon icon-green">💰</span>
          <div><p className="muted">Total Revenue</p><h2>Rs. 45,320</h2></div>
        </div>
        <div className="stat-card ticket rise rise-3">
          <span className="stat-icon icon-purple">🍕</span>
          <div><p className="muted">Total Foods</p><h2>78</h2></div>
        </div>
        <div className="stat-card ticket rise rise-4">
          <span className="stat-icon icon-blue">👥</span>
          <div><p className="muted">Total Users</p><h2>1,250</h2></div>
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
            <tr>
              <td className="mono">#ORD12345</td><td>Ahmad Ali</td><td className="price">Rs. 2200</td>
              <td><span className="badge badge-orange">Out for Delivery</span></td><td className="muted">20 May, 11:10 AM</td>
            </tr>
            <tr>
              <td className="mono">#ORD12344</td><td>Hassan Raza</td><td className="price">Rs. 1800</td>
              <td><span className="badge badge-yellow">Preparing</span></td><td className="muted">20 May, 10:45 AM</td>
            </tr>
            <tr>
              <td className="mono">#ORD12343</td><td>Usman Khan</td><td className="price">Rs. 950</td>
              <td><span className="badge badge-purple">Confirmed</span></td><td className="muted">20 May, 10:30 AM</td>
            </tr>
            <tr>
              <td className="mono">#ORD12342</td><td>Ali Hamza</td><td className="price">Rs. 1500</td>
              <td><span className="badge badge-green">Delivered</span></td><td className="muted">19 May, 09:15 PM</td>
            </tr>
            <tr>
              <td className="mono">#ORD12341</td><td>Zain Ul Abdin</td><td className="price">Rs. 1200</td>
              <td><span className="badge badge-red">Cancelled</span></td><td className="muted">19 May, 08:30 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )}
  export default Admin_dashboard;

