// src/pages/Home.jsx
import "./Home.css";
import { FaUser, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a PideYA</h1>

      <div className="role-buttons">
        <button
          className="role-button persona"
          onClick={() => navigate("/persona")}
        >
          <FaUser className="role-icon" />
          <span>Persona Natural</span>
        </button>

        <button
          className="role-button vendedor"
          onClick={() => navigate("/vendedor")}
        >
          <FaStore className="role-icon" />
          <span>Vendedor</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
