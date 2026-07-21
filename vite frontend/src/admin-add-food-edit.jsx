import { Link } from "react-router-dom";
import "./css/common.css"
import "./css/admin.css"
 import { useState,useEffect } from "react";
 import { useParams } from "react-router-dom";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";



function Admin_add_food_edit(){
  
   const navigate = useNavigate();
  const {id} = useParams();
  const [foodName, setFoodName] = useState("");
const [category, setCategory] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState(null);
const [available, setAvailable] = useState(true);



const getFood = async () => {

const response = await axios.get(
  `http://localhost:3000/api/foods/${id}`,
  {
    withCredentials: true
  }
);

const food = response.data.food;

setFoodName(food.foodName);
setCategory(food.category);
setPrice(food.price);
setDescription(food.description);
setImage(food.image);
setAvailable(food.available);
};

const updateFood = async (e) => {
  e.preventDefault();

  try {

   await axios.put(
  `http://localhost:3000/api/foods/${id}`,
  {
    foodName,
    category,
    price,
    description,
    image,
    available
  },
  {
    withCredentials: true
  }
);
     navigate("/admin/manage-food");

  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
  getFood();
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
      <Link to="/admin/dashboard">📊 Dashboard</Link>
      <Link to="/admin/add-food" className="active">🍕 Foods</Link>
      <Link to="/admin/manage-orders">🧾 Orders</Link>
      <Link to="#">👥 Users</Link>
      <Link to="/admin/manage-food">📂Food added List</Link>
      <Link to="#">⚙️ Settings</Link>
    </nav>
    <div className="nav-foot"><button onClick={logout}>🚪 Logout</button></div>
  </aside>

  <div className="layout-main admin-main">
    <header className="admin-topbar">
      <h1>Edit  Food Item</h1>
      <Link to="#" className="avatar">A</Link>
    </header>

    <main className="app-shell">
      <form className="form-card rise" onSubmit={updateFood} >
        <div className="field">
          <label htmlFor="fname">Food Name</label>
          <input type="text" id="fname" value={foodName} onChange={(e) => setFoodName(e.target.value)}placeholder="e.g. Cheese Pizza"/>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="cat">Category</label>
            <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Pizza</option>
              <option>Burger</option>
              <option>Sandwich</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="price">Price (Rs.)</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}id="price" placeholder="e.g. 1200"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="desc">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}id="desc" rows="4" placeholder="Enter food description"></textarea>
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
>Update Food
</button>      </form>
    </main>
  </div>
</div>

)
}
export default Admin_add_food_edit;


