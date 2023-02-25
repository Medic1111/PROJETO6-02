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
                        </li>
                    )
                
                })  
            }
        </section>
</> 
   
   )
}

export default Products