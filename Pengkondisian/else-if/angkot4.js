let angkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for ( noAngkot; noAngkot <= angkot;noAngkot++ ) {    
    if ( noAngkot <= angkotBeroperasi ) {
        console.log('Angkot No. ' + noAngkot + ' sedang beroperasi');
    } else if (noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Anngkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}