import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../components/context";
import Search from "../components/Search";
import "./productsStyle.css";

const Products = () => {
  const { products } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/products");
  }, []);

  return (
    <div className="products-container">
      {/* Search component here ----*/}
      <Search />

      {products.map((items, index) => {
        const { id, description, title, brand, images, price } = items;
        const phoneDesc = description.substring(0, 10);
        return (
          <>
            <NavLink to={`/products/${id}`} key={index}>
              <ul key={id} className="product-info">
                <li>{id}</li>
                <li>{title}</li>
                <li>{brand}</li>
                <li>${price}</li>
                <li>
                  <img src={images[0]} />
                </li>
              </ul>
            </NavLink>
          </>
        );
      })}
    </div>
  );
};

export default Products;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./productsStyle.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [searchKey, setSearchKey] = useState("");
//   // const [filteredResults, setFilteredResults] = useState([]);

//   const navigate = useNavigate()

//   const fetchProduct = async () => {
//     await fetch("https://dummyjson.com/products?limit=25")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//       navigate("/products")

//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);
//   const changeHandler = (e) => {
//     setSearchKey(e.target.value);
//   };

//   return (
//     <div className="products-container">
//       <input
//         type="text"
//         value={searchKey}
//         onChange={changeHandler}
//         placeholder="Serch your product..."
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Title</th>
//             <th>Brand</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products?.filter((product)=> product.title.toLowerCase().includes(searchKey))
//             .map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.title}</td>
//                 <td>{product.brand}</td>
//                 <td>{product.price}</td>
//               </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;

// useEffect(() => {
//   let timer = setTimeout(() => {
//     getMovieData(`${API_URL}&s=${query}`);
//   }, 4000);
//   return ()=> clearTimeout(timer)
// }, [query]);
