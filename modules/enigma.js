function loadWheels(){

    const wheelsArr = document.querySelectorAll('div.rotor')

    wheelsArr.forEach((wheel) => {
        addnumbers(wheel)
    })  
}

function numbers(maxNum) {
    const numArr = []
    for (let i = 1; i <= maxNum; i++) {
        numArr.push(i)
    }
    return numArr;
}


function addnumbers(wheel) {

    const numberArr = numbers(26)

    numberArr.forEach((number) => {

        //select parent
        // console.log(wheel)

        //create nodes

        let card = document.createElement('div');
        card.className = 'card'
        card.textContent = `${number}`
        card.style.width = `3rem`;
        card.style.height = `3rem`;
        card.dataset.rotorValue = number;

         // manipulate

        wheel.appendChild(card);
        // console.log(number)
        wheel.addEventListener('scroll', handleScroll)
    })

}

function handleScroll(e) {
    let rotorPosition = e.target.scrollTop
    let rotorMax = e.target.scrollHeight
    // console.log( rotorPosition, rotorMax, Math.round(rotorPosition/50)+1, Math.ceil(parseFloat((rotorPosition/rotorMax).toFixed(2))*26)+1)
    // if (rotor.scrollTop > 25) {
       // e.target.
   // }
    
    e.target.dataset.rotorPosition = Math.round(rotorPosition/50)+1
    
}

function generateEngimaKeyString(){

    let keyString = ''

    // traverse DOM
    const rotors = document.querySelectorAll('.rotor')

    // grab rotor positions

    rotors.forEach( rotor => {
        // interpolate into a string and number the positions    
        if (rotor.dataset.rotorPosition === undefined || rotor.dataset.rotorPosition === '0' ) {
            keyString += `rotor1`
        } else {
            keyString += `rotor${rotor.dataset.rotorPosition}`
        }
    }) 
    // return string i.e., 'rotor23rotor1rotor15'
    return keyString
}