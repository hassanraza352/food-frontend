

import "./css/common.css"
import "./css/cart.css"
import "./css/order-tracking.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Order_tracking(){
  const {id}= useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {

    axios.get(
        `http://localhost:3000/api/orders/${id}`,{
          withCredentials: true
        }
    )
    .then((response) => {

        console.log(response.data);

        setOrder(response.data.order);

    })
    .catch((error) => {

        console.log(error);

    });

}, [id]);
if (!order) {
    return <h2>Loading...</h2>;
}
const steps = [
  "Pending",
  "Confirmed",
  "Preparing",
  "Out for Delivery",
  "Delivered"
];

const currentStep = steps.indexOf(order.status);
  return(
<div className="center-shell details-shell">
  <div className="panel-card rise">
    <div className="panel-top">
      <Link to="/user/home" className="icon-btn">←</Link>
      <h1>Order #{order._id}</h1>
      <span className="badge badge-orange">{order.status}</span>
    </div>

    <div className="panel-body">
     <ul className="timeline">

  {steps.map((step, index) => {

    let className = "pending";

    if (index < currentStep) {
      className = "done";
    }
    else if (index === currentStep) {
      className = "current";
    }

    return (

      <li key={step} className={className}>

        <span className="tl-dot">

          {
            className === "done"
              ? "✓"
              : className === "current"
              ? "🛵"
              : "○"
          }

        </span>

        <div>

          <strong>{step}</strong>

          <p className="muted">

            {
              step === order.status
                ? new Date(order.createdAt).toLocaleString()
                : ""
            }

          </p>

        </div>

      </li>

    );

  })}

</ul>

      <Link to="/user/my-orders" className="btn btn-outline btn-block">View Order Details</Link>
    </div>
  </div>
</div>
  )}
  export default Order_tracking;


