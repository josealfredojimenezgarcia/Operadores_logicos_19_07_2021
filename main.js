

let A = false;
let B = true;
const myCssHead = `
    background: #ddeeff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    padding: 10px 10px 10px 10px;
`;
const myCssHea = `
    background: #eeddff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    padding: 10px 10px 10px 10px;
`;

let myCssBoby = `

    background: #dfd;
    font-family: cursive;
    border: 1px solid #aaa;

`;

console.log(`%cOperadores AND`,myCssHead);
console.log(`%c                                                     `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 1em;');
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBoby);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);



console.log(`%cOperadores AND`,myCssHead );
console.log(`%c1. A:`,!(!A),` (OPERADOR AND) B:`,!B,` A && B =`,!(!A) && !B);
console.log(`%c2. A:`,A,` (OPERADOR AND) B:`,B,` A && B =`,A && B);
console.log(`%c3. A:`,!A,` (OPERADOR AND) B:`,!B,` A && B =`,!A && !B);
console.log(`%c4. A:`,!A,` (OPERADOR AND) B:`,B,` A && B =`,!A && B);


console.log(`%cOperadores OR`,myCssHead );
console.log(`1. A:`,!(!A),` (OPERADOR OR) B:`,!B,` A || B =`,!(!A) || !B);
console.log(`2. A:`,A,` (OPERADOR OR) B:`,B,` A || B =`,A || B);
console.log(`3. A:`,!A,` (OPERADOR OR) B:`,!B,` A || B =`,!A || !B);
console.log(`4. A:`,!A,` (OPERADOR OR) B:`,B,` A || B =`,!A || B);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);

console.log(`%cOperadores NOT`,myCssHead );
console.log(`1. A:`,!(!A),` (OPERADOR NOT) A:`,!A,`  !! A =`,!(!A));
console.log(`2. A:`,A,` (OPERADOR NOT) A:`,!!A,` ! A =`,!A);
console.log(`3. B:`,!B,` (OPERADOR NOT) B:`,!!B,` !! B =`,!B );
console.log(`4. A:`,!A,` (OPERADOR NOT) A:`,A,` !! A =`,!(!A) );
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssHea);


let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${(!(!A)) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!(!A) && !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(A) ? '1' : '0'}</td>
        <td>${(B) ? '1' : '0'}</td>
        <td>${(A && B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(!B) ? '1' : '0'}</td>
        <td>${(!A && !B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(!A) ? '1' : '0'}</td>
        <td>${(B) ? '1' : '0'}</td>
        <td>${(!A && B) ? '1' : '0'}</td>
    </tr>
    <tr>
        <td>${(A) ? '1' : '0'}</td>
        <td>${(B) ? '1' : '0'}</td>
        <td>Verdaderos</td>
    </tr>
`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Verdaderos</td>
    </tr>
`;


// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));







