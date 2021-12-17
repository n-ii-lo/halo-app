import { useQuery } from "react-query";
import React from "react";
import Product from "./Product";

const productFetch = async () => {
  const apiLink =
    "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";
  const res = await fetch(apiLink);
  return res.json();
};

const ProductListing = () => {
  const { data, status } = useQuery("products", productFetch);
  console.log(data);

  return (
    <div>
      <h2>Products</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data...</div>}
      {status === "success" && (
        <div>
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
