let message = document.getElementById("message");
let toSend = document.getElementById("messageInput");
let send = document.getElementById("send");

// let socket = new WebSocket("ws://localhost:8222")
// socket.onopen = (e) =>{
//     console.log("Connected to server");
    
// }
// socket.onmessage = (e)=>{
//     console.log(e.data);
//     message.innerText = e.data;
// }




const socket = io('ws://localhost:8222')
socket.on("connect", ()=>{
    console.log("Connected!!");
})

send.addEventListener("click",(e)=>{
    console.log(toSend.value);
    socket.send(toSend.value);
})

socket.on("message", (data)=>{
    console.log(data);
    let newLi = document.createElement("li");
    newLi.innerText = data;
    message.append(newLi);
})
