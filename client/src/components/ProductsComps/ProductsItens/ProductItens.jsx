import style from "./ProductItens.module.css";
import { Quantidade } from "../Quantidade/Quantidade";
import { Nutrition } from "../Nutrition/Nutrition";
import { Diet } from "../Diet/Diet";

export const ProductItens = ({ product }) => {
  return (
    <li className={style.li} id={product.id}>
      <img className={style.img} src={product.url} />
      <div className={style.div}>
        <p className={style.title}>{product.title}</p>
        <p className={style.price}></p>
        <p className={style.description}>
          <span className={style.props}>{product.description}</span>
        </p>
        <Nutrition product={product} />
        <Diet product={product} />
        <Quantidade product={product} />
      </div>
    </li>
  );
};
