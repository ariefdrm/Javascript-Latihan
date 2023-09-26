let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for ( noAngkot; noAngkot <= angkot;noAngkot++ ) {    
    if ( noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang beroperasi');
    } else if (noAngkot == 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Anngkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}


