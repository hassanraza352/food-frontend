import { Link } from "react-router-dom";
import "./css/common.css"
import "./css/admin.css"
function Admin_add_food_edit(){
return(
<div className="layout-with-side">
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> Food Admin</div>
    <nav className="nav-group">
      <Link to="/admin/dashboard">📊 Dashboard</Link>
      <Link to="/admin/add-food" className="active">🍕 Foods</Link>
      <Link to="/admin/manage-orders">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="/admin/manage-food">📂Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><Link to="/">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Edit  Food Item</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <form className="form-card rise" >
        <div className="field">
          <label htmlFor="fname">Food Name</label>
          <input type="text" id="fname" placeholder="e.g. Cheese Pizza"/>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="cat">Category</label>
            <select id="cat">
              <option>Pizza</option>
              <option>Burger</option>
              <option>Sandwich</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="price">Price (Rs.)</label>
            <input type="number" id="price" placeholder="e.g. 1200"/>
          </div>
        </div>

        <div className="field">
          <label htmlFor="desc">Description</label>
          <textarea id="desc" rows="4" placeholder="Enter food description"></textarea>
        </div>

        <div className="field">
          <label>Food Image</label>
          <div className="upload-box">
            <div className="upload-preview">🍕</div>
            <div>
              <span className="btn btn-outline btn-sm">Choose File</span>
              <p className="muted mt-8" style={{ fontSize: "0.78rem" }}>No file chosen</p>
            </div>
          </div>
        </div>

        <Link to="/admin/dashboard" className="btn btn-primary btn-block btn-cta mt-24">Update Food</Link>
      </form>
    </main>
  </div>
</div>

)
}
export default Admin_add_food_edit;


