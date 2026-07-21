import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index.jsx";
import Home from "./home.jsx";
import Admin_add_food from "./admin-add-food.jsx";
import Admin_dashboard from "./admin-dashboard.jsx";
import Admin_manage_orders from "./admin-manage-orders.jsx";
import Billing_details from "./billing-details.jsx";
import Cart from "./cart.jsx";
import Checkout from "./checkout.jsx";
import Food_details from "./food-details.jsx";
import Food_listing from "./food-listing.jsx";
import Login from "./login.jsx";
import Login_admin from "./login-admin.jsx";
import My_orders from "./my-orders.jsx";
import Register from "./register.jsx";
import Order_tracking from "./order-tracking.jsx";
import Admin_manage_food_dashboard from "./admin-manage-food.jsx";
import Admin_add_food_edit from "./admin-add-food-edit.jsx";
import Order_tracking_admin from "./admin-order-tracking.jsx";
import ProtectedRoute from "./service/protectedRoutes.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import VerifyOtp from "./VerifyOtp";



function App() {
      const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(
        "http://localhost:3000/api/me",
        {
            withCredentials: true
        }
    )
    .then((response) => {

        setUser(response.data.user);

    })
    .catch(() => {

        setUser(null);

    })
    .finally(() => {

        setLoading(false);

    });

}, []);
if (loading) {
    return <h2>Loading...</h2>;
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

<Route path="/user/home" element={<ProtectedRoute user={user} allowedRole="user">
      <Home />
    </ProtectedRoute> }
/>  

    <Route path="/user/billing-details/:id" element={<Billing_details />} />
<Route
  path="/user/cart"
  element={
    <ProtectedRoute
      user={user}
      allowedRole="user"
    >
      <Cart />
    </ProtectedRoute>
  }
/>     
<Route
  path="/user/my-orders"
  element={
    <ProtectedRoute user={user} allowedRole="user">
      <My_orders />
    </ProtectedRoute>
  }
/>       <Route path="/user/register" element={<Register />} /> 
<Route
  path="/user/order-tracking/:id"
  element={
    <ProtectedRoute user={user} allowedRole="user">
      <Order_tracking />
    </ProtectedRoute>
  }
/>        
<Route
  path="/user/checkout"
  element={
    <ProtectedRoute user={user} allowedRole="user">
      <Checkout />
    </ProtectedRoute>
  }
/>     
<Route
  path="/user/food-details/:id"
  element={
    <ProtectedRoute user={user} allowedRole="user">
      <Food_details />
    </ProtectedRoute>
  }
/>
<Route
  path="/user/food-listing"
  element={
    <ProtectedRoute user={user} allowedRole="user">
      <Food_listing />
    </ProtectedRoute>
  }
/>

       <Route path="/login" element={<Login />} />
       <Route path="/login-admin" element={<Login_admin />} />



<Route
  path="/admin/add-food"
  element={
    <ProtectedRoute user={user} allowedRole="admin">
      <Admin_add_food />
    </ProtectedRoute>
  }
/><Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute
      user={user}
      allowedRole="admin"
    >
      <Admin_dashboard />
    </ProtectedRoute>
  }
/>        
<Route
    path="/verify-otp"
    element={<VerifyOtp />}
/>

<Route
  path="/admin/manage-orders"
  element={
    <ProtectedRoute user={user} allowedRole="admin">
      <Admin_manage_orders />
    </ProtectedRoute>
  }
/>  
<Route
  path="/admin/order-tracking/:id"
  element={
    <ProtectedRoute user={user} allowedRole="admin">
      <Order_tracking_admin />
    </ProtectedRoute>
  }
/><Route
  path="/admin/manage-food"
  element={
    <ProtectedRoute user={user} allowedRole="admin">
      <Admin_manage_food_dashboard />
    </ProtectedRoute>
  }
/>       
<Route
  path="/admin/add-food-edit/:id"
  element={
    <ProtectedRoute user={user} allowedRole="admin">
      <Admin_add_food_edit />
    </ProtectedRoute>
  }
/>      </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;