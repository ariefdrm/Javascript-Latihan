// contoh looping menggunakan syntax while

// contoh increment
let numb1 = 1;
let numb2 = 10;

while (numb1 < numb2) {
    console.log('Ini adalah contoh  ' + numb1 + 'x' + ' dari increment');
    numb1++;
}

// contoh decrement
let cont1 = 7;
let cont2 = 1;

while (cont1 > cont2) {
    console.log('ini adalah contoh ' + cont1 + 'x' + ' dari decrement');
    cont1--;
}

// Looping menggunakan syntax For

// contoh for 1
let str = '';

for (let i = 0; i < 10; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"

// contoh for 2

let str1 = '';

for (let i= 10; i > 0; i--) {
    str1 = str1 + i;
}

console.log(str1);
//  this output: "10987654321"

// contoh for 3 

let name1 = '';

for (let i= 0; i < 5; i++) {
    name1 = name1 + i;
console.log('hello world ' );
}


//  contoh for 4 

for (let i= 0; i < 15; i++) {
    console.log('hello world');
}

