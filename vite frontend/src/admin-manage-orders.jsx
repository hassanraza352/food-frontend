
import "./css/common.css"
import "./css/admin.css"
import { Link } from "react-router-dom";



function Admin_manage_orders(){
 
 
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
          <select><option>All Status</option><option>Confirmed</option><option>Preparing</option><option>Out for Delivery</option><option>Delivered</option><option>Cancelled</option></select>
          <select><option>Date</option><option>Today</option><option>This Week</option><option>This Month</option></select>
        </div>
      </div>

      <div className="table-card rise">
        <table>
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">#ORD12345</td><td>Ahmad Ali</td><td className="muted">3 items</td><td className="price">Rs. 2200</td>
              <td><span className="badge badge-orange">Out for Delivery</span></td>
              <td><Link to="/user/billing-details" className="action-link">View</Link></td>
            </tr>
            <tr>
              <td className="mono">#ORD12344</td><td>Hassan Raza</td><td className="muted">2 items</td><td className="price">Rs. 1800</td>
              <td><span className="badge badge-yellow">Preparing</span></td>
              <td><Link to="/user/billing-details" className="action-link">View</Link></td>
            </tr>
            <tr>
              <td className="mono">#ORD12343</td><td>Usman Khan</td><td className="muted">1 item</td><td className="price">Rs. 950</td>
              <td><span className="badge badge-purple">Confirmed</span></td>
              <td><Link to="/user/billing-details.html" className="action-link">View</Link></td>
            </tr>
            <tr>
              <td className="mono">#ORD12342</td><td>Ali Hamza</td><td className="muted">2 items</td><td className="price">Rs. 1500</td>
              <td><span className="badge badge-green">Delivered</span></td>
              <td><Link to="/user/billing-details.html" className="action-link">View</Link></td>
            </tr>
            <tr>
              <td className="mono">#ORD12341</td><td>Zain Ul Abdin</td><td className="muted">1 item</td><td className="price">Rs. 1200</td>
              <td><span className="badge badge-red">Cancelled</span></td>
              <td><Link to="/user/billing-details.html" className="action-link">View</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )
  }
  export default Admin_manage_orders;
  
