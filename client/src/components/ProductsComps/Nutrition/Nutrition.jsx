import style from "./Nutrition.module.css";

export const Nutrition = ({ product }) => {
  return (
    <div className={style.nutritional}>
      <p className={style.calories}>
        Cal:
        <span className={style.props}>
           {product.nutritional_facts.calories} |
        </span>
      </p>
      <p className={style.carbs}>
        Carb:
         <span className={style.props}>
           {product.nutritional_facts.carbs} |
        </span>
      </p>
      <p className={style.protein}>
        Prot:
        <span className={style.props}>
           {product.nutritional_facts.protein} |
        </span>
      </p>
      <p className={style.fat}>
        Gord:
        <span className={style.props}>{product.nutritional_facts.fat}</span>
      </p>
    </div>
  );
};
