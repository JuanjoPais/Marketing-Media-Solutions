import React from "react";
import {useNavigate} from "react-router-dom";

const Proyectos = () => {
	const navigate = useNavigate();
	const onMouseWheel = (e) => {
		if (e.deltaY > 0) {
			navigate("/footer");
		} else {
			navigate("/servicios");
		}
	};
	return (
		<div className="proyectos" onWheel={onMouseWheel}>
			<h2 className="proyectos_titulo">Proyectos</h2>
		</div>
	);
};

export default Proyectos;
