import React from "react";
import Contacto from "./Contacto";


const Nav = () => {
	return (
		<div class="nav">
			<section class="nav_logo">
				<p className="nav_nombreLogo">Sofía Sosa</p>
				<p className="nav_subtituloLogo">Marketing Media Solutions</p>
			</section>
			<section class="nav_nav">
				<ul>
					<li>¿QUIEN SOY?</li>
					<li>SERVICIOS</li>
					<li>PROYECTOS</li>
					<li>CONTACTO</li>	
				</ul>
			</section>
			<Contacto />
		</div>
	);
};

export default Nav;
