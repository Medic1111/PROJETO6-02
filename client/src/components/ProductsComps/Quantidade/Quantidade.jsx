import style from "./Quantidade.module.css"
import { useState } from "react";


export const Quantidade = ({product}) => {
    const [contador, setContador] = useState(0);

    const [preco, setPreco] = useState(product.price)

    const subirValor = () => {
        setContador(valorAntigo => valorAntigo+1)
        setPreco(valorAntigo => valorAntigo+product.price)
     }

     const diminuirValor = () => {
        if(contador >0) {
            setContador(valorAntigo => valorAntigo-1)
            setPreco(valorAntigo => valorAntigo-product.price)
        }
        
    
     }
    return (
        <div className={style.flex}>
			<p className={style.quantidade}>
                <span className={style.menos} onClick={() => diminuirValor(product.price)}>-</span> 
                <span>{contador}</span> <span className={style.mais} onClick={subirValor}>+</span>
            </p>
			<button className={style.button}>Adicionar 
                <span className={style.price} onClick={() => diminuirValor(product.price)}> R$ {preco},00</span>
            </button>
		</div>
    )

}