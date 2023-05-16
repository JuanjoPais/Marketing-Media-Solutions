import images from "./exports/images";
import {motion} from "framer-motion";

const Slider = () => {
	return (
		<motion.div className="slider">
			<motion.div
				className="slider_container"
				drag="x"
				dragConstraints={{right: 0, left: -1350}} //esto hay q verlo para ajustarlo  a los saltos de pantalla
			>
				{images.map((image) => (
					<motion.div className="slider_item">
						<img src={image} alt="" />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Slider;
