import React from "react";
import Vector from "./Vector.png";

const Contacto = () => {
	const message = "Hola, estoy interesado en su servicio";
	const phone = "+5491156975864"; //CAMBIAR

	return (
		<a
			href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="Contacto">
				<img src={Vector} alt="logo de WhatsApp"></img>
				<p>Hola! ¿Consultas?</p>
			</div>
		</a>
	);
};

export default Contacto;
