const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});
const { spawn } = require("node:child_process");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.post("/store", (req, res) => {
  // get the acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z from the request body
  const { acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z } = req.body;
  console.log(req.body);
  // emit the data to the client
  io.emit("data", { acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z });
  //spwan a new task python3 "model/main.py" acc_x, acc_y, acc_z
  const python = spawn("python3",["./model/main.py", acc_x, acc_y, acc_z]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    const prediction = data.toString();
    console.log(prediction);
    // emit the prediction to the client
    io.emit("prediction", { prediction });
  });
  python.stdout.on("end", function () {
    res.send("end");
  });
  python.stderr.on('data', (data) => {
    console.error(`ps stderr: ${data}`);
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("data", (data) => {
    console.log(data);
    io.emit("data", data);
  });
  socket.on("prediction", (data) => {
    console.log(data);
    io.emit("prediction", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
