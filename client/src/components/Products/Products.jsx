import Header from "../Header/Header.jsx"
import style from "./Products.module.css"
import axios from "axios";
import { useState,useEffect } from "react";


const Products = () => {
const [products, setProducts] = useState([]);
const [feedback, setFeedback] = useState(null);


const fetchApi = async () => {
    await axios
          .get("/api/v1/products")
          .then((sucesso) => {
            console.log(sucesso);
            setProducts(sucesso.data.products);
          })
          .catch((error) => {
            console.log(error);
            setFeedback(error.response.data.message);
          });
      };
      useEffect (
        () => {
            fetchApi()
        },
        []
      )

   return (

   <> 
    <Header/>
        <section className={style.Products}>
            {
                products.map((product,index) => { 
                    return (
                        <li className={style.li} id={product._id} key={index}>
                            <img className={style.img} src={product.url}/>
                             <div className={style.div}>
                                <p className={style.title}>{product.title}</p>
                                <p className={style.price}>Preço: <span className={style.props}>{product.price}</span></p>
                                <p className={style.description}>Descriçao: <span className={style.props}>{product.description}</span></p>
                               <div className={style.nutritional}>
                                    <p className={style.calories}>Calorias: <span className={style.props}>{product.nutritional_facts.calories} |</span></p>
                                    <p className={style.carbs}> Carboidratos: <span className={style.props}>{product.nutritional_facts.carbs} |</span></p>
                                    <p className={style.protein}> Proteinas: <span className={style.props}>{product.nutritional_facts.protein} |</span></p>
                                    <p className={style.fat}> Gordura: <span className={style.props}>{product.nutritional_facts.fat}</span></p>
                               </div>
                            <li>
                               {product.label[0]==="standard"?null:"Dieta: "}
                                {product.label.map((Dieta)=>{
                                    return( 
                                        <>
                                        {Dieta==="standard"?null:
                                        <span className={style.standard}>{Dieta} </span>}
                                        </>
                                        
                                    )
                                
                            
                                })}
                            </li>
                            <p className={style.quantidade}><span>+</span> <span>1</span> <span>-</span></p>
                            <button className={style.button}>Adicionar <span>R$0</span></button>
                             </div>
                            
                            
                        </li>
                    )
                
                })  

            }
        </section>
</> 
   
   )
}

export default Products