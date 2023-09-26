let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotRusak) {
    console.log('Angkot No. ' + noAngkot + " sedang beroperasi.")
    noAngkot++;
}

for (let noAngkot = angkotRusak +1; noAngkot <= angkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + " Sedang tidak beroperasi.");
}

/** if javascript
 * if (aksi){
 * aksi
 * }
 */

// contoh 1 
let numb = 1;

if (numb === 1) {
    alert ('Anda memasukkan Angka : 1')
}
// alert akan timbul jika variabel numb = 1

// contoh 2
let angka = 3;

if (angka % 2 == 0) {
    alert (angka + ' adalah bilangan "GENAP"')
} else {
    alert(angka + ' adalah bilang "GANJIL"')
}



