import style from "./Products.module.css"
import axios from "axios";
import keto from "../../assets/keto.png"
import paleo from "../../assets/paleo4.png"
import vegan from "../../assets/vegan3.png"
import Masonry from 'react-masonry-css';
import { useState,useEffect } from "react";

const Products = () => {
const [products, setProducts] = useState([]);
const [contador, setContador] = useState(1);
const [preco, setPreco] = useState(price)
const [feedback, setFeedback] = useState(null);

 const subirValor = () => {
	setContador(valorAntigo => valorAntigo+1)
 }
 const diminuirValor = () => {
	setContador(valorAntigo => valorAntigo-1)

 }
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
	  const breakpointColumnsObj = {
		default: 4,
		1280: 3,
		1000: 2,
		620: 1
	  };
	  

   return (

   <div className={style.center}> 
	<nav className={style.nav}>
		<ul className={style.route}>
			<li className={style.filtro}>Início</li>
			<li className={style.filtro}>Tradicional</li>
			<li className={style.filtro}>Vegan</li>
			<li className={style.filtro}>Paleo</li>
			<li className={style.filtro}>Keto</li>
		</ul>
	</nav>
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
				let img;
					if (Dieta==="paleo"){
					img=paleo
					} 
					else if (Dieta==="keto"){
					img=keto
					}
					else if (Dieta==="vegan"){
					img=vegan
					}
					return( 
					<>
					{Dieta==="standard"?null:
					<img src={img} className={style.keto}/> 
					}
					</>					 
					)
					})}
				</div>
				<div className={style.flex}>
					<p className={style.quantidade}><span className={style.menos} onClick={() => diminuirValor(product.price)}>-</span> <span>{contador}</span> <span className={style.mais} onClick={subirValor}>+</span></p>
					<button className={style.button}>Adicionar <span className={style.price}onClick={() => diminuirValor(product.price) }>R$ {product.price.preco},00</span></button>
				</div>
						   
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