//Node server that will handle socket io connection
const io=require('socket.io')(8000)

const users={};

io.on('connection',socket =>{
    socket.on('new-user-joined', nameof=>{
        console.log("New user",nameof)
        users[socket.id] = nameof;
        socket.broadcast.emit('user-joined',nameof);

    });
    socket.on('send',message =>{
        socket.broadcast.emit('recieve',{message:message,name : users[socket.id]})
    });
})
