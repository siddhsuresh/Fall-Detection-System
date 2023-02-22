from ast import List
from logging import Logger
import time
from api.model.load import model
import socketio

def handle_connect(sid, environ):
    Logger.info(f"Socket connected with sid {sid}")
    print(environ)

class SocketManager:
    app: socketio.ASGIApp
    def __init__(self, origins: List[str]):
        self.server = socketio.AsyncServer(
            cors_allowed_origins=origins,
            async_mode="asgi",
            logger=True,
            engineio_logger=True,
        )
        self.app = socketio.ASGIApp(self.server)

    @property
    def on(self):
        return self.server.on

    @property
    def send(self):
        return self.server.send

    def mount_to(self, path: str, app: socketio.ASGIApp):
        app.mount(path, self.app)


settings = {
    "origins": ["http://localhost:3000"],
}

socket_manager = SocketManager(settings.origins)
socket_manager.on("connect", handler=handle_connect)

def predict_fall(data = [[1.15041235, 0.94879958, 5.50766259, 1.39958032, 1.02742593, 2.95343321, 2.19231136, 1.71787736]]):
    Logger.info(f"Received data: ", data)
    time_start = time.time()
    predictions = model.predict(data)
    time_end = time.time()
    print("Time taken to predict: " + str(time_end - time_start) + " seconds")
    if predictions == 1:
        socket_manager.send("fall_detected", "Fall detected")
    else:
        socket_manager.send("fall_detected", "No fall detected")

socket_manager.on("predict_fall", handler=predict_fall)