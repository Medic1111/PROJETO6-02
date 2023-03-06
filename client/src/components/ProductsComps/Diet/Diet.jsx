import style from "./Diet.module.css";
import { escolherDieta } from "../Utils/Utils";

export const Diet = ({ product }) => {
  return (
    <div className={style.standard}>
      {product.label.map((Dieta, index) => {
        let img = escolherDieta(Dieta);
        return (
          <div key={index + 100}>
            {Dieta === "standard" ? null : (
              <img src={img} className={style.keto} />
            )}
          </div>
        );
      })}
    </div>
  );
};
