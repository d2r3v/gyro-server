const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server first
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from server!');
});

// Create a WebSocket server attached to the HTTP server
const ws = new WebSocket.Server({ server });

ws.on('message', (message) => {
    try {
        // Parse the received JSON message
        const gyroData = JSON.parse(message);
        console.log('Received gyroscope data:', gyroData);
    } catch (error) {
        console.log('Error parsing message:', error);
    }
});


// Listen for incoming requests on port 8080
server.listen(8080, '0.0.0.0', () => {
    console.log('Server is listening on ws://0.0.0.0:8080');
});
