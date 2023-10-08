const socket = io('http://localhost:')(3000);

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector('.container');

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`)
})



const name = prompt("Enter your name to Join");

socket.emit('new-user-joined' , name);

socket.on('user-joined', name=>{
    append(`${name} Joined the Chat`, 'right')
})

socket.on('user-joined', name=>{
    append(`${data.message}:{data.user}`, 'left')
})