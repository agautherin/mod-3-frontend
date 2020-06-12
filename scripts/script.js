const PORT = `3000`
const url = `http://localhost:${PORT}`


document.addEventListener("DOMContentLoaded", function() {
    console.log("we are connected")

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
    let dropDown = e.target.children[0]
    if (dropDown.style.display === 'initial') {
        dropDown.style.display = 'none'
    } else {
        dropDown.style.display = 'initial'
    }
}

function loadFriends() {


}

function loadUsers() {
    console.log('hello user')
    fetch(`${url}/users`)
    .then(res => res.json() )
    .then( data => {
        console.log(data)
    })
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