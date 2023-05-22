import React from "react";
import fotoSofia from "./fotoSofia.png";

const Main = () => {
	return (
		<div class="sobreMi">
			<section className="sobreMi_containerImg">
				<img
					className="sobreMi_divImg"
					src={fotoSofia}
					alt="Foto de la dueña del emprendimiento"
				></img>
			</section>
			<section className="sobreMi_containerText">
				<article class="sobreMi_title">¿Quién soy?</article>
				<article class="sobreMi_text">
					<p>
						¡Hola! Soy Sofía Sosa y cuento con experiencia en la gestión de
						redes sociales y marketing digital.
						<br /> Mi objetivo consiste en conectar empresas, marcas y artistas
						con su audiencia de forma auténtica.
						<br /> Mi trabajo abarca generar contenido de calidad, interactuar
						con seguidores y analizar datos para optimizar resultados.
					</p>
				</article>
			</section>
		</div>
	);
};

export default Main;
