import { useState } from "react";
import {
  FaSmile,
  FaImage,
  FaVideo,
  FaStickyNote,
} from "react-icons/fa";
import Navbar from "./Navbar";
import "./Chat.css";

function ChatPersona() {
  const [chatActivo, setChatActivo] = useState("Tienda Central");

  return (
    <>
      <Navbar tipo="persona" />
      <div className="chat-container chat-persona">
        <aside className="chat-list fixed-style">
          <ul>
            {["Tienda Central", "Market La Esquina", "Ferretería Perú"].map((tienda) => (
              <li
                key={tienda}
                className={`chat-item vertical ${chatActivo === tienda ? "active" : ""}`}
                onClick={() => setChatActivo(tienda)}
              >
                <div className="avatar-circle avatar-naranja"></div>
                <span className="chat-name">{tienda}</span>
              </li>
            ))}
          </ul>
        </aside>

        <section className="chat-content">
          <div className="chat-header">{chatActivo}</div>

          <div className="chat-messages">
            <div className="message received">Hola, ¿qué productos tiene hoy?</div>
            <div className="message sent persona">Tenemos papas, zanahoria y tomate frescos.</div>
            <div className="message received">¡Perfecto! Enviaré a recoger.</div>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Escribe tu mensaje..." />
            <div className="chat-icons">
              <FaSmile />
              <FaStickyNote />
              <FaImage />
              <FaVideo />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ChatPersona;
