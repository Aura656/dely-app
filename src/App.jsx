import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import Persona from "./pages/Persona";
import Vendedor from "./pages/Vendedor";
import { useState } from "react";
import PerfilUsuario from "./pages/PerfilUsuario";
import PerfilTienda from "./pages/PerfilTienda";
import ChatPersona from "./components/ChatPersona";
import ChatVendedor from "./components/ChatVendedor";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/vendedor" element={<Vendedor />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/perfil-tienda" element={<PerfilTienda />} />
          <Route path="/chat-persona" element={<ChatPersona />} />
          <Route path="/chat-vendedor" element={<ChatVendedor />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
