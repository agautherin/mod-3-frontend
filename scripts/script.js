const PORT = `3000`
const url = `http://localhost:${PORT}/`


document.addEventListener("DOMContentLoaded", function() {
    console.log("we are connected")
    loadFriends()
    loadEncryption()
    loadMessageBoard()
})

function loadFriends() {


}

// render Encryption features

function loadEncryption() {
    fetch(`${url}encryptions`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        renderEncryptOptions(data)
        // GET /encryptions should response with Array of Encryption Types
    } )

}

function loadMessageBoard() {


}

