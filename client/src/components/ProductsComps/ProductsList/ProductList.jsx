import style from "./ProductList.module.css";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../Utils/Utils";
import {ProductItens} from "../ProductsItens/ProductItens";


export const ProductsList = ({products}) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={style.grid}
      columnClassName={style.gridCol}
    >
      {products.map((product, index) => {
        return (
        <ProductItens product={product} key={index}/>
        );

      })}
    </Masonry>
  );
};
