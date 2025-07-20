import { useState } from "react";
import {
  FaSmile,
  FaImage,
  FaVideo,
  FaStickyNote,
} from "react-icons/fa";
import Navbar from "./Navbar";
import "./Chat.css";

function ChatVendedor() {
  const [chatActivo, setChatActivo] = useState("Cliente A");

  return (
    <>
      <Navbar tipo="vendedor" />
      <div className="chat-container chat-vendedor">
        <aside className="chat-list fixed-style">
          <ul>
            {["Cliente A", "Cliente B", "Cliente C"].map((cliente) => (
              <li
                key={cliente}
                className={`chat-item vertical ${chatActivo === cliente ? "active" : ""}`}
                onClick={() => setChatActivo(cliente)}
              >
                <div className="avatar-circle avatar-morado"></div>
                <span className="chat-name">{cliente}</span>
              </li>
            ))}
          </ul>
        </aside>

        <section className="chat-content">
          <div className="chat-header">{chatActivo}</div>

          <div className="chat-messages">
            <div className="message received">¿A qué hora llega mi pedido?</div>
            <div className="message sent vendedor">En 10 minutos, ya va en camino.</div>
            <div className="message received">Gracias, estaré atento.</div>
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

export default ChatVendedor;
