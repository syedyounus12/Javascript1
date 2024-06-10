// script
const fristName = 'Younus khadri';

// number
const age = 24;
const points = 6.55;

//boolen
const haskids = true;



//null
const aptnumber = null;

//undifined

let score = "";

// symbols
const id = Symbol;

//References 
const number = [1, 11, 12, 13, 14];

//Bigint

const n = 11111999999112727272n;

const person = {
    name: 'bred', 
    age: 20 ,
    email: 'syedyounus6699@gamil.com' ,
    password: 'YounusMK1' ,
}

const output = person;
console.log(output, typeof output);


//Values are store on the "stack"
const nameJ = 'john';
// const age = 25;

let newNameJ = nameJ;
newNameJ = 'johnthan'; // here the name is replayes with joan to jonathan
// console.log(newNameJ);// 'with help of "namej" to "newNameJ".


// References values are store on the "heap"
const fristperson = {
    name: 'youns',
    age: 24,
};

// here i am changeing the person data in second data a new verable

let secondperson = fristperson;
fristperson.name = 'khadri';
console.log(secondperson);

/// type Conversion///


// changing into string to number
let amount = 'help';
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//changeing into number to string

// amount = amount.toString();

// amount = String(amount);


// /changr string to decimal///
amount = parseFloat(amount);


/// change number to boolen

amount = Boolean(amount);

console.log(amount, typeof amount);