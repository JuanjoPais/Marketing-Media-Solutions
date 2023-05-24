import React from "react";
import logo from "./images/logo.png";
import logoIG from "./images/igLogo.png";

import {Link} from "react-scroll";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer_textContainer">
					<section className="footer_title">
						<p>¡Charlemos!</p>
					</section>
					<section className="footer_subtitle">
						<p>
							Hagamos que tu marca crezca exponencialmente, me podés contactar
							también por{" "}
							<a
								href="mailto: marketingmedia.solutions1@gmail.com"
								className="footer_subtitle_enlace"
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
							<img src={logo} alt="Logo Marketing Media Solutions" 
							className="footer_logo"/>
						</Link>
					</section>
				</div>

				<section className="footer_icons">
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={logoIG} alt="Logo Instagram"
						className="footer_icon" />
					</a>
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
						
					>
						<img src={logoIG} alt="" 
						className="footer_icon"/>
					</a>
					<a
						href="https://www.instagram.com/marketingmedia.solutions/"
						target="_blank"
						rel="noreferrer"
						
					>
						<img src={logoIG} alt="" 
						className="footer_icon"/>
					</a>
				</section>
			</div>
			<div className="footer2">
				<p>Impulsá tu presencia</p>
			</div>
		</>
	);
};

export default Footer;
