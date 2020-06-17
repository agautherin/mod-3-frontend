function renderTypes() {

    const encWindow = document.querySelector('section.encryption-menu');

    
    const dropEncTypes = document.createElement('select')
    const dropEncLabel = document.createElement('label')
    const dropEncOpt1 = document.createElement('option')
    const dropEncOpt2 = document.createElement('option')
    const dropEncOpt3 = document.createElement('option')

    dropEncLabel.htmlFor = 'encrypt-type' ;
    dropEncLabel.textContent = 'Choose an Encryption Technique:';

    dropEncTypes.name = 'encryption';
    dropEncTypes.id = 'encrypt-type';
    
    dropEncOpt1.value = "1"
    dropEncOpt1.textContent = "None"
    dropEncOpt2.value = "2"
    dropEncOpt2.textContent = "Caesar"
    dropEncOpt3.value = "3"
    dropEncOpt3.textContent = "Enigma"
 

    dropEncTypes.append(dropEncOpt1, dropEncOpt2, dropEncOpt3)

    encWindow.append(dropEncLabel, dropEncTypes)

    dropEncTypes.addEventListener("change", handleEncryptChange)

}

function handleEncryptChange(e) {
    console.log(e);
    clearKeyContainer()
    if (e.target.value === '2') {
        console.log("Et tu, Brute")
        renderCaesar()
    } else if (e.target.value === '3') {
        console.log("Ich bin ein Berliner")
        renderEnigma()
    } else {
        renderNone()
    }
}

function clearKeyContainer() {
    const keyContainer = document.querySelector('div.key-container');
    if (keyContainer !== null) {
        keyContainer.remove()
    }
}

function renderNone() {
    console.log("")
    
    const encWindow = document.querySelector('section.encryption-menu');
    const keyContainer = document.createElement('div');
    keyContainer.className = 'key-container'
    encWindow.appendChild(keyContainer)
}

function renderCaesar() {

    // clearKeyContainer()
    const encWindow = document.querySelector('section.encryption-menu');
    const keyContainer = document.createElement('div');
    keyContainer.className = 'key-container'
    encWindow.appendChild(keyContainer)

    
    const dropCaesar = document.createElement('select')
    const dropCaeLabel = document.createElement('label')
    
    
    for (let i=1; i <= 30; i++ ) {

        let dropEncOpt = document.createElement('option')
        dropEncOpt.value = `${i}`
        dropEncOpt.textContent = `${i}`

        dropCaesar.appendChild(dropEncOpt)
    }

  

    dropCaeLabel.htmlFor = 'key-type' ;
    dropCaeLabel.textContent = 'Choose a key:';

    dropCaesar.name = 'key';
    dropCaesar.id = 'key-type';
    
    keyContainer.append(dropCaeLabel, dropCaesar)

}

function renderEnigma() {
    console.log("Ich leibe Engima")
    // clearKeyContainer()
    const encWindow = document.querySelector('section.encryption-menu');
    const keyContainer = document.createElement('div');
    keyContainer.className = 'key-container'
    encWindow.appendChild(keyContainer)

}