require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

// io.on("connection", (socket) => {
// console.log("New User Connected !");

//   socket.on("disconnect", () => {
//     console.log("User Disconnected !");
//   });

// Implementation for Data transfer after some time

//   setTimeout(() => {
//     socket.send("Hello There");
//   }, 5000);

// Implementation of Data transfer on certain intervals

//   setInterval(() => {
//     let date = new Date();
//     let time = date.getTime();
//     socket.send(time);
//   }, 1000);

// Implementation of custom event

//   setInterval(() => {
//     let date = new Date();
//     let time = date.getTime();
//     socket.emit("MyEvent", time);
//   }, 1000);

//   Getting Data from client to server

//   socket.on("message", (msg) => {
//     console.log(msg);
//   });

//   getting Data from client to server using custom Event

// socket.on("MyEvent", (msg) => {
//   console.log(msg);
// });

// Broadcast Implementation

// io.sockets.emit("MyBroadcast", "Hello World");
// });

// Namespace

// let first = io.of("/first");
// first.on("connection", (socket) => {
//   first.emit("MyEvent", "Hello First");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || "development";

expressServer.listen(PORT, () => {
  console.log(`Server is running in ${MODE} on PORT ${PORT}`);
});
