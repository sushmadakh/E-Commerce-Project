/*import Product from "./pages/Product";
//import Home from "./pages/Home";
//import ProductList from "./pages/ProductList";
//import ProductList from "./pages/ProductList";
//import Register from "./pages/Register";
//import Login from "./pages/Login";
//import Cart from "./pages/Cart";

const App = () => {
  return <Product />;
  
};

export default App;
*/


import React from 'react';
//import ReactDOM from 'react-dom';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>       
      
        <Route path ="/" element={<Home/>} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />          
        <Route path="*" element={<NoPage />} />    
       
      </Routes>
    </BrowserRouter>
    
  );
  
};

export default App;
