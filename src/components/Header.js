import React from "react";
import {useState, useEffect} from "react";
import Nav from "./Nav";

const Header = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 576);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div class="header">
			<Nav />
			<section class="header_section2">
				<h1 class="header_title">Quiero potenciar tu crecimiento</h1>
				{isSmallScreen ? (
					<h2 class="header_text">
						Estoy aquí para ayudarte a compartir de manera efectiva la historia
						única de tu marca.
					</h2>
				) : (
					<h2 class="header_text">
						Cada marca tiene una historia única que merece ser compartida y
						estoy acá para ayudarte a hacerlo de la manera más efectiva posible.
					</h2>
				)}
			</section>
		</div>
	);
};

export default Header;
