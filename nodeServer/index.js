//Node server that will handle socket io connection
const io=require('socket.io')(8000)

const users={};

io.on('connection',socket =>{
    socket.on('user-joined',name=>{
        
    })
})
