import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Layout from "./components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
         axios
      .get('https://fakestoreapi.com/users')
      .then((res) => {
        console.log(res)
        setResults(res.data);
        
      });
    }, []);

    useEffect(() => {
      if(results.length>0){
        console.log(results);
      }
    }, [results]);


  // const getUsers = () => {
  //
  // };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
