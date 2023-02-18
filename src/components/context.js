import React, { createContext, useContext, useEffect, useState, Suspense  } from "react";

// const API_URL = `https://dummyjson.com/products?limit=100`
const API_URL = `https://dummyjson.com/products/search?`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const fetchProducts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(" Search response 16=====>> ", data);
      setProducts(data.products);
    } catch (error) {
      console.log("error 30===>> ", error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchProducts(`${API_URL}q=${query}`);
    }, 750);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider value={{ products, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// custum Hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
