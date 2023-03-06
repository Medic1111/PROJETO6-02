import style from "../Diet/Diet.module.css"
import {escolherDieta} from "../Utils/Utils"

export const Diet = ({product}) => {
    return (
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
    )
}