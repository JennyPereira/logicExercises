/*
    Receives a plaintext string parameter
        aaaabcccaaa
    Therefore you must return the string 4a1b3c3a
*/

function encode(plainText) {
    let valueActual = "";
    let numVeces = 0;
    let resul = "";

    for (let i = 0; i < plainText.length; i++) {
        valueActual = plainText[i];
        if (i === 0) {
            numVeces +=1;
        }else {
            if (valueActual === plainText[i-1]) {
                numVeces += 1;
            }else{
                resul += numVeces + plainText[i-1];
                numVeces = 1;
            }
            
        }    
        
    }
    resul += numVeces + valueActual;

    return resul;
}

console.log(encode("aaaaaabcccccb"))
