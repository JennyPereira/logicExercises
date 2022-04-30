/*
    Current state of a tennis match
*/

function computeGameState(nameP1, nameP2, wins) {
    // Write your code here
    arrWins = wins;
    let resultados = "";
    let contP1 = 0, contP2 = 0;
    let puntsP1, puntsP2 = 0;

    if (wins.length > 1) {
        for (let i = 0; i < wins.length; i++) {
            if (nameP1 === wins[i]) {
                contP1 = contP1 + 1;
            }else if (nameP2 === wins[i]) {
                contP2 += 1;
            }
            
        }
        //console.log(`equipo1 = ${contP1} equipo 2 = ${contP2} `)
        contP2 === 2 ? puntsP2 = 30 : "";
        contP2 === 3 ? puntsP2 = 40 : "";
        contP1 === 2 ? puntsP1 = 30 : "";
        contP1 === 3 ? puntsP1 = 40 : "";
        if (contP1 === contP2){
            if (contP1 < 3) {
                resultados = `${puntsP1}a`;
            }else{
                resultados = `DEUCE`;
            }
        } else if (contP1 > contP2) {
            if (contP1 >= 4 && (contP1-contP2 >= 2)) {
                resultados = `${nameP1} WINS`;
            }else if (contP1 >= 3 && (contP1-contP2 >= 1)) {
                resultados = `${nameP1} ADVANTAGE`
            }
        }else if (contP2 > contP1) {
            if (contP2 >= 4 && (contP2-contP1 >= 2)) {
                resultados = `${nameP2} WINS`;
            }else if (contP2 >= 3 && (contP2-contP1 >= 1)) {
                resultados = `${nameP2} ADVANTAGE`
            }
        }

        if (resultados === "") {
            resultados = `${nameP1} ${puntsP1} - ${nameP2} ${puntsP2}`;
        }

    }else{
        if (wins[3] === nameP1) {
            resultados = `${wins[3]} 15 - ${nameP2} 0`;    
        }else if (wins[3] === nameP1) {
            resultados = `${wins[3]} 15 - ${nameP1} 0`;
        }
        
    }

    return resultados;
}

console.log(computeGameState("P1", "P2", ["P1", "P2", "P1", "P2", "P1", "P2"]));
