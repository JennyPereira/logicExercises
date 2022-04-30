/*
    In this exercise, you have to analyze records of temperature to find the closest to zero. 
    Sample temperatures. Here, -1.7 is the closest to 0. Implement the function closestToZero 
    to return the temperature closer to zero which belongs to the array ts.
        - If ts is empty, return 0 (zero). 
        - If two numbers are as close to zero, consider the positive number as the closest to zero 
        (eg. if ts contains -5 and 5, return 5).
    
    - Temperatures are always expressed with floating point numbers ranging from -273 to 5526.
    - ts is always a valid array and is never null.
*/

function computeClosestToZero(ts) {
    let returnValue = 0;
    let arrOrdenado = [];
    let arrMenorC;

    try {
        if (ts.length == 0) {
            returnValue = 0;
        }else if (ts.length > 0 && ts.length < 1000){
            for (let i = 0; i < ts.length; i++) {
                arrOrdenado = ts.sort((a, b) => a - b);
            }
            arrMenorC = convertirApositivo(arrOrdenado);
            arrMayorC = arrPositivo(arrOrdenado);
    
            
            if (arrMayorC !== 0 && arrMenorC !== 0){
                if (arrMenorC === arrMayorC) {
                    returnValue = arrMayorC;
                } else if (arrMenorC < arrMayorC) {
                    returnValue = -1 * arrMenorC;
                }else if (arrMenorC > arrMayorC){
                    returnValue = arrMayorC;
                }
            } else if (arrMenorC === 0 && arrMayorC !== 0) {
                returnValue = arrOrdenado[0];
            }else if (arrMenorC !== 0 && arrMayorC == 0) {
                returnValue = -1 * arrMenorC;
            }
        }
    } catch (error) {
        returnValue = 0;
    }
    
    return returnValue;
}

function convertirApositivo(arrNumero){
    let numeroNegAPos = 0;
    let arrPositivo = [];
    for (let i = 0; i < arrNumero.length; i++) {
        if (arrNumero[i] < 0) {
            arrPositivo.push(-1 * arrNumero[i]);
        }
    }
    
    arrPositivo.sort((a, b) => a - b);

    if (arrPositivo.length !== 0) {
        numeroNegAPos = arrPositivo[0];
    }
    
    return numeroNegAPos;
}

function arrPositivo(arrNumero){
    let numeroPos = 0;
    let arrPositivo = [];
    for (let i = 0; i < arrNumero.length; i++) {
        if (arrNumero[i] > 0) {
            arrPositivo.push(arrNumero[i]);
        }
        
    }
    arrPositivo.sort((a, b) => a - b);

    if (arrPositivo.length !== 0) {
        numeroPos = arrPositivo[0];
    }
    
    return numeroPos;
}

console.log(computeClosestToZero([15, -7, 9, 14, 7, 12]))

