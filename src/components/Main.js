import React from "react";
import Contacto from "./Contacto";
import {useNavigate} from "react-router-dom";
import fotoSofia from "./fotoSofia.png";

const Main = () => {
	const navigate = useNavigate();
	const onMouseWheel = (e) => {
		if (e.deltaY > 0) {
			navigate("/servicios");
		} else {
			navigate("/");
		}
	};
	return (
		<div class="sobreMi" onWheel={onMouseWheel}>
			<section class="sobreMi_img">
				<article>
					<img src={fotoSofia} alt="" />
				</article>
			</section>
			<section>
				<article class="sobreMi_title">¿Quién Soy?</article>
				<article class="sobreMi_text">
					¡Hola! Soy Sofía Sosa y cuento con experiencia en la gestión de redes
					sociales y marketing digital.
					<br /> Mi objetivo consiste en conectar empresas, marcas y artistas
					con su audiencia de forma auténtica.
					<br /> Mi trabajo abarca generar contenido de calidad, interactuar con
					seguidores y analizar datos para optimizar resultados.
				</article>
			</section>
			<Contacto />
		</div>
	);
};

export default Main;
