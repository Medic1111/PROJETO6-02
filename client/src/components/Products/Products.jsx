import style from "./Products.module.css"
import axios from "axios";
import Masonry from 'react-masonry-css';
import {Nav} from "../ProductsComps/Nav/Nav";
import {breakpointColumnsObj} from "../ProductsComps/Utils/Utils"
import {escolherDieta} from "../ProductsComps/Utils/Utils"
import { useState,useEffect } from "react";
import { Quantidade } from "../ProductsComps/Quantidade/Quantidade";

const Products = () => {
const [products, setProducts] = useState([]);
const [url, setUrl] = useState("/api/v1/products")
const [feedback, setFeedback] = useState(null);

 
const fetchApi = async () => {
	await axios
		  .get(url)
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
		[url]
	  )
	  
	  

   return (

   <div className={style.center}> 
	  <Nav setUrl={setUrl} />
		<Masonry 
		breakpointCols={breakpointColumnsObj}
		className={style.grid}
		columnClassName={style.gridCol}>
		
			{
	products.map((product,index) => { 
		return (
			<li className={style.li} id={product._id} key={index}>
			<img className={style.img} src={product.url}/>
			<div className={style.div}>
				<p className={style.title}>{product.title}</p>
				<p className={style.price}></p>
				<p className={style.description}> <span className={style.props}>{product.description}</span></p>
			<div className={style.nutritional}>
				<p className={style.calories}>Cal: <span className={style.props}>{product.nutritional_facts.calories} |</span></p>
				<p className={style.carbs}> Carb: <span className={style.props}>{product.nutritional_facts.carbs} |</span></p>
				<p className={style.protein}> Prot: <span className={style.props}>{product.nutritional_facts.protein} |</span></p>
				<p className={style.fat}> Gord: <span className={style.props}>{product.nutritional_facts.fat}</span></p>
			</div>
			<div className={style.standard}>
				{product.label.map((Dieta)=>{
				let img = escolherDieta(Dieta)
					return( 
					<>
					{Dieta==="standard"?null:
					<img src={img} className={style.keto}/> 
					}
					</>					 
					)
					})}
				</div>
			<Quantidade product={product}/>   
			</div>		
			</li>
			)
				
			})  

			}
		</Masonry>
</div> 
   )
}

export default Products