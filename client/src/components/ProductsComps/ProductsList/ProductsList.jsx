import style from "../ProductsList/ProductsList.module.css"
import Masonry from 'react-masonry-css';
import { breakpointColumnsObj } from "../Utils/Utils";
import { Quantidade } from "../ProductsComps/Quantidade/Quantidade";
import { Nutrition } from "../ProductsComps/Nutrition/Nutrition";
import { Diet } from "../ProductsComps/Diet/Diet";


export const ProductsList = () => {
    return (
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
			<Nutrition product={product}/>
			<Diet product={product} />
			<Quantidade product={product}/>   
			</div>		
			</li>
			)
				
			})  

			}
		</Masonry>
    )
}