import { useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import StoreCard from "../components/StoreCard";
import { stores } from "../mock/stores";
import "./Persona.css";

function Persona() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedGood, setSelectedGood] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Filtramos los stores según filtros aplicados
  const filteredStores = stores.filter((store) => {
    const matchType = selectedType ? store.type === selectedType : true;
    const matchGood = selectedGood ? store.goods?.includes(selectedGood) : true;
    const matchDistrict = selectedDistrict ? store.district === selectedDistrict : true;
    return matchType && matchGood && matchDistrict;
  });

  return (
    <>
      <Navbar tipo="persona" />
      <Filters
        tipo="persona"
        selectedType={selectedType}
        onTypeChange={(val) => {
          setSelectedType(val);
          setSelectedGood(""); // Reinicia bien específico cuando cambia tipo
        }}
        selectedGood={selectedGood}
        onGoodChange={setSelectedGood}
        selectedDistrict={selectedDistrict}
        onDistrictChange={setSelectedDistrict}
      />
      <div className="store-grid">
        {filteredStores.map((s) => (
          <StoreCard key={s.id} store={s} />
        ))}
      </div>
    </>
  );
}

export default Persona;
