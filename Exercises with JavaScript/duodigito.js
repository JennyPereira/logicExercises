/*
    We call a natural number a duodigit if its decimal representation uses  
    no more than two different digits. For example, 12, 110 and 33333 are 
    duodigits, while 102 is not.
*/

function duodigit(num){
    let intArr = Array.from(String(num), myFunc);
    let cont = 1;

    for (let i = 0; i < intArr.length; i++) {
        for (let j = 0; j < intArr.length; j++) {
            if (intArr[i] === intArr[j]) {
                
            }  else{
                cont += 1; 
            } 
        }
        
        if (cont > 2){
            return "n";
        }else{
            return "y";
        }
    }

    
}

let myFunc = num => Number(num);

console.log(duodigit(110));
