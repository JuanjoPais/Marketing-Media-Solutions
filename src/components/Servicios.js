import React from "react";
import {useNavigate} from "react-router-dom";
import Contacto from "./Contacto";
import {useState} from "react";

const Servicios = () => {
	const [texto, setTexto] = useState("Community Manager");
	const navigate = useNavigate();
	const onMouseWheel = (e) => {
		if (e.deltaY > 0) {
			navigate("/proyectos");
		} else {
			navigate("/main");
		}
	};
	const handleMouseOver = () => {
		setTexto(
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

	const handleMouseLeave = () => {
		setTexto("Community Manager");
	};

	return (
		<div class="servicios" onWheel={onMouseWheel}>
			<h2 className="servicios_titulo">Servicios</h2>
			<p className="servicios_texto">
				En <span className="servicios_marca">Marketing Media Solutions</span>,
				trabajamos en estrecha colaboración de nuestros clientes para entender
				sus necesidades, desarrollar estrategias personalizadas y reflejar su
				esencia única.
			</p>
			<section className="servicios_contenedorRecuadros">
				<div
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}
					className="servicios_recuadro"
					id="frame1"
				>
					{texto}
				</div>
				<div className="servicios_recuadro" id="frame2">
					Asesorías
				</div>
				<div className="servicios_recuadro" id="frame3">
					Manual de
					<br />
					marca
				</div>
				<div className="servicios_recuadro" id="frame4">
					Anuncios
				</div>
			</section>
			<Contacto />
		</div>
	);
};

export default Servicios;
