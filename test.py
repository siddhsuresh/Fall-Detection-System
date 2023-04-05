import websockets
import asyncio
import json

async def main():
    async with websockets.connect('ws://localhost:4000/socket/websocket?token=undefined&vsn=2.0.0') as websocket:
        data = dict(topic="sensor:lobby", event="phx_join", payload={}, ref=None)
        #this method joins the phoenix channel
        await websocket.send(json.dumps(data))
        print("Joined")

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())
    asyncio.get_event_loop().run_forever()