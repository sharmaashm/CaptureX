const socketIo = require("socket.io"); // Import socket.io correctly
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {  // Use socketIo instead of `new Server`
    cors: {
        origin: ['https://insta-clone-ge0o.onrender.com'],
        methods: ['GET', 'POST']
    }
});

const userSocketMap = {}; // This map stores socket ID corresponding to the user ID; userId -> socketId

const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        if (userId) {
            delete userSocketMap[userId];
        }
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

module.exports = { app, server, io, getReceiverSocketId };
