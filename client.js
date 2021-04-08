const server = document.querySelector("input");
const leave = document.querySelector("#leave");
const joinButton = document.querySelector('#join');
const tile = document.querySelectorAll(".board-item");
let mark = null;
let opponentMark = null;


joinButton.addEventListener('click',()=>{
    
    const socket = new WebSocket(`ws://localhost:3001`)
    joinButton.style.display = "none";
    server.style.display = "none";;

    gameOver = false;

    tile.forEach((el,id) => {
        el.addEventListener('click',() =>{
            socket.send(id)
        });
       });
    
 

    socket.addEventListener("message",({data}) => {
        exeEvent(data);
    });

    leave.addEventListener('click',() => {
        socket.send("Q");
        joinButton.style.display = "block";
        server.style.display = "block";;
    });

});


exeEvent = (data) =>{

    if(data.startsWith("VALID")){
        let posMe = data[5]
        tile[posMe].firstChild.innerText = mark
    }

    if(data.startsWith("INVALID")){
        alert(data)
    }

    if(data.startsWith("Opponent")){
        let posOpp = data[8];
        tile[posOpp].firstChild.innerText = opponentMark
    }

    if(data.startsWith("Welcome")){
    mark = data[8];
    opponentMark = mark === 'X' ? 'O' : 'X';
    }


    console.log(data)


}




