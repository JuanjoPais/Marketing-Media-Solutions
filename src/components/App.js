import "./styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

function App() {
	return (
		<>
			<Header id="header" />

			<div id="quienSoy">
				<Main />
			</div>

			<div id="servicios">
				<Servicios />
			</div>
			<div id="proyectos">
				<Proyectos />
			</div>
			<Contacto />

			<Footer />
		</>
	);
}

export default App;
