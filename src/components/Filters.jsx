// src/components/Filters.jsx
import "./Filters.css";
import { useState, useEffect } from "react";

const typeOptions = [
  { value: "", label: "Tipo de bien" },
  { value: "Frutas", label: "Frutas" },
  { value: "Verduras", label: "Verduras" },
  { value: "Menestras", label: "Menestras" },
  { value: "Frutas y Verduras", label: "Frutas y Verduras" },
  { value: "Mixto", label: "Mixto" },
];

const goodsByType = {
  Frutas: ["Manzana", "Plátano", "Naranja"],
  Verduras: ["Zanahoria", "Apio", "Lechuga"],
  Menestras: ["Lenteja", "Frijol", "Garbanzo"],
  "Frutas y Verduras": ["Manzana", "Zanahoria", "Lechuga"],
  Mixto: ["Manzana", "Lenteja", "Apio"],
};

const districtOptions = [
  { value: "", label: "Distrito" },
  { value: "Huancayo", label: "Huancayo" },
  { value: "El Tambo", label: "El Tambo" },
  { value: "Chilca", label: "Chilca" },
];

function Filters({
  selectedType,
  onTypeChange,
  selectedGood,
  onGoodChange,
  selectedDistrict,
  onDistrictChange,
  tipo = "persona",
}) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    if (selectedType && goodsByType[selectedType]) {
      setGoods(goodsByType[selectedType]);
    } else {
      setGoods([]);
    }
  }, [selectedType]);

  return (
    <div className={`filters ${tipo}`}>
      {/* Tipo de bien */}
      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        {typeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Bien específico */}
      {goods.length > 0 && (
        <select value={selectedGood} onChange={(e) => onGoodChange(e.target.value)}>
          <option value="">Seleccione un bien</option>
          {goods.map((good) => (
            <option key={good} value={good}>
              {good}
            </option>
          ))}
        </select>
      )}

      {/* Distrito */}
      <select value={selectedDistrict} onChange={(e) => onDistrictChange(e.target.value)}>
        {districtOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
