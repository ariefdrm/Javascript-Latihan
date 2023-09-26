// Latihan soal Angkot 3

/*

let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for ( noAngkot; noAngkot <= angkot;noAngkot++ ) {    
    if ( noAngkot <= angkotBeroperasi ) {
        console.log('Angkot No. ' + noAngkot + ' sedang beroperasi');
    } else {
        console.log('Anngkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
    
    // console.log(noAngkot);
}

*/

// let numb = prompt('Masukkan Angka: ');

// if (numb % 2 === 0) {
//   alert(numb + ' Angka adalah bilangan "GENAP".');
// } else {
//   alert(numb + ' Angka adalah bilangan "GANJIL".');
// }

// Pengkonsian diaatas masih terdapat sebuah kesalahan dimana jika user memasukkan selain angka "string" maka hasil yg ditimbulkan adalah nilai false / ganjil


// contoh 1

// let numb = prompt('Masukkan Angka: ');

// if (!isNaN(numb)) {
//   if (numb % 2 === 0) {
//     alert(numb + ' Angka adalah bilangan "GENAP".');
//   } else {
//     alert(numb + ' Angka adalah bilangan "GANJIL".');
//   }
// } else {
//   alert('Ini bukan angka.');
// }


let angka =  prompt('Masukkan angka: ');
if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan "GENAP".');
}else if (angka % 2 === 1) {
    alert(angka + ' adalah bilangan "GANJIL".');
}else {
    alert('Yang anda masukkan bukan angka!!!')
}



