const socket = io()

socket.on('loadnotes', (data)=>{
    console.log(data);
})
const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit',() => {
    console.log('submit');
})