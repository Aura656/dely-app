import { useEffect } from "react";
import "./Splash.css";

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Llama a la función cuando pasan los segundos
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src="/logo.png" alt="Logo Dely" className="splash-logo" />
    </div>
  );
}

export default Splash;
