const webSocketUrl = 'ws://localhost:3000/cable'

function renderChatroom(chatroom){
    const list = document.querySelector('ul.chatroom-list')
    
    const chatItem = document.createElement('li')
    chatItem.innerText = chatroom.id
    let button = document.createElement('button')
    button.className='join-chatroom-button'
    button.dataset.chatroomId = chatroom.id
    button.innerText = 'Join'
    chatItem.append(button)
    list.append(chatItem)
    
}