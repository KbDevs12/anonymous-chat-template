
const express = require("express");
const http = require("http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// Port untuk server
const port = 3000;

// Inisialisasi Next.js
nextApp.prepare().then(() => {
  const app = express();
  const server = http.createServer(app);
  
  // Inisialisasi Socket.IO
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Socket.IO event handlers
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (room) => {
      socket.join(room);
    });

    socket.on("message", (data) => {
      io.to(data.room).emit("message", data.message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  // Handle Next.js requests
  app.all("*", (req, res) => {
    return nextHandler(req, res);
  });

  // Start server
  server.listen(port, () => {
    console.log(`> Server is running on http://localhost:${port}`);
  });
});