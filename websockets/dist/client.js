import { WebSocket } from "ws";
const ws = new WebSocket("http://localhost:8080");
ws.on('error', console.error);
ws.on('open', function open() {
    console.log("hey postman");
});
ws.on('message', function message(data) {
    console.log(`null`);
});
//# sourceMappingURL=client.js.map