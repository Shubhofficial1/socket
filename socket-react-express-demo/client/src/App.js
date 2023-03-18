import "./App.css";
import react, { useState, useEffect } from "react";
import io from "socket.io-client";
function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const socket = io.connect("/");
    socket.on("msg", (data) => {
      setMessage(data);
    });
  }, []);
  return <div className="App">{message}</div>;
}

export default App;
