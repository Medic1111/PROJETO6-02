import style from "./Diet.module.css";
import { escolherDieta } from "../Utils/Utils";

export const Diet = ({ product }) => {
  return (
    <div className={style.standard}>
      {product.label.map((Dieta, index)=>{
        let img = escolherDieta(Dieta);
        return (
          <span className={style.diet} key={index}>
            {Dieta==="standard"?null:(
              <img src={img} className={style.keto} />
            )}
          </span>
        );
      })}
    </div>
  );
};
