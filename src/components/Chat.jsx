// Chat.jsx
import ChatPersona from "./ChatPersona";
import ChatVendedor from "./ChatVendedor";

// CAMBIA este valor a "persona" o "vendedor" para mostrar el chat deseado
const tipo = "persona"; // o "vendedor"

function Chat() {
  return tipo === "persona" ? <ChatPersona /> : <ChatVendedor />;
}

export default Chat;
