import React from "react";
import {useState, useEffect} from "react";
import fotoSofia from "./fotoSofia.png";

const Main = () => {
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
		<div className="sobreMi">
			<section className="sobreMi_containerImg">
				<img
					className="sobreMi_divImg"
					src={fotoSofia}
					alt="Foto de la dueña del emprendimiento"
				></img>
			</section>
			<section className="sobreMi_containerText">
				<article className="sobreMi_title">¿Quién soy?</article>
				<article className="sobreMi_text">
					{isSmallScreen ? (
						<p>
							¡Hola! Soy sofía Sosa, experta en redes sociales y marketing
							digital. Conecto empresas, marcas y artistas con sus audencias,
							generando contenido de calidad y optimizando los resultados.
						</p>
					) : (
						<p>
							¡Hola! Soy Sofía Sosa y cuento con experiencia en la gestión de
							redes sociales y marketing digital.
							<br /> Mi objetivo consiste en conectar empresas, marcas y
							artistas con su audiencia de forma auténtica.
							<br /> Mi trabajo abarca generar contenido de calidad, interactuar
							con seguidores y analizar datos para optimizar resultados.
						</p>
					)}
				</article>
			</section>
		</div>
	);
};

export default Main;
