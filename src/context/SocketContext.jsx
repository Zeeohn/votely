import { createContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();
const socket = io.connect("http://localhost:5000");

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
