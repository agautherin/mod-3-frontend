const PORT = `3000`
const url = `http://localhost:${PORT}`


document.addEventListener("DOMContentLoaded", function() {
    
    // navbar rendering
    userActions()

    // content rendering
    loadFriends()
    loadUsers()
    loadEncryption()
    loadMessageBoard()
    

})

function userActions(){

    const userDiv = document.querySelector(`div.user-details`)

    userDiv.addEventListener("click", handleUAClick)
}

function handleUAClick(e) {
    
    console.log('user click')
    e.stopPropagation();
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
    let uname = document.createElement('label')
    let uninput = document.createElement('input')
    let upword = document.createElement('label')
    let upinput = document.createElement('input')
    let button = document.createElement('button')
    
    // add attibutes
    uninput.className = 'login-input';
    uninput.name = 'user-name';
    uninput.id = 'user';
    uninput.placeholder = 'user-name';
    upinput.className = 'login-input';
    upinput.name = 'user-name';
    upinput.id = 'user';
    upinput.placeholder = 'password';
    
    uname.innerText = `User Name: `;
    upword.innerText = `Password: `;
    button.innerText = `Login`;
    button.type = 'submit';
    //append 

    loginForm.append(uname, uninput, upword, upinput, button)
    dropDown.appendChild(loginForm)

  
}

function renderRegisterForm(dropDown) { 
    //create nodes

    let regForm = document.createElement('form')
    let uname = document.createElement('label')
    let uninput = document.createElement('input')
    let upword = document.createElement('label')
    let upinput = document.createElement('input')
    let button = document.createElement('button')
    let firstNameLabel = document.createElement('label')
    let firstNameInput = document.createElement('input')
    let lastNameLabel = document.createElement('label')
    let lastNameInput = document.createElement('input')

    // add attibutes
    

    uninput.className = 'reg-input';
    uninput.name = 'username';
    uninput.id = 'user';
    uninput.placeholder = 'User Name';
    upinput.className = 'reg-input';
    upinput.name = 'password';
    upinput.id = 'user';
    upinput.placeholder = 'Password';
    upinput.type = 'password';

    firstNameInput.className = 'reg-input';
    firstNameInput.name = 'firstname';
    firstNameInput.id = 'firstname';
    firstNameInput.placeholder = 'First Name';
    lastNameInput.className = 'reg-input';
    lastNameInput.name = 'lastname';
    lastNameInput.id = 'lastname';
    lastNameInput.placeholder = 'Last Name';

    firstNameLabel.innerText = 'First Name:'
    lastNameLabel.innerText = 'Last Name:'
    uname.innerText = `User Name: `;
    upword.innerText = `Password: `;
    button.innerText = `Register`;
    button.type = 'submit'
    //append 

    regForm.append(firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, uname, uninput, upword, upinput, button)
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
}

function loadFriends() {

}

function loadUsers() {
    console.log('hello user')
    fetch(`${url}/users`)
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
    fetch(`${url}/encryptions`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        renderEncryptOptions(data)
        // GET /encryptions should response with Array of Encryption Types
    } )

}

function loadMessageBoard() {

}

function renderEncryptOptions(encryptArr) {
    console.log('connected encryption types')
}