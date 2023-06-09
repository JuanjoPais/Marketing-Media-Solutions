import React from "react";
import {Link} from "react-scroll";

const Nav = () => {
	return (
		<div className="nav">
			<section className="nav_logo">
				<p className="nav_nombreLogo">Sofía Sosa</p>
				<p className="nav_subtituloLogo">Marketing Media Solutions</p>
			</section>
			<section className="nav_nav">
				<ul>
					<li>
						<Link
							activeClass="active"
							to="quienSoy"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							¿QUIEN SOY?
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							to="servicios"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							SERVICIOS
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							to="proyectos"
							spy={false}
							smooth={true}
							offset={-50}
							duration={500}
						>
							PROYECTOS
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							to="footer"
							spy={false}
							smooth={true}
							offset={-50}
							duration={500}
						>
							CONTACTO
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Nav;
