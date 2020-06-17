
function loggedInUI() {

    const mainCW = document.querySelector('div.main-content-wrapper')
    mainCW.innerHTML = ''

    const leftPane = document.createElement('div')
    leftPane.className = `left-pane`;
    
    const menuWindow = document.createElement('section')
    menuWindow.className = 'menu-window'
    const menuTitle = document.createElement('h1')
    menuTitle.innerText = 'Menu'
    const toggleClass = document.createElement('div')
    toggleClass.className = 'toggle'

    const userListWrapper = document.createElement('div')
    userListWrapper.className = 'user-list-wrapper'
    const userList = document.createElement('ul')
    userList.className = 'users-list'
    
    const friendsListWrapper = document.createElement('div')
    friendsListWrapper.className = 'friends-list-wrapper'
    const friendsList = document.createElement('ul')
    friendsList.className = 'friends-list'
    
    const chatForm = document.createElement('form')
    chatForm.className = 'add-chat-form'
    const chatInput = document.createElement('input')
    chatInput.type = 'text'
    chatInput.pplaceholder = ''
    const chatBtn = document.createElement('button')
    chatBtn.setAttribute('id', 'add-chat')
    chatBtn.type = 'submit'
    chatBtn.innerText = 'Add Chatroom'
    
    
    const chatroomListWrapper = document.createElement('div')
    chatroomListWrapper.className = 'chatroom-list-wrapper'
    
    const chatroomList = document.createElement('div')
    chatroomList.className = 'chatroom-list'
    
    
    menuWindow.append(menuTitle, toggleClass)
    toggleClass.append(userListWrapper, friendsListWrapper, chatroomListWrapper)
    userListWrapper.appendChild(userList)
    friendsListWrapper.appendChild(friendsList)
    chatroomListWrapper.append(chatForm, chatroomList)
   
    chatForm.append(chatInput, chatBtn)
               
  
    let rightPane = document.createElement('div')
    rightPane.className = 'right-pane'

    let encryptionMenu = document.createElement('section')
    encryptionMenu.className = 'encryption-menu'

    let h1 = document.createElement('h1')
    h1.className = 'h1-encrypt-menu'
    h1.innerText = 'Encryption Menu'

    let messagingWindow = document.createElement('section')
    messagingWindow.className = 'messaging-window'

    encryptionMenu.appendChild(h1)
    leftPane.appendChild(menuWindow)
    rightPane.append(encryptionMenu, messagingWindow)

    mainCW.append(leftPane, rightPane)
}

function renderDropDownLogout(dropDown) {
    
    dropDown.innerHTML = ''

    let logoutBtn = document.createElement('div')
    logoutBtn.className = 'logout-btn'
    logoutBtn.innerText = 'Logout'
    dropDown.append(logoutBtn)
    logoutBtn.addEventListener('click', handleLogout)
 
}

function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('enig_logged')
    loggedOutUI()
    userActions()
    // checkLogStatus()
    // .then(userActions())

}