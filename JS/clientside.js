const socket=io('http://localhost:8000');

const form= document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messagecontainer=document.querySelector(".container");

const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
}

const nameof= prompt("Enter your name to join");
socket.emit('new-user-joined', nameof);

socket.on('user-joined',nameof=>{
   append(`${nameof} joined the chat`,'right')
})

socket.on('receive',data=>{
    append(`${data.message}: ${data.user}`,'right')
 })