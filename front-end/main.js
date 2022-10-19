//  Properties
const sendButton = document.querySelector('.send-btn');
const messageInput = document.querySelector('.messageClass');
const chatList = document.querySelector('.chat-list');

const server = 'http://localhost:3000'
const socket = io(server);

(function () {

    socket.on('notification', (data) => {
        console.log('Message depuis le seveur:', data);
    })

    socket.on('general', (msg) => {
        const ulChatList = chatList.children[0]

        const li = document.createElement('li')
        li.className = "me";

        const divName = document.createElement('div');
        divName.className = 'name';

        const spanName = document.createElement('span');
        spanName.className = "";
        spanName.innerText = "John Doe";

        divName.appendChild(spanName);

        li.appendChild(divName);

        const divMessage = document.createElement('div');
        divMessage.className = "message";

        const pMessage = document.createElement('p');
        pMessage.innerText = msg;

        divMessage.appendChild(pMessage);

        const spanTime = document.createElement('span');
        spanTime.className = 'msg-time';
        spanTime.innerText = "5:43 pm";

        divMessage.appendChild(spanTime);

        li.appendChild(divMessage);

        ulChatList.appendChild(li);
    })

    
    // fetch(`${server}/test`).then((res) => {
    //     return res.json()
    // }).then((data) => {
    //     console.log(data);
    // })
})()


sendButton.addEventListener('click', () => {
    const newMessage = messageInput.value;
    socket.emit('general', newMessage);
})


// socket.on('general', (msg) => {
//     alert("un nouveau message vient d'arriver : ", msg);
// })