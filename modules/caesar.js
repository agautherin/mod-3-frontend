function isUpperCase(str) {
    return str === str.toUpperCase();
}

let ceaserCipherEncode = (str, key) => {
  let decipher = '';
  
  for(let i = 0; i < str.length; i++){
    
    if(isUpperCase(str[i])){
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }else{
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  
  
  return decipher;

}



// function caesarEncode(string) {
//     let encode = {
//         'a': 'e', 'b': 'f',
//         'c': 'g', 'd': 'h',
//         'e': 'i', 'f': 'j',
//         'g': 'k', 'h': 'l',
//         'i': 'm', 'j': 'n',
//         'k': 'o', 'l': 'p',
//         'm': 'q', 'n': 'r', 
//         'o': 's', 'p': 't', 
//         'q': 'u', 'r': 'v', 
//         's': 'w', 't': 'x', 
//         'u': 'y', 'v': 'z', 
//         'w': 'a', 'x': 'b',
//         'y': 'c', 'z': 'd',
//         ' ': ' ', '.': '.',
//         ',': ','
//     }

//     let decipher = ''
//     let message = string.split('');
//     for (i = 0; i < message.length; i++) {
//         decipher += encode[message[i]];
//     }

//     return decipher
        
// }

// function caesarDecode(string) {
//     let encode = {
//         'e': 'a', 'f': 'b',
//         'g': 'c', 'h': 'd',
//         'i': 'e', 'j': 'f',
//         'k': 'g', 'l': 'h',
//         'm': 'i', 'n': 'j',
//         'o': 'k', 'p': 'l',
//         'q': 'm', 'r': 'n', 
//         's': 'o', 't': 'p', 
//         'u': 'q', 'v': 'r', 
//         'w': 's', 'x': 't', 
//         'y': 'u', 'z': 'v', 
//         'a': 'w', 'b': 'x',
//         'c': 'y', 'd': 'z',
//         ' ': ' ', '.': '.',
//         ',': ','
//     }

//     let decipher = ''
//     let message = string.split('');
//     for (i = 0; i < message.length; i++) {
//         decipher += encode[message[i]];
//     }

//     return decipher
    
// }

