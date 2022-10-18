const nextTurnBtn=document.querySelector('.next-turn')
const joinTableBtn=document.getElementById('join-table-btn')

//Connection
let connection=()=>{
    window.open("table.html")

     
}

let nextTurn=()=>{
    socket = io.connect('http://localhost:3003')
    socket.emit('next-turn')
}

let test=()=>{
    socket.emit('test')
}