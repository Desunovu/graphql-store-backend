import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./components/navbar";
import Admin from "./pages/admin";
import ProductPage from "./pages/product";
import { Toolbar } from "@mui/material";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product">
          <Route path=":id" element={<ProductPage />} />
        </Route>
        {user && (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />}>
              <Route path=":userId" element={<Orders />} />
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
