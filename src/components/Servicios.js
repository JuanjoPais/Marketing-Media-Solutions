import React from "react";
import {useState} from "react";

const Servicios = () => {
	const [texto1, setTexto1] = useState("Community Manager");
	const [texto2, setTexto2] = useState("Asesorías");
	const [texto3, setTexto3] = useState("Manual de marca");
	const [texto4, setTexto4] = useState("Anuncios");

	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);
	const [isHovered4, setIsHovered4] = useState(false);

	const scaleValue1 = isHovered1 ? 1.1 : 1;
	const scaleValue2 = isHovered2 ? 1.1 : 1;
	const scaleValue3 = isHovered3 ? 1.1 : 1;
	const scaleValue4 = isHovered4 ? 1.1 : 1;

	const styles1 = {
		transform: `scale(${scaleValue1})`,
		transformOrigin: "top left",
		transition: "transform 0.5s ease",
	};
	const styles2 = {
		transform: `scale(${scaleValue2})`,
		transformOrigin: "top left",
		transition: "transform 0.5s ease",
	};
	const styles3 = {
		transform: `scale(${scaleValue3})`,
		transformOrigin: "top left",
		transition: "transform 0.5s ease",
	};
	const styles4 = {
		transform: `scale(${scaleValue4})`,
		transformOrigin: "top left",
		transition: "transform 0.5s ease",
	};

	const handleMouseOverFrame1 = () => {
		setIsHovered1(true);
		return setTexto1(
			<ul className="servicios_textoHover">
				<li className="servicios_itemsHover">
					Calendarios semanales y mensuales
				</li>
				<li className="servicios_itemsHover">Optimizo biografías</li>
				<li className="servicios_itemsHover">Formación de comunidades</li>
				<li className="servicios_itemsHover">
					Posteos, historias interactivas, reels y carruseles
				</li>
			</ul>
		);
	};

	const handleMouseLeaveFrame1 = () => {
		setIsHovered1(false);
		setTexto1("Community Manager");
	};

	const handleMouseOverFrame2 = () => {
		setIsHovered2(true);
		return setTexto2(
			<ul className="servicios_textoHover">
				<li className="servicios_itemsHover">
					Estrategias efectivas de redes sociales
				</li>
				<li className="servicios_itemsHover">Aumentar su presencia en línea</li>
				<li className="servicios_itemsHover">
					Mejorar su interacción con los clientes
				</li>
				<li className="servicios_itemsHover">Aumentar su alcance</li>
			</ul>
		);
	};
	const handleMouseLeaveFrame2 = () => {
		setIsHovered2(false);
		setTexto2("Asesorías");
	};

	const handleMouseOverFrame3 = () => {
		setIsHovered3(true);
		return setTexto3(
			<p className="servicios_textoHover">
				Tipografía, colores que nos definen, logos y sus usos adecuados.
			</p>
		);
	};
	const handleMouseLeaveFrame3 = () => {
		setIsHovered3(false);
		setTexto3("Manual de marca");
	};
	const handleMouseOverFrame4 = () => {
		setIsHovered4(true);
		return setTexto4(
			<p className="servicios_textoHover">
				Promover la marca y alcanzar los objetivos de marketing a través de
				estrategias publicitarias en redes sociales.
			</p>
		);
	};
	const handleMouseLeaveFrame4 = () => {
		setIsHovered4(false);
		setTexto4("Anuncios");
	};

	return (
		<div className="servicios">
			<h2 className="servicios_titulo">Servicios</h2>
			<p className="servicios_texto">
				En <span className="servicios_marca">Marketing Media Solutions</span>,
				nos apasiona el éxito de nuestros clientes y nos comprometemos a
				ayudarlos a lograr sus metas. Trabajamos en estrecha colaboración para
				entender sus necesidades, desarrollar estrategias personalizadas y
				reflejar su esencia única. Nos enfocamos en encontrar su voz en línea y
				conectar con su audiencia, simplificando el proceso digital y manejando
				todo, desde la estrategia hasta la implementación.
			</p>
			<section className="servicios_contenedorRecuadros">
				<div
					onMouseOver={handleMouseOverFrame1}
					onMouseLeave={handleMouseLeaveFrame1}
					className="servicios_recuadro"
					id="frame1"
					style={styles1}
				>
					{texto1}
				</div>
				<div
					onMouseOver={handleMouseOverFrame2}
					onMouseLeave={handleMouseLeaveFrame2}
					className="servicios_recuadro"
					id="frame2"
					style={styles2}
				>
					{texto2}
				</div>
				<div
					onMouseOver={handleMouseOverFrame3}
					onMouseLeave={handleMouseLeaveFrame3}
					className="servicios_recuadro"
					id="frame3"
					style={styles3}
				>
					{texto3}
				</div>
				<div
					onMouseOver={handleMouseOverFrame4}
					onMouseLeave={handleMouseLeaveFrame4}
					className="servicios_recuadro"
					id="frame4"
					style={styles4}
				>
					{texto4}
				</div>
			</section>
		</div>
	);
};

export default Servicios;
