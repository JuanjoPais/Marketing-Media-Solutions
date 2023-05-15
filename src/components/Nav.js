import React from "react";
import Contacto from "./Contacto";
import {Link} from "react-router-dom";

const Nav = () => {
	return (
		<div class="nav">
			<section class="nav_logo">
				<p className="nav_nombreLogo">Sofía Sosa</p>
				<p className="nav_subtituloLogo">Marketing Media Solutions</p>
			</section>
			<section class="nav_nav">
				<ul>
					<Link to="/main" className="nav_link">
						<li>¿QUIEN SOY?</li>
					</Link>
					<Link to="/servicios" className="nav_link">
						<li>SERVICIOS</li>
					</Link>
					<Link to="/proyectos" className="nav_link">
						<li>PROYECTOS</li>
					</Link>
					<Link to="/footer" className="nav_link">
						<li>CONTACTO</li>
					</Link>
				</ul>
			</section>
			<Contacto />
		</div>
	);
};

export default Nav;
