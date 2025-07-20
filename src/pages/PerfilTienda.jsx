import Navbar from "../components/Navbar";
import {
  Tag,
  MapPin,
  Clock,
  Truck,
  Star,
  Percent,
  Eye,
  Store
} from "lucide-react";
import "./PerfilTienda.css";
import tiendaPreview from "/tienda.jpg"; // ejemplo de imagen de tienda

function PerfilTienda() {
  const storePreview = {
    name: "Frutas El Sol",
    type: "Frutas",
    district: "Huancayo",
    image: tiendaPreview,
    schedule: "08:00 - 18:00",
    delivery: true,
    rating: 4.7,
    offer: "2x1 en papayas"
  };

  return (
    <>
      <Navbar tipo="vendedor" />
      <div className="perfil-tienda-container">
        {/* Formulario de tienda */}
        <div className="perfil-tienda-card">
          <div className="seccion-tienda">
            <h3><Store size={18} /> Información de la Tienda</h3>
          </div>

          <div className="tienda-header">
            <div className="tienda-imagen">IMG</div>
            <div className="tienda-info">
              <input
                type="text"
                className="input-tienda"
                placeholder="Nombre de tienda"
                defaultValue=""
              />
              <input
                type="text"
                className="input-tienda"
                placeholder="Tipo de producto"
                defaultValue=""
              />
              <input
                type="text"
                className="input-tienda"
                placeholder="Distrito"
                defaultValue=""
              />
              <input
                type="text"
                className="input-tienda"
                placeholder="Horario"
                defaultValue=""
              />
            </div>
          </div>

          <div className="seccion-tienda">
            <h3><Tag size={18} /> Productos que vendes</h3>
            <div className="checkboxes">
              <label><input type="checkbox" /> Papaya</label>
              <label><input type="checkbox" /> Plátano</label>
              <label><input type="checkbox" /> Fresa</label>
            </div>
          </div>

          <div className="seccion-tienda">
            <h3><Truck size={18} /> Opciones adicionales</h3>
            <div className="checkboxes">
              <label><input type="checkbox" /> Delivery disponible</label>
              <label><input type="checkbox" /> Descuento por volumen</label>
            </div>
          </div>

          <div className="botones-tienda">
            <button className="btn-tienda">Guardar cambios</button>
            <button className="btn-tienda">Editar perfil</button>
          </div>
        </div>

        {/* Vista previa de la tienda */}
        <div className="preview-container">
          <div className="seccion-tienda">
            <h3><Eye size={18} /> Vista previa</h3>
          </div>
          <div className="preview-card">
            <img src={storePreview.image} alt="preview" />
            <div className="preview-content">
              <h3>{storePreview.name}</h3>
              <div className="info-line"><Tag size={16} /> {storePreview.type}</div>
              <div className="info-line"><MapPin size={16} /> {storePreview.district}</div>
              <div className="info-line"><Clock size={16} /> {storePreview.schedule}</div>
              <div className="info-line">
                <Truck size={16} /> {storePreview.delivery ? "Delivery disponible" : "Sin delivery"}
              </div>
              <div className="info-line"><Star size={16} /> {storePreview.rating} / 5</div>
              {storePreview.offer && (
                <div className="offer-badge">
                  <Percent size={14} /> {storePreview.offer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilTienda;
