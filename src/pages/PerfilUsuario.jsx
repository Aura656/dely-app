import "./PerfilUsuario.css";
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaTransgender, FaKey, FaEdit } from "react-icons/fa";

function PerfilUsuario() {
  return (
    <>
      <Navbar />
      <div className="perfil-container">
        <div className="perfil-card">
          <div className="foto-perfil"></div>
          <h2 className="perfil-nombre">María Pérez</h2>

          {/* Información Personal */}
          <div className="perfil-section">
            <h3 className="subtitulo">Información Personal</h3>
            <div className="perfil-info">
              <p><FaEnvelope /> maria.perez@example.com</p>
              <p><FaPhone /> +51 987 654 321</p>
              <p><FaTransgender /> Femenino</p>
              <p>Fecha de nacimiento: 12/08/1996</p>
              <p>Distrito: El Tambo</p>
              <p>Edad: 28 años</p>
            </div>
          </div>

          {/* Botones */}
          <div className="perfil-actions">
            <button>
              <FaEdit /> Editar perfil
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilUsuario;
