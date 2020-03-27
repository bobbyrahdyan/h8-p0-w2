// Tugas 1

function shoutOut() {
    return "Halo Function!";
}
console.log(shoutOut());

// Tugas 2

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

let num1 = 5;
let num2 = 6;
let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Tugas 3

function processSentence(name, age, address, hobby) {
    return (`Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`);
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);