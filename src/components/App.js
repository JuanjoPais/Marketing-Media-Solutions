import "./styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/proyectos" element={<Proyectos/>}/>
      <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
