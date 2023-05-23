import React from "react";
import logo from "./logo.png";
import logoIG from "./igLogo.png";

import {Link} from "react-scroll";

const Footer = () => {
	return (
		<>
			<div class="footer">
				<div className="footer_textContainer">
					<section class="footer_title">
						<p>¡Charlemos!</p>
					</section>
					<section class="footer_subtitle">
						<p>
							Hagamos que tu marca crezca exponencialmente, me podés contactar
							también por{" "}
							<a
								href="mailto: marketingmedia.solutions1@gmail.com"
								class="footer_subtitle_enlace"
							>
								marketingmedia.solutions1@gmail.com
							</a>
						</p>

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
				</div>

				<section class="footer_icons">
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={logoIG} alt="" />
					</a>
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={logoIG} alt="" />
					</a>
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
				<p>Impulsá tu presencia</p>
			</div>
		</>
	);
};

export default Footer;
