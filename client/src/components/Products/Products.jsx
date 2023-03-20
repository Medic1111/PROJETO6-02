import style from "./Products.module.css";
import { useFetchApi } from "../../hooks/useFetchApi/useFetchApi";
import { Nav } from "../ProductsComps/Nav/Nav";
import { useState } from "react";
import { ProductsList } from "../ProductsComps/ProductsList/ProductList";
export const Products = () => {
  const [url, setUrl] = useState("/api/v1/products");
  const products = useFetchApi(url);
  return (
    <div className={style.center}>
      <Nav setUrl={setUrl} />
      <ProductsList products={products} />
    </div>
  );
};
