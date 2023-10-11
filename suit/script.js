// menangkap pilahang player
let  p = prompt('Batu, Gunting, Kertas');

// menangkap pilahan computer
// membangkitkan bilangan random
let comp = Math.random();

if ( comp < 0.34 ) {
    comp = 'Batu';
} else if ( comp >= 0.35 && comp < 0.64 ) {
    comp = 'Gunting';
} else {
    comp = 'kertas';
}

let hasil = '';
// menentukan rules
if (p == comp ) {
    hasil = 'SERI!';
} else if (p == 'Batu') {
    // if ( comp == 'Gunting' ) {
    //     hasil = 'MENANG!!!';
    // } else {
    //     hasil = 'KALAH!';
    // }
    hasil = ( comp == 'Gunting' ) ? 'MENANG!!!' : 'KALAH!';
} else if (p == 'Kertas') {
    hasil = (comp == 'Batu') ? 'MENANG!!!' : 'KALAH!';
} else if (p == 'Gunting') {
    hasil = (comp == 'Batu') ? 'KALAH!' : 'MENANG!!!';
} else {
    hasil = 'Tolong masukkan pilahan yang ada di dalam list.!';
}

// tampilkan hasiknya

alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);