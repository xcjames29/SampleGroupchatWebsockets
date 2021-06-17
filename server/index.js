const PORT = 8222;
// const websocket = require('ws');

// const server = new websocket.Server({
//     port:PORT
// });
// server.on('connection',(socket) =>{
//     console.log('Someone connecter');
//     socket.on('message',(message)=>{
//         console.log("Message", message);
//         if(message) socket.send("Hello there!");
//     })
    
// })

const http = require("http").createServer();

const socket = require('socket.io');
const io = socket(http,{
    cors: {origin:'*'}
});

io.on('connection', (socket)=>{
    console.log("client connected",socket.id);
    socket.on("message", (data)=>{
        console.log("data,", data);
        io.emit("message", socket.id.substr(0,4) +" "+data )
    })
})
http.listen(PORT,()=>{
    console.log("listening on localhost:"+PORT);
})

