import "./styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
