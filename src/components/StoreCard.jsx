// src/components/StoreCard.jsx
import { MapPin, Tags, Clock, Truck, Star, Percent } from "lucide-react";
import "./StoreCard.css";

function StoreCard({ store, tipo = "persona" }) {
  return (
    <div className={`store-card ${tipo}`}>
      <img src={store.image} alt={store.name} />
      <div className="store-content">
        <h3>{store.name}</h3>

        <div className="info-line">
          <Tags size={16} /> {store.type}
        </div>
        <div className="info-line">
          <MapPin size={16} /> {store.district}
        </div>
        <div className="info-line">
          <Clock size={16} /> {store.schedule ?? "08:00 - 18:00"}
        </div>
        <div className="info-line">
          <Truck size={16} /> {store.delivery ? "Delivery disponible" : "Sin delivery"}
        </div>
        <div className="info-line">
          <Star size={16} /> {store.rating ?? "4.5"} / 5
        </div>

        {store.offer && (
          <div className="offer-badge">
            <Percent size={14} /> {store.offer}
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreCard;
