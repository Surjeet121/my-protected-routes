import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

const API_URL = `https://dummyjson.com/products?limit=100`;

const SingleProductData = () => {
  const { id } = useParams();

  const { products } = useGlobalContext();

  const singleProductData = products.find((item) => item.id === parseInt(id));

  console.log(singleProductData);

  const { brand, category, price,title, description, images } = singleProductData;

  return (
    <div className="single-product-container1">
      <div className="single-product">
        {/* <h4>{id}</h4> */}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>description</th>
              <th>Logo</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id} className="single-product-info">
              <td>{id}</td>
              <td>{category}</td>
              <td>{brand}</td>
              <td>${price}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>
                <img src={images[0]} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProductData;
