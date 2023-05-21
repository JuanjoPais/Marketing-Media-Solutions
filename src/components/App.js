import "./styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";

function App() {
	return (
		<>
			<Header />
			<div id="quienSoy">
				<Main />
			</div>

			<div id="servicios">
				<Servicios />
			</div>
			<div id="proyectos">
				<Proyectos />
			</div>

			<Footer />
		</>
	);
}

export default App;
