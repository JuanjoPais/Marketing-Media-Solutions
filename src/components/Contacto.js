import React from "react";
import Vector from "./Vector.png";

const Contacto = () => {
	const message =
		"¡Hola Marketing Media Solutions! Estoy interesado en su servicio de (detallar servicio de interés y cuál sería el proyecto a trabajar)";
	const phone = "+5491132704760";

	return (
		<a
			href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="linkWhatsApp"
		>
			<div class="Contacto">
				<img src={Vector} alt="logo de WhatsApp"></img>
				<p>Hola! ¿Consultas?</p>
			</div>
		</a>
	);
};

export default Contacto;
