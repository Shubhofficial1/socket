require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.end("Server is running ");
});

io.on("connection", (socket) => {
  console.log("New User Connected!");

  setTimeout(() => {
    socket.emit("msg", "This is a msg from backend server");
  }, 3000);

  socket.on("disconnect", () => {
    console.log("User Disconnected!");
  });
});

const PORT = process.env.PORT || 5001;
const MODE = process.env.MODE || "development";

expressServer.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT} in ${MODE} mode`);
});
