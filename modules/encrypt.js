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
    keyContainer.style.width = '100%';
    
    
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

    const rotorContainer = document.createElement('div')
    rotorContainer.className = 'rotor-container'

    const rotor1 = document.createElement('div')
    rotor1.className = 'rotor'
    rotor1.dataset.rotor = '1'

    const rotor2 = document.createElement('div')
    rotor2.className = 'rotor'
    rotor2.dataset.rotor = '2'

    const rotor3 = document.createElement('div')
    rotor3.className = 'rotor'
    rotor3.dataset.rotor = '3'

    rotorContainer.append(rotor1, rotor2, rotor3)

    keyContainer.appendChild(rotorContainer)

    keyContainer.className = 'key-container'
    encWindow.appendChild(keyContainer)

    loadWheels()
}


