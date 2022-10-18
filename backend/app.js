const express = require('express')
const io = require('socket.io')

//Server setup
const app = express()


const server=app.listen('3003', ( req, res)=>{
    console.log('server listening on port 3003...')
})

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))


//Sockets
const socket=io(server)
socket.on("connection" , (socket) => {
    console.log("User connected: " + socket.id)

    socket.on('join-table', function(){
        console.log('user joined table')    
    })
    
    socket.on('next-turn', function(){
        console.log('next turn')
    })

    socket.on('test', function(){
        console.log('test successful')
    })

})

app.get('/', ( req, res)=>{
    res.render("index")
})