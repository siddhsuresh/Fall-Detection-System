from fastapi import FastAPI
from api.router.websocket import SocketManager
from api.router.views import router

app = FastAPI()

app.include_router(router)
SocketManager.mount_to("/ws", app)