require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected !");

  setInterval(() => {
    let date = new Date();
    let time = date.getTime();
    socket.send(time);
  }, 1000);

  //   setTimeout(() => {
  //     socket.send("Hello There");
  //   }, 5000);

  //   socket.on("disconnect", () => {
  //     console.log("User Disconnected !");
  //   });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || "development";

expressServer.listen(PORT, () => {
  console.log(`Server is running in ${MODE} on PORT ${PORT}`);
});
