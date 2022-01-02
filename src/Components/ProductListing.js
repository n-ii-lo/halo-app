import { useQuery } from "react-query";
import React from "react";
import { Product } from "../Components";
import { ProductModal } from "./ProductModal";

const productFetch = async () => {
  //Product fetch
  const apiLink =
    "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";
  const res = await fetch(apiLink);
  return res.json();
};

export const ProductListing = () => {
  //Fetch hook
  const { data, status } = useQuery("products", productFetch);
  console.log(data);
  //Listing setting
  return (
    <div className='_container'>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data...</div>}
      {status === "success" && (
        <div className='product-listing'>
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      )}
      <ProductModal />
    </div>
  );
};
