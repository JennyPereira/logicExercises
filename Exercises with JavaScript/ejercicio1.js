function encode(plainText) {
    let valueActual = "";
    let numVeces = 0;
    let resul = "";

    for (let i = 0; i < plainText.length; i++) {
        if(!resul.includes(plainText[i])){
            valueActual = plainText[i];
            for (let j = i; j < plainText.length; j++) {
                if (plainText[j] === valueActual) {
                    numVeces += 1;
                }
                
            }
            resul += numVeces + valueActual;
        }
        
        
        numVeces = 0;
    }

    return resul;
}

console.log(encode("aabaa"))
