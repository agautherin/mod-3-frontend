const PORT = `3000`
const url = `http://localhost:${PORT}`

// import variable from './modules/message.js'

document.addEventListener("DOMContentLoaded", function() {
    
    // navbar rendering
    userActions()

    // content rendering
    // loadFriends()
    // loadUsers()
    // loadEncryption()
    // loadMessageBoard()
     
    

})

function userActions(){

    const userDiv = document.querySelector(`div.user-details`)

    userDiv.addEventListener("click", handleUAClick)
}

function handleUAClick(e) {
    
    let dropDown = e.target.nextElementSibling
    if (dropDown.style.display === 'initial') {
        dropDown.style.display = 'none'
        dropDown.innerHTML = ''

    } else {
        dropDown.style.display = 'initial'
        renderDropDown(dropDown)
    }
}

function renderDropDown(dropDown) {

    let toggleBar = document.createElement('div');
    let registerBtn = document.createElement('div')
    let loginBtn = document.createElement('div')

    registerBtn.innerText = "Register"
    loginBtn.innerText = "Login"

    toggleBar.className = 'toggle-bar'
    registerBtn.className = 'register-button'
    loginBtn.className = 'login-button'
    toggleBar.dataset.formView = '1'
    //     //render the options 'Register / Login' 
    toggleBar.append(registerBtn, loginBtn)
    dropDown.appendChild(toggleBar)
    
    //     // depending on which is clicked, we can toggle the render function
    //     // callback function changes an attribute (dataset value) in the parent class
    registerBtn.addEventListener("click", () => {
        // debugger
        dropDown.innerHTML = ''
        dropDown.appendChild(toggleBar)
        toggleBar.dataset.formView = '2'
        renderRegisterForm(dropDown)
    })

    loginBtn.addEventListener("click", () => {
        dropDown.innerHTML = ''
        dropDown.appendChild(toggleBar)
        toggleBar.dataset.formView = '1'
        renderLoginForm(dropDown)
    })    
}

function renderLoginForm(dropDown) {
    //create nodes

    let loginForm = document.createElement('form')
    loginForm.className = 'ua-form'

    let uname = document.createElement('label')
    let uninput = document.createElement('input')
    let upword = document.createElement('label')
    let upinput = document.createElement('input')
    let button = document.createElement('button')
    let pBreak = document.createElement('br')
    let pBreak2 = document.createElement('br')
    
    // add attibutes
    uninput.className = 'login-input';
    uninput.name = 'username';
    uninput.id = 'login-user';
    uninput.placeholder = 'User Name';
    upinput.className = 'login-input';
    upinput.name = 'password';
    upinput.id = 'login-password';
    upinput.placeholder = 'Password';
    upinput.type = 'password';
    
    uname.innerText = `User Name: `;
    upword.innerText = `Password: `;
    button.innerText = `Login`;
    button.type = 'submit';
    //append 

    loginForm.append(uname, uninput, pBreak, upword, upinput, pBreak2, button)
    dropDown.appendChild(loginForm)

    loginForm.addEventListener('submit', handleLoginSubmit)

  
}

function handleLoginSubmit(e) {
    e.preventDefault()
    const uName = e.target.username.value;
    const pWord = e.target.password.value;
    e.target.reset();
    
    fetch(`${url}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({'user': {
            username: uName,
            password: pWord
        }})
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token', data.token )
        loadFriends()
        loadUsers()
        loadEncryption()
        loadChatrooms()
        newChatroom()
    })
   
}

function renderRegisterForm(dropDown) { 
    //create nodes

    let regForm = document.createElement('form')
    regForm.className = 'ua-form'

    let uname = document.createElement('label')
    let uninput = document.createElement('input')
    let upword = document.createElement('label')
    let upinput = document.createElement('input')
    let button = document.createElement('button')
    let firstNameLabel = document.createElement('label')
    let firstNameInput = document.createElement('input')
    let lastNameLabel = document.createElement('label')
    let lastNameInput = document.createElement('input')
    let pBreak = document.createElement('br')
    let pBreak2 = document.createElement('br')
    let pBreak3 = document.createElement('br')
    let pBreak4 = document.createElement('br')
    let pBreak5 = document.createElement('br')

    // add attibutes
    
    //user input
    uninput.className = 'reg-input';
    uninput.name = 'username';
    uninput.id = 'register-user';
    uninput.placeholder = 'User Name';

    //password input
    upinput.className = 'reg-input';
    upinput.name = 'password';
    upinput.id = 'register-password';
    upinput.placeholder = 'Password';
    upinput.type = 'password';

    //first name input
    firstNameInput.className = 'reg-input';
    firstNameInput.name = 'firstname';
    firstNameInput.id = 'register-firstname';
    firstNameInput.placeholder = 'First Name';

    //last name input
    lastNameInput.className = 'reg-input';
    lastNameInput.name = 'lastname';
    lastNameInput.id = 'register-lastname';
    lastNameInput.placeholder = 'Last Name';

    //modify nodes
    firstNameLabel.innerText = 'First Name: '
    lastNameLabel.innerText = 'Last Name: '
    uname.innerText = `User Name: `;
    upword.innerText = `Password: `;
    button.innerText = `Register`;
    button.type = 'submit';

    //append 
    regForm.append(firstNameLabel, firstNameInput, pBreak, 
                    lastNameLabel, lastNameInput, pBreak2,
                    uname, uninput, pBreak3,
                    upword, upinput, pBreak4,
                    button)
    dropDown.appendChild(regForm)

    regForm.addEventListener('submit', handleRegisterSubmit)


}

function handleRegisterSubmit(e){
    e.preventDefault();
    // debugger
    fetch(`${url}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"user": {
            first_name: e.target.firstname.value,
            last_name: e.target.lastname.value,
            username: e.target.username.value,
            password: e.target.password.value
        }})
    })
    .then(res => res.json())
    .then(console.log)
    e.target.reset();
}

function loadFriends() {

}

function loadChatrooms(){
    fetch(`${url}/chatrooms`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json() )
    .then( chatroomList => {
        chatroomList.forEach((chatroom) => {
            renderChatroomOnList(chatroom)
        })
    })
}

function loadUsers() {
    
    fetch(`${url}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json() )
    .then( userList => {
        userList.forEach(user=>{
            renderUser(user)
        })
    })
}

function renderUser(user) {
    const userMenu = document.querySelector('ul.users-list')

    const userEl = document.createElement('li')
    

    userEl.style.listStyle = 'none'
    userEl.innerText = `${user.username}`

    userMenu.appendChild(userEl);
}

// render Encryption features

function loadEncryption() {

    renderTypes()


    // fetch(`${url}/encryptions`)
    // .then( res => res.json())
    // .then( data => {
    //     console.log(data)
    //     renderEncryptOptions(data)
    //     // GET /encryptions should response with Array of Encryption Types
    // } )

}

// function loadMessageBoard() {
//     const messageWindow = document.querySelector('section.messaging-window')
    
// }

function renderEncryptOptions(encryptArr) {
    console.log('connected encryption types')
}