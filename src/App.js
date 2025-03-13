import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuiSuisje from "./pages/QuiSuisje";
import Competences from "./pages/Competences";
import MesProjets from "./pages/MesProjets";
import Header from "./components/Header";
import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import "./blocks/Backgrounds/Aurora/Aurora.css";
import "./styles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Aurora colorStops={["#66B5FF", "#66B5FF", "#66B5FF"]} speed={0.5} />

        <Header />
        <Routes>
          <Route path="/" element={<QuiSuisje />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/mesprojets" element={<MesProjets />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
