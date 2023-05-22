import React from "react";
import logo from "./logo.png";
import logoIG from "./igLogo.png";
import {Link} from "react-scroll";

const Footer = () => {
	return (
		<>
			<div class="footer">
				<section class="footer_title">
					<p>¡Charlemos!</p>
				</section>
				<section class="footer_subtitle">
					<article>
						<p>
							Hagamos que tu marca crezca exponencialmente, me podes contactar
							también por{" "}
							<a
								href="mailto: marketingmedia.solutions1@gmail.com"
								class="footer_subtitle_enlace"
							>
								marketingmedia.solutions1@gmail.com
							</a>
						</p>
					</article>
					<Link
						activeClass="active"
						to="header"
						spy={false}
						smooth={true}
						offset={-50}
						duration={500}
						style={{cursor: "pointer"}}
					>
						<img src={logo} alt="" />
					</Link>
				</section>
				<section class="footer_icons">
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={logoIG} alt="" />
					</a>
				</section>
			</div>
			<div class="footer2">
				<section>
					<p>Impulsá tu presencia</p>
				</section>
			</div>
		</>
	);
};

export default Footer;
