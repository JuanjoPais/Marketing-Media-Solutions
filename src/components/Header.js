import React from "react";
import Nav from "./Nav";
import {useNavigate} from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const onMouseWheel = (e) => {
		if (e.deltaY > 0) {
			navigate("/main");
		}
	};
	return (
		<div class="header" onWheel={onMouseWheel}>
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
