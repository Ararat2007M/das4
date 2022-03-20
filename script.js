// var p = document.getElementById("pElement")
// var number = 0;

// function whenclicked(event){
//     console.log(event)
//     p.innerText("yeeey clicked" + num)
//     count++
// }

// p.addEventListener("click",whenclicked)
//  p.onclick = whenclicked




module.exports = function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit() {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   