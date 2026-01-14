import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port: 8080})

wss.on('error', console.error);

wss.on('connection', function connection(ws){
    ws.on('ping', ()=>{console.log('pong')})
    console.log('connection established')
    ws.send('Server ->connection established')
    ws.on('message', function message(data:any){
        console.log(`client -> ${data}`)
    })
    ws.send('Server -> Hey postman')
})