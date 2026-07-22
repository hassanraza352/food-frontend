
// <!-- <link rel="stylesheet" href="css/common.css">
// <link rel="stylesheet" href="css/admin.css"> -->
 import "./css/common.css"
 import "./css/admin.css"
 import { Link } from "react-router-dom";
 import { useState,useEffect } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";




function Admin_manage_food_dashboard(){
  const navigate = useNavigate();  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
  try {

    const response = await axios.get(
      "https://food-shop-backend-production-5a9f.up.railway.app/api/foods"
    );

    setFoods(response.data.foods);

  } catch (error) {

    console.log(error);

  }
};
  useEffect(() => {
  getFoods();
}, []);

const deleteFood = async (id) => {
  try {

    await axios.delete(`https://food-shop-backend-production-5a9f.up.railway.app/foods/${id}`,{
      withCredentials: true
    });


    alert("Food Deleted Successfully");

    getFoods();   // List refresh

  } catch (error) {

    console.log(error);

  }
};
const logout = async () => {
  await axios.post(
    "https://food-shop-backend-production-5a9f.up.railway.app/api/logout",
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
      <Link to="/admin/dashboard">📊 Dashboard</Link>
      <Link to="/admin/add-food">🍕 Foods</Link>
      <Link to="/admin/manage-orders">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="#" className="active">📂 Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><Link onClick={logout} >🚪 Logout</Link></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Manage Foods</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <div className="section-head" style={{marginTop:"0"}}>
        <h2>All Foods ({foods.length})</h2>
        <Link to="/admin/add-food" className="btn btn-primary btn-sm">+ Add New Food</Link>
      </div>

      <div className="table-card rise">
        <table>
          <thead>
            <tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Description</th><th>Action</th></tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td><div className="food-thumb-sm grad-1">
                  <img
  src={`http://localhost:3000/${food.image}`}
  alt={food.foodName}
/>
                  </div></td>
                <td>{food.foodName}</td>
                <td><span className="badge badge-orange">{food.category}</span></td>
                <td className="price">Rs. {food.price}</td>
                <td className="muted desc-cell">{food.description}</td>
                <td className="action-cell">
                  <Link to={`/admin/add-food-edit/${food._id}`} className="action-link">Edit</Link>
                  <button onClick={() => deleteFood(food._id)} className="action-link del-link">Delete</button>
                  </td>
            </tr>
            ))}
         
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


