import React from "react";
import {useNavigate} from "react-router-dom";
import Contacto from "./Contacto";

const Servicios = () => {
	const navigate = useNavigate();
	const onMouseWheel = (e) => {
		if (e.deltaY > 0) {
			navigate("/proyectos");
		} else {
			navigate("/main");
		}
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
				<div className="servicios_recuadro" id="frame1">
					Comunnity
					<br />
					Manager
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
