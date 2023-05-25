import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import {useState, useEffect} from "react";

// import {Swiper, SwiperSlide} from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import {Navigation} from "swiper";
// import prevArrow from "./images/left-arrow.png";
// import nextArrow from "./images/right-arrow.png";

// import img1 from "./fotosCarousel/1.png";
// import img2 from "./fotosCarousel/2.png";
// import img3 from "./fotosCarousel/3.png";
// import img4 from "./fotosCarousel/4.png";
// import img5 from "./fotosCarousel/5.png";
// import img6 from "./fotosCarousel/6.png";

const Proyectos = () => {
	const responsive = {
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	// const [isSmallScreen, setIsSmallScreen] = useState(false);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsSmallScreen(window.innerWidth < 576);
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	handleResize();

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	// const [contenidoSlide1, setContenidoSlide1] = useState(
	// 	<img src={img1} alt="foto de carousel" />
	// );
	// const [contenidoSlide2, setContenidoSlide2] = useState(
	// 	<img src={img2} alt="foto de carousel" />
	// );
	// const [contenidoSlide3, setContenidoSlide3] = useState(
	// 	<img src={img3} alt="foto de carousel" />
	// );
	// const [contenidoSlide4, setContenidoSlide4] = useState(
	// 	<img src={img4} alt="foto de carousel" />
	// );
	// const [contenidoSlide5, setContenidoSlide5] = useState(
	// 	<img src={img5} alt="foto de carousel" />
	// );
	// const [contenidoSlide6, setContenidoSlide6] = useState(
	// 	<img src={img6} alt="foto de carousel" />
	// );

	// const handleMouseOverSlide1 = () => {
	// 	return setContenidoSlide1(
	// 		<p className="proyectos_textoHover">
	// 			Colaboré con Patricia Sosa en su portada para representarla en la
	// 			promoción de "Mundo sin violencia" utilizando estrategias de marketing
	// 			digital y gestión de redes sociales.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide1 = () => {
	// 	setContenidoSlide1(<img src={img1} alt="foto de carousel" />);
	// };

	// const handleMouseOverSlide2 = () => {
	// 	return setContenidoSlide2(
	// 		<p className="proyectos_textoHover">
	// 			El objetivo es promocionar el nuevo estudio Dolby Atmos de Oscar
	// 			Mediavilla, aumentando visibilidad, interés en línea y destacando
	// 			ventajas mediante canales digitales.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide2 = () => {
	// 	setContenidoSlide2(<img src={img2} alt="foto de carousel" />);
	// };
	// const handleMouseOverSlide3 = () => {
	// 	return setContenidoSlide3(
	// 		<p className="proyectos_textoHover">
	// 			Diseñe un folleto promocional para el centro de masajes "Reflex" con el
	// 			propósito de atraer clientes y aumentar la visibilidad de los servicios
	// 			mediante promociones destacadas.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide3 = () => {
	// 	setContenidoSlide3(<img src={img3} alt="foto de carousel" />);
	// };
	// const handleMouseOverSlide4 = () => {
	// 	return setContenidoSlide4(
	// 		<p className="proyectos_textoHover">
	// 			Armado de manual de marca y logo para que represente una marca con
	// 			fuerza, seducción y sensualidad.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide4 = () => {
	// 	setContenidoSlide4(<img src={img4} alt="foto de carousel" />);
	// };
	// const handleMouseOverSlide5 = () => {
	// 	return setContenidoSlide5(
	// 		<p className="proyectos_textoHover">
	// 			Promoción de solución oftálmica para animales siguiendo el manual de
	// 			marca, asegurando coherencia visual y transmitiendo mensajes clave en
	// 			canales en línea y offline.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide5 = () => {
	// 	setContenidoSlide5(<img src={img5} alt="foto de carousel" />);
	// };
	// const handleMouseOverSlide6 = () => {
	// 	return setContenidoSlide6(
	// 		<p className="proyectos_textoHover">
	// 			Demostramos que todo lo que buscas para armar tu living o tu hogar lo
	// 			encontras en un solo lugar. Priorizando los colores de marca ya elegidos
	// 			para diferenciarse de la competencia.
	// 		</p>
	// 	);
	// };

	// const handleMouseLeaveSlide6 = () => {
	// 	setContenidoSlide6(<img src={img6} alt="foto de carousel" />);
	// };

	return (
		<div className="proyectos">
			<div>
				<h2 className="proyectos_titulo">Proyectos</h2>
			</div>
			<div style={{height: "40vh"}}>
				{" "}
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={false}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
				</Carousel>
			</div>
			;
			{/* <Swiper
				grabCursor={true}
				centeredSlides={isSmallScreen ? true : false}
				loop={false}
				slidesPerView={isSmallScreen ? "1" : "2"}
				navigation={{
					nextEl: ".proyectos_swiper_button_next",
					prevEl: ".proyectos_swiper_button_prev",
					clickable: true,
				}}
				modules={[Navigation]}
				className="proyectos_swiper_container"
				spaceBetween={80}
			>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide1}
						onMouseLeave={handleMouseLeaveSlide1}
						className="proyectos_slide"
					>
						{contenidoSlide1}
					</div>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide2}
						onMouseLeave={handleMouseLeaveSlide2}
						className="proyectos_slide"
					>
						{contenidoSlide2}
					</div>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide3}
						onMouseLeave={handleMouseLeaveSlide3}
						className="proyectos_slide"
					>
						{contenidoSlide3}
					</div>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide4}
						onMouseLeave={handleMouseLeaveSlide4}
						className="proyectos_slide"
					>
						{contenidoSlide4}
					</div>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide5}
						onMouseLeave={handleMouseLeaveSlide5}
						className="proyectos_slide"
					>
						{contenidoSlide5}
					</div>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<div
						onMouseOver={handleMouseOverSlide6}
						onMouseLeave={handleMouseLeaveSlide6}
						className="proyectos_slide"
					>
						{contenidoSlide6}
					</div>
				</SwiperSlide>
			</Swiper>
			<div>
				<div className="proyectos_swiper_button_prev">
					<img
						className="proyectos_flecha_prev"
						src={prevArrow}
						alt="flecha prev"
					/>
				</div>
				<div className="proyectos_swiper_button_next">
					<img
						className="proyectos_flecha_next"
						src={nextArrow}
						alt="flecha next"
					/>
				</div>
			</div> */}
		</div>
	);
};

export default Proyectos;
