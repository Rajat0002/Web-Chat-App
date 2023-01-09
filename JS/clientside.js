const socket=io('http://localhost:8000');

const form= document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messagecontainer=document.querySelector(".container");

var audio= new Audio('sound.mp3');


const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    if(position==left){
    audio.play();
    }
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const message=messageInput.value;
  append(`You : ${message}`,'right')
  socket.emit('send',message);
  messageInput.value=''
})
const nameof= prompt("Enter your name to join");
socket.emit('new-user-joined', nameof);

socket.on('user-joined',nameof=>{
   append(`${nameof} joined the chat`,'right')
})

socket.on('receive',data=>{
    append(`${data.nameof}: ${data.message}`,'left')
 })
 socket.on('left',nameof=>{
  append(`${nameof} left the chat`,'left')
})