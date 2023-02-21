import time
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
import joblib
import sys

sys.modules['sklearn.externals.joblib'] = joblib

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""

model = joblib.load("./model/fall_detector.joblib")

@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        test_features = await websocket.receive_text()
        test = [[1.15041235, 0.94879958, 5.50766259, 1.39958032, 1.02742593,
       2.95343321, 2.19231136, 1.71787736]]
        time_start = time.time()
        predictions = model.predict(test)
        time_end = time.time()
        print("Time taken to predict: " + str(time_end - time_start))
        print("Predicted Result: ", predictions)
        await websocket.send_text(f"Message text was: {predictions}")