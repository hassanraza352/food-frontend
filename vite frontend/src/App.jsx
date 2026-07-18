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



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user/home" element={<Home />} />
        <Route path="/admin/add-food" element={<Admin_add_food />} />
        <Route path="/admin/dashboard" element={<Admin_dashboard />} />
        <Route path="/admin/manage-orders" element={<Admin_manage_orders />} />
      <Route path="/user/billing-details/:id" element={<Billing_details />} />
       <Route path="/user/cart" element={<Cart />} />
       <Route path="/user/checkout" element={<Checkout />} />
        <Route path="/user/food-details/:id"element={<Food_details />}/>      
        <Route path="/user/food-listing" element={<Food_listing />} />
       <Route path="/login" element={<Login />} />
       <Route path="/login-admin" element={<Login_admin />} />
       <Route path="/user/my-orders" element={<My_orders />} />
       <Route path="/user/register" element={<Register />} /> 
       <Route path="/user/order-tracking/:id" element={<Order_tracking />} />
       <Route path="/admin/order-tracking/:id" element={<Order_tracking />} />
       <Route path="/admin/manage-food" element={<Admin_manage_food_dashboard />} />
       <Route path="/admin/add-food-edit/:id" element={<Admin_add_food_edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;