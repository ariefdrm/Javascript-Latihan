let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= angkot;noAngkot++) {    
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' sedang beroperasi');
    } else {
        console.log('Anngkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
    
    console.log(noAngkot);
}
