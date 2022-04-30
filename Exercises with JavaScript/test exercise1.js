function matriz (matrixString){
    let matrixArray = matrixString.split(" ");
    let mult = foundMultipl(matrixArray.length);
    
    valX = mult[0];
    valY = mult[1];

    let filas = [];
    let colum = [];
    
    let k = 0;
    for (let i = 0; i < valY; i++) {
        filas.push([]);
        filas[i].push(new Array(valX));
        for (let j = 0; j < valX; j++) {
            filas[i][j] = matrixArray[k];
            k += 1;
        }
    }

    for (let i = 0; i < valY; i++) {
        colum.push([]);
        colum[i].push(new Array(valY));
        for (let j = 0; j < valX; j++) {
            colum[i][j] = filas[j][i];
        }
        
    }
    console.log(`Filas: ${filas}`);
    console.log(`Columnas: ${colum}`)
}

function foundMultipl (num){
    let mult = Math.sqrt(num);
    let dimensionMatrix = [];

    if (mult%1 === 0) {
        dimensionMatrix = [mult, mult];
        console.log(dimensionMatrix);
    }else{
        let valX = comprobarDivisible(num);
        if (valX != 1) {
            let valY = num / valX;
            dimensionMatrix = [valX, valY];
            console.log(dimensionMatrix);
        }else{
            console.log("numeros complejos");
        }
    }

    return dimensionMatrix;
}

function comprobarDivisible(num){
    let divisible = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            console.log("es divisible el número: ", num, "con => ", i);
            divisible = i;
        }
    }
    return divisible;
}

const matrixString = "9 8 7 5 3 2 6 6 7";
matriz(matrixString);
//foundMultipl(12);


