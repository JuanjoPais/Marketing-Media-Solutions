import React from "react";
import Nav from "./Nav";


const Header = () => {
	
	return (
		<div class="header" >
			<Nav />
			<section class="header_section2">
				<h1 class="header_title">Quiero potenciar tu crecimiento</h1>
				<h2 class="header_text">
					Cada marca tiene una historia única que merece ser compartida y estoy
					acá para ayudarte a hacerlo de la manera más efectiva posible.
				</h2>
			</section>
		</div>
	);
};

export default Header;
