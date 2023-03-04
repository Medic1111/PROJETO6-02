import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={style.nav}>
		<ul className={style.route}>
			<li className={style.filtro}>Início</li>
			<li className={style.filtro}>Tradicional</li>
			<li className={style.filtro}>Vegan</li>
			<li className={style.filtro}>Paleo</li>
			<li className={style.filtro}>Keto</li>
		</ul>
	</nav>
    )
}

