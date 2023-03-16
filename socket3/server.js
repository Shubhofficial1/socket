require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");

  socket.join("kitchen-room");
  let roomSize = io.sockets.adapter.rooms.get("kitchen-room").size;
  io.sockets.in("kitchen-room").emit("cooking", "Cooking Maggi" + roomSize);
  io.sockets.in("kitchen-room").emit("boiling", "Boiling Water");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || "development";
expressServer.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT} in ${MODE} mode`);
});
