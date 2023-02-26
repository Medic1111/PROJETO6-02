import Header from "../Header/Header.jsx"
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
        <section className="Products">
            {
                products.map((product,index) => { 
                    return (
                        <li key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <img src={product.url}/>
                            <p>{product.description}</p>
                            <p>Calorias: {product.nutritional_facts.calories}</p>
                            <p>Carboidratos: {product.nutritional_facts.carbs}</p>
                            <p>Proteinas: {product.nutritional_facts.protein}</p>
                            <p>Gordura: {product.nutritional_facts.fat}</p>
                            <li>
                                {product.label.map((Element)=>{
                                    console.log(Element)
                                    return( 
                                        <p>{Element}</p>
                                    )
                                
                            
                                })}
                            </li>
                        </li>
                    )
                
                })  
            }
        </section>
</> 
   
   )
}

export default Products