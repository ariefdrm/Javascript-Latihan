/**Latihan
 
 * buatkan 6 Pengulangan / looping "Angkot No. 1-6 beroperasi dengan baik" menggunakan syntax "while" tampilkan pada konsol browser
 * Dan buatkan 3 pengulangan "angkot No. 7-10 tidak beroperasi dengan baik." menggunakan syntax "for"
 */

// Answer:

let userName = prompt ('Please enter your name:')
let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik'); 
noAngkot++;
}

for ( noAngkot = angkotBeroperasi + 1; noAngkot <= angkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik');
}

