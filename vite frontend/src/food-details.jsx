import "./css/common.css"
import "./css/food-details.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Food_details(){
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [food, setFood] = useState(null);
const {id}=useParams();
useEffect(() => {
  axios.get(`http://localhost:3000/api/foods/${id}`)
    .then((response) => {
      setFood(response.data.food);
    })
    .catch((error) => {
      console.log("feching mei error arha ha");
      console.log(error);
    });
}, [id]);

const increaseQuantity = () => {
    setQuantity(quantity + 1);
};
const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
if (!food) {
  return <h2>Loading...</h2>;
}
const total_price=quantity*food.price;



 function addToCart() {
 axios.post(
    "http://localhost:3000/api/cart",
    {
        foodId: food._id,
        quantity: quantity
    },
    {
        withCredentials: true
    }
)
.then((response) => {
    console.log(response.data);
    navigate("/user/cart");
})
.catch((error) => {
    console.log(error);
});
 }
  return(
<div className="center-shell details-shell">
  <div className="details-card rise">
    <div className="details-topbar">
      <Link to="/user/food-listing" className="icon-btn">←</Link>
      <span className="icon-btn">🤍</span>
    </div>

    <div className="details-hero grad-1">🍕</div>

    <div className="details-body">
      <h1>{food.foodName}</h1>
      <p className="muted">{food.category}</p>
      {/* <p className="muted">⭐ 4.5 (230 reviews)</p> */}

      <div className="details-price price">Rs. {total_price}</div>

      <p className="details-desc">{food.description}</p>

      <div className="field">
        <label>Size</label>
        <div className="option-row">
          <span className="option-pill">Small</span>
          <span className="option-pill">Medium</span>
          <span className="option-pill active">Large</span>
        </div>
      </div>

      <div className="field">
        <label>Quantity</label>
        <div className="qty-row">
       <button className="qty-btn" onClick={decreaseQuantity}>−</button>
<span className="qty-val">{quantity}</span>
<button className="qty-btn" onClick={increaseQuantity}>+</button>
        </div>
      </div>

<button
  className="btn btn-primary btn-block btn-cta"
  onClick={addToCart}
>
  🛒 Add to Cart
</button>    </div>
  </div>
</div>
)}

export default Food_details;