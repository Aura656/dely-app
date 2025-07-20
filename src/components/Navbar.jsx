import { FaComments, FaSearch, FaStore, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ tipo = "persona" }) {
  const navigate = useNavigate();
  const navbarClass = `navbar ${tipo}`;

  const irAlChat = () => {
    if (tipo === "persona") {
      navigate("/chat-persona");
    } else {
      navigate("/chat-vendedor");
    }
  };

  return (
    <nav className={navbarClass}>
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Logo PideYA"
          className="navbar-logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <input type="text" placeholder="Buscar..." />
          <button onClick={() => {/* opcional: lógica de búsqueda */}}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        {tipo === "persona" ? (
          <button onClick={() => navigate("/perfil")}>
            <FaUser />
          </button>
        ) : (
          <button onClick={() => navigate("/perfil-tienda")}>
            <FaStore />
          </button>
        )}
        <button onClick={irAlChat}>
          <FaComments />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
