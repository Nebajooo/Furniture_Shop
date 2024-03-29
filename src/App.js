import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Router } from "react-router-dom";

// const url = (address) => {
//   window.location.href = address;
// }

export const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:slug" exact component={SingleProduct} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/gallery" exact component={Gallery} />
        <Route
          path="/joinwhatsapp"
          component={() => {
            window.location.href = "https://chat.whatsapp.com/";
          }}
        />
        <Route
          path="/joininsta"
          component={() => {
            window.location.href = "https://www.instagram.com/";
          }}
        />
        <Route
          path="/joinfacebook"
          component={() => {
            window.location.href = "https://www.facebook.com/";
          }}
        />
        <Route
          path="/locate"
          component={() => {
            window.location.href = "https://g.page/furniture?share";
          }}
        />
        <Route component={Error} />
      </Router>{" "}
    </>
  );
};

export default App;
