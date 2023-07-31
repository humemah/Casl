import React, { useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('https://192.168.1.234:4444/',{ transports: ['polling'] });
// const io = require("socket.io-client");

function MyComponent() {
socket.emit("server-event", { "module":"UserProfile","key":"12","logType":"view","payload":{"abc":123},"is_success":false
});

// Listen for the "client-event" event from the server
socket.on("client-event", (data) => {
  console.log(`Received client-event with message: ${data.message}`);
});

  return <div>Hello, Socket.IO!</div>;
}

export default MyComponent;