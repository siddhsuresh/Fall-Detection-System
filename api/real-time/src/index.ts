import { Elysia, t, ws } from "elysia";
import { cors } from "@elysiajs/cors";
import { Database } from "bun:sqlite";
import { swagger } from "@elysiajs/swagger";

const db = new Database("mydb.sqlite", { create: true });

db.exec(`CREATE TABLE IF NOT EXISTS store (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    acc_x REAL,
    acc_y REAL, 
    acc_z REAL,
    gyro_x REAL,
    gyro_y REAL,
    gyro_z REAL,
    fall REAL
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);`);

interface rows {
  acc_x: number[];
  acc_y: number[];
  acc_z: number[];
  gyro_x: number[];
  gyro_y: number[];
  gyro_z: number[];
}

let hashtable: rows = {
  acc_x: [],
  acc_y: [],
  acc_z: [],
  gyro_x: [],
  gyro_y: [],
  gyro_z: [],
};

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(swagger())
  .use(cors())
  .use(ws())
  .get("/store", () => {
    const query = db.query(`SELECT * FROM store;`);
    const rows = query.all();
    return rows;
  })
  .post(
    "/store",
    async ({ body }) => {
      //@ts-ignore
      const { acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z } = body;
      const acc_x_float = parseFloat(acc_x);
      const acc_y_float = parseFloat(acc_y);
      const acc_z_float = parseFloat(acc_z);
      const gyro_x_float = parseFloat(gyro_x);
      const gyro_y_float = parseFloat(gyro_y);
      const gyro_z_float = parseFloat(gyro_z);
      console.log([
        acc_x_float,
        acc_y_float,
        acc_z_float,
        gyro_x_float,
        gyro_y_float,
        gyro_z_float,
      ]);
      const socket = new WebSocket("ws://localhost:3001/ws");
      socket.onopen = () => {
        socket.send(
          JSON.stringify({
            time: Date.now(),
            acc_x,
            acc_y,
            acc_z,
            gyro_x,
            gyro_y,
            gyro_z,
          })
        );
      };
      try {
        console.log("running python script");
        const { stdout } = Bun.spawn([
          "python3",
          "model/main.py",
          `${acc_x_float}`,
          `${acc_y_float}`,
          `${acc_z_float}`,
        ]);
        const text = await new Response(stdout).text();
        console.log("Prediction: ", text);
        db.exec(
          `INSERT INTO store (acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, fall) VALUES (${acc_x_float}, ${acc_y_float}, ${acc_z_float}, ${gyro_x_float}, ${gyro_y_float}, ${gyro_z_float}, ${text});`
        );
        const predSocket = new WebSocket(
          "ws://localhost:3001/ws/fall-detection"
        );
        predSocket.onopen = () => {
          socket.send(
            JSON.stringify({
              time: Date.now(),
              prediction: text,
            })
          );
        };
      } catch (e) {
        console.log(e);
      }
      return { status: 200, body: { message: "success" } };
    }
  )
  .ws("/ws", {
    schema: {
      body: t.Object({
        time: t.Number(),
        acc_x: t.String(),
        acc_y: t.String(),
        acc_z: t.String(),
        gyro_x: t.String(),
        gyro_y: t.String(),
        gyro_z: t.String(),
      }),
    },
    open(ws){
      ws.subscribe("store")
      ws.publish("store","ESP32 has connected")
    },
    message(ws, message) {
      ws.send(message);
      // broadcast the message to all connected clients
      ws.publish("store", message);
    },
    close(ws){
      ws.unsubscribe("store")
      ws.publish("ESP32 has connected")
    }
  })
  .ws("/ws/fall-detection", {
    schema: {
      body: t.Object({
        time: t.Number(),
        prediction: t.String(),
      }),
    },
    message(ws, body) {
      ws.send(body);
      // broadcast the message to all connected clients
      ws.publish("prediction", body);
    },
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
