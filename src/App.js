import "./App.css";
import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import About from "./pages/About";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Profile from "./pages/Profile";
// import Products from "./pages/Products";
import Register from "./components/Registration";
import SingleProductData from "./components/SingleProductData";

const ProductComp = lazy(() => import("./pages/Products"));

function App() {
  let auth = localStorage.getItem("token");
  return (
    <div className="App">
      <Navbar auth={auth} />
      <Routes>
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path="/profile" element={<Profile auth={auth} />} />
          <Route path="/products" element={
              <React.Suspense fallback="LOADING..">
                <ProductComp />
              </React.Suspense> 
            }
          />
          <Route path="/products/:id" element={<SingleProductData />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login props={auth} />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
