const socket=io('http://localhost:8000');

const form= document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messagecontainer=document.querySelector(".container");

const append=(message,position)=>{
    
}

const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined',data=>{

})