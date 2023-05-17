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
			<Main id="quienSoy" />
			<Servicios id="servicios" />
			<Proyectos id="proyectos" />
			<Footer />
		</>
	);
}

export default App;
