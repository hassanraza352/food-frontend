import { Link } from "react-router-dom";
import "./css/common.css"
import "./css/admin.css"

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Admin_add_food(){
const navigate = useNavigate();

const [foodName, setFoodName] = useState("");
const [category, setCategory] = useState("Pizza");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
//const [image, setImage] = useState("");
const [available, setAvailable] = useState(true);
const [image, setImage] = useState(null);



  const addFood = async (e) => {
  e.preventDefault();

  const formData = new FormData();

formData.append("foodName", foodName);
formData.append("category", category);
formData.append("price", price);
formData.append("description", description);
formData.append("available", available);
formData.append("image", image);
  try {

   const response = await axios.post(
  "https://food-shop-backend-production-5a9f.up.railway.app/api/foods",
  formData,
  {
    withCredentials: true,
  }
);

    console.log(response.data);

    alert("Food Added Successfully");

    navigate("/admin/manage-food");

  } catch (error) {

    console.log(error);

    alert("Failed to add food");

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
      <Link to="/admin/add-food" className="active">🍕 Foods</Link>
      <Link to="/admin/manage-orders">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="/admin/manage-food">📂Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><buttton onClick={logout} >🚪 Logout</buttton ></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Add New Food</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <form className="form-card rise" onSubmit={addFood} >
        <div className="field">
          <label htmlFor="fname">Food Name</label>
          <input
             type="text"
             id="foodName"
             placeholder="e.g. Cheese Pizza, burger"
             value={foodName}
             onChange={(e) => setFoodName(e.target.value)}
          />        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="cat">Category</label>
        <select
  id="cat"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option>Pizza</option>
  <option>Burger</option>
  <option>Sandwich</option>
  <option>Drinks</option>
  <option>Dessert</option>
</select>
          </div>
          <div className="field">
            <label htmlFor="price">Price (Rs.)</label>
            <input type="number" id="price" placeholder="e.g. 1200" value={price}
  onChange={(e) => setPrice(e.target.value)}/>
          </div>
        </div>

        <div className="field">
          <label htmlFor="desc">Description</label>
          <textarea id="desc" rows="4" placeholder="Enter food description" value={description}
  onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="field">
  <label>Food Image</label>

  <div className="upload-box">

    <div className="upload-preview">🍕</div>

    <div>
      <label htmlFor="imageUpload" className="btn btn-outline btn-sm">
        Choose File
      </label>

      <input
        type="file"
        id="imageUpload"
        hidden
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <p
        className="muted mt-8"
        style={{ fontSize: "0.78rem" }}
      >
        {image ? image.name : "No file chosen"}
      </p>
    </div>

  </div>
</div>

<button
  type="submit"
  className="btn btn-primary btn-block btn-cta mt-24"
>
  Save Food
</button>
      </form>
    </main>
  </div>
</div>

)
}
export default Admin_add_food;


