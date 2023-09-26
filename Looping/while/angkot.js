// latihan while
/*
kalian adalah juragan angkot yng ingin membuat aplikasi untuk angkot kalian. 
Angkot 1 - 10, latihan membuat tulisan " Angkot no. 1 beroperasi dgn baik" (10x)
di file baru 'angkot.js' tampilkan didalam console browser.
*/

let jmlhAngkot = 10;
let angkot = 1;

while (angkot <= 10) {
    console.log ('Angkot no.' + angkot + ' Beroperasi dengan baik');
angkot++;
}

// contoh decrement loop in javascript menggunakan syntax 'for'
for (var i = 42; i > 0; --i) {
  console.log(i)
}