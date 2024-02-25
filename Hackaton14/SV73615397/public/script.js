const socket = io();

let message = document.getElementById("message");
let username = document.getElementById("username");
let username_login = document.getElementById("username_login");
let password = document.getElementById("password");
let btn = document.getElementById("send");
let btnLogin = document.getElementById("login");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

message.addEventListener("keypress",()=>{
    socket.emit("typing",username.value);
});

btn.addEventListener("click",()=>{
    socket.emit("chat_message",{
        "username":username.value,
        "message":message.value
    });
});

btnLogin.addEventListener("click",()=>{
    let userLogin = {
        "username":username_login.value,
        "password":password.value
    };
    socket.emit("login",userLogin);
});

socket.on("login from server",(data)=>{
    console.log(data);
    if(data !== undefined){
        localStorage.setItem("userloged", JSON.stringify(data));
        username.value = data.username;
        message.disabled = false;
        document.getElementById("loginDisplay").innerHTML = `<h2>${data.username} ha iniciado sesión!!</h2>`;
    }
});

socket.on("message from server",(data)=>{
    actions.innerHTML='';
    output.innerHTML += `<p><b>${data.username}</b> : ${data.message}</p>`;
});

socket.on("typing from server",(data)=>{
    actions.innerHTML = `<p><em>${data}</em> is typing a message...</p>`
});