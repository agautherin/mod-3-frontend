const webSocketUrl = 'ws://localhost:3000/cable'

function renderChatroomOnList(chatroom){
    const list = document.querySelector('div.chatroom-list')
    const chatItem = document.createElement('div')
    chatItem.className = 'chatroom-item'

    const chatroomNumber = document.createElement('h3')
    chatroomNumber.innerText = chatroom.id

    let button = document.createElement('button')
    button.className='join-chatroom-button'
    button.dataset.chatroomId = chatroom.id
    button.innerText = 'Join'

    chatItem.append(chatroomNumber, button)

    list.append(chatItem)
    button.addEventListener('click', getChatroomInfo)

}

function getChatroomInfo(e) {
    let id = e.target.dataset.chatroomId
    fetch(`${url}/chatrooms/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then( chatroomInstance => {
        renderChatroom(chatroomInstance)
    })
    createConnection(id)
}

function renderChatroom(chatroom) {
    const messageWindow = document.querySelector('section.messaging-window')
    messageWindow.innerHTML = ''

    let h1 = document.createElement('h1')
    h1.dataset.chatroomId = chatroom.id;
    h1.innerText = chatroom.id;

    let messageContainer = document.createElement('div')
    messageContainer.className = 'message-container'

    messageWindow.append(h1, messageContainer)

    chatroom.messages.forEach( message => {
        messageContainer.appendChild(renderMessage(message))
    })

    let messageFormWrapper = document.createElement('div')
    let form = document.createElement('form')

    let input1 = document.createElement('input')
    input1.name = 'message'
    input1.placeholder = 'Type your message'

    let encrypt = document.createElement('button')
    encrypt.innerText = 'Encrypt the message'

    let input2 = document.createElement('input')
    input2.name = 'encrypted-message'
    input2.placeholder = 'Your encrypted message'

    let submit = document.createElement('button')
    submit.type = 'submit'
    submit.innerText = 'Submit'

    form.append(input1, encrypt, input2, submit)
    messageFormWrapper.append(form)
    messageWindow.append(messageFormWrapper)

    encrypt.addEventListener("click", encryptMessage )
    form.addEventListener("submit", handleMessageSubmit )

    
}

function renderMessage(message){
    // debugger
    let messageRow = document.createElement('div')
    let messageBody = document.createElement('div')
    let messageBtn = document.createElement('button')

    messageRow.dataset.messageId = message.id

    messageBody.textContent = message.message_text
    messageBtn.innerText = "Decrypt"

    messageRow.append(messageBody, messageBtn)
    
    messageBtn.addEventListener("click", decryptMessage)

    return messageRow;
}


function decryptMessage(e) {
    alert(caesarDecode(e.target.previousElementSibling.innerText))
}

function encryptMessage() {
    console.log('encrypted!')
}

function handleMessageSubmit(e) {
    // debugger
    e.preventDefault()
    let obj = { 'message': {
        message_text: caesarEncode(e.target.message.value),
        chatroom_id: e.target.parentElement.parentElement.firstChild.dataset.chatroomId
    }}
    fetch(`${url}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(newMessage => renderMessage(newMessage))
    e.target.reset()
}

function createConnection(chatroom_id) {
    const socket = new WebSocket(webSocketUrl)

    socket.onopen = function() {
        console.log('WebSocket is connected.');

        const msg = {
            command: 'subscribe',
            identifier: JSON.stringify({
                id: chatroom_id,
                channel: 'ChatroomChannel'
            })
        };

        socket.send(JSON.stringify(msg));
    };

    socket.onclose = function() {
        console.log('WebSocket is closed.');
    }

    socket.onmessage = function(e) {
        const response = e.data;
        const msg = JSON.parse(response)
        
        
        if (msg.type === 'ping') {
            return;
        }

        console.log(e)
        console.log("FROM RAILS: ", msg)
        // debugger

        if (msg.message) {
            renderMessage(msg.message)
        }
    };

    socket.onerror = function(err) {
        console.log(`WebSocket Travesty: ${err}`)
    }

}

function newChatroom() {
    const newChatroomForm = document.querySelector('form.add-chat-form')
    newChatroomForm.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch(`${url}/chatrooms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(resp => resp.json())
        .then(newChatroom => renderChatroomOnList(newChatroom))
    })
    newChatroomForm.reset();
}