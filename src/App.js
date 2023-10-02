import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

const App =  () => {
  const {cartProduct:{cart} } = useSelector((state) => state);
  
  return (
    <>
     <Layout style={{ backgroundColor: "#FFDEB4", height:"100%" }}>
      <Navbar cartItemCount={cart.length} />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart cartData={cart} />} />
      </Routes>
      </Layout>
    </>
  );
};

export default App;
