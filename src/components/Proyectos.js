import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation} from "swiper";
import prevArrow from "./left-arrow.png";
import nextArrow from "./right-arrow.png";

import img1 from "./fotosCarousel/1.png";
import img2 from "./fotosCarousel/2.png";
import img3 from "./fotosCarousel/3.png";
import img4 from "./fotosCarousel/4.png";
import img5 from "./fotosCarousel/5.png";
import img6 from "./fotosCarousel/6.png";

const Proyectos = () => {
	return (
		<div className="proyectos">
			<div>
				<h2 className="proyectos_titulo">Proyectos</h2>
			</div>
			<Swiper
				grabCursor={true}
				centeredSlides={false}
				loop={true}
				slidesPerView={"3"}
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
					<img className="proyectos_slide" src={img1} alt="fotoCarousel"></img>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<img className="proyectos_slide" src={img2} alt="fotoCarousel"></img>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<img className="proyectos_slide" src={img3} alt="fotoCarousel"></img>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<img className="proyectos_slide" src={img4} alt="fotoCarousel"></img>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<img className="proyectos_slide" src={img5} alt="fotoCarousel"></img>
				</SwiperSlide>
				<SwiperSlide className="proyectos_imgContainer">
					<img className="proyectos_slide" src={img6} alt="fotoCarousel"></img>
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
			</div>
		</div>
	);
};

export default Proyectos;
