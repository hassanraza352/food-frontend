
// <!-- <link rel="stylesheet" href="css/common.css">
// <link rel="stylesheet" href="css/admin.css"> -->
 import "./css/common.css"
 import "./css/admin.css"
 import { Link } from "react-router-dom";

function Admin_manage_food_dashboard(){
  return(
<div className="layout-with-side">
  <aside className="sidenav">
    <div className="brand"><span className="brand-mark">🍔</span> Food Admin</div>
    <nav className="nav-group">
      <Link to="/admin/dashboard">📊 Dashboard</Link>
      <Link to="/admin/add-food">🍕 Foods</Link>
      <Link to="/admin/manage-orders">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="#" className="active">📂 Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><Link to="/">🚪 Logout</Link></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Manage Foods</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <div className="section-head" style={{marginTop:"0"}}>
        <h2>All Foods (5)</h2>
        <Link to="/admin/add-food" className="btn btn-primary btn-sm">+ Add New Food</Link>
      </div>

      <div className="table-card rise">
        <table>
          <thead>
            <tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Description</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="food-thumb-sm grad-1">🍕</div></td>
              <td>Cheese Pizza</td>
              <td><span className="badge badge-orange">Pizza</span></td>
              <td className="price">Rs. 1200</td>
              <td className="muted desc-cell">Fresh mozzarella with special pizza sauce</td>
              <td className="action-cell">
                <Link to="/admin/add-food-edit" className="action-link">Edit</Link>
                <Link to="#" className="action-link del-link">Delete</Link>
              </td>
            </tr>
            <tr>
              <td><div className="food-thumb-sm grad-2">🍔</div></td>
              <td>Zinger Burger</td>
              <td><span className="badge badge-orange">Burger</span></td>
              <td className="price">Rs. 650</td>
              <td className="muted desc-cell">Crispy chicken fillet with mayo</td>
              <td className="action-cell">
                <Link to="/admin/add-food-edit" className="action-link">Edit</Link>
                <Link to="#" className="action-link del-link">Delete</Link>
              </td>
            </tr>
            <tr>
              <td><div className="food-thumb-sm grad-3">🥪</div></td>
              <td>Chicken Sandwich</td>
              <td><span className="badge badge-orange">Sandwich</span></td>
              <td className="price">Rs. 550</td>
              <td className="muted desc-cell">Grilled chicken, lettuce &amp; cheese</td>
              <td className="action-cell">
                <Link to="/admin/add-food-edit" className="action-link">Edit</Link>
                <Link to="#" className="action-link del-link">Delete</Link>
              </td>
            </tr>
            <tr>
              <td><div className="food-thumb-sm grad-4">🍟</div></td>
              <td>French Fries</td>
              <td><span className="badge badge-orange">Sides</span></td>
              <td className="price">Rs. 320</td>
              <td className="muted desc-cell">Crispy golden fries, salted</td>
              <td className="action-cell">
                <Link to="/admin/add-food-edit" className="action-link">Edit</Link>
                <Link to="#" className="action-link del-link">Delete</Link>
              </td>
            </tr>
            <tr>
              <td><div className="food-thumb-sm grad-5">🥤</div></td>
              <td>Coke (1.5L)</td>
              <td><span className="badge badge-orange">Drinks</span></td>
              <td className="price">Rs. 250</td>
              <td className="muted desc-cell">Chilled soft drink</td>
              <td className="action-cell">
                <Link to="/admin/add-food-edit" className="action-link">Edit</Link>
                <Link to="#" className="action-link del-link">Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* // <!-- EMPTY STATE — jab koi food na ho to table-card ki jagah ye dikhayein
      // <div className="empty-state rise">
      //   <span className="empty-icon">🍽️</span>
      //   <h3>No food added yet</h3>
      //   <p className="muted">Items you save from "Add New Food" will show up here.</p>
      //   <Link to="admin-add-food.html" className="btn btn-primary btn-sm mt-16">+ Add New Food</Link>
      // </div> */}
      
    </main>
  </div>
</div>

)}
export default Admin_manage_food_dashboard;


