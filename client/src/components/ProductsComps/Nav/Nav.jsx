import style from "./Nav.module.css"


export const Nav = ({setUrl}) => {

const irParaInicio = () => {
	setUrl("/api/v1/products")
}

const irParaTradicional = () => {
	setUrl("/api/v1/products?label=standard")

}

const irParaVegan = () => {
	setUrl("/api/v1/products?label=vegan")

}

const irParaPaleo = () => {
	setUrl("/api/v1/products?label=paleo")

}

const irParaKeto = () => {
	setUrl("/api/v1/products?label=keto")

}


    return (
        <nav className={style.nav}>
		<ul className={style.route}>
			<li onClick={irParaInicio} className={style.filtro}>Início</li>
			<li onClick={irParaTradicional} className={style.filtro}>Tradicional</li>
			<li onClick={irParaVegan} className={style.filtro}>Vegan</li>
			<li onClick={irParaPaleo} className={style.filtro}>Paleo</li>
			<li onClick={irParaKeto} className={style.filtro}>Keto</li>
		</ul>
	</nav>
    )
}

