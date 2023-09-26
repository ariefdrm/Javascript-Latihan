// selalu perhatikan jika menggunakan syntax prompt, semua nilai yang dimasukkan ke dalam prompt akan menjadi string

// contoh 1
/* 
let angka = parseInt(prompt('Tolong masukkan angka; '));

switch ( angka ) {
    case 1 :
        alert('anda memasukkan angka 1');
        break;
    case 2 :
        alert('anda memasukkan angka 2');
        break;
    case 3 :
        alert('anda memasukkan angka 3');
        break;
    default:
        alert('angka yang anda masukkan tidak cocok!!!');
        break;
}
*/

// contoh 2 

let item = prompt('masukkan nama makanan / minuman ; \n (cth: nasi, daging, susu, hamburger, softdrink, french fries)');

// switch ( item ) {
//     case 'nasi':
//         alert('makanan/minuman "SEHAT"');
//         break;
//     case 'daging':
//         alert('makanan/minuman "SEHAT"');
//         break;
//     case 'susu':
//         alert('makanan/minuman "SEHAT"');
//         break;
//     case 'hamburger':
//         alert('makanan/minuman "TIDAK SEHAT"');
//         break;
//     case 'french fries':
//         alert('makanan/minuman "TIDAK SEHAT"');
//         break;
//     case 'softdrink':
//         alert('makanan/minuman "TIDAK SEHAT"');
//         break;
//     default:
//         alert('Tolong masukkan nama makanan/minuman yang ada di list');
// }

// contoh 3
switch ( item ) {
    case 'nasi':
    case 'susu':
    case 'daging':
        alert('ini adalah makanan/minuman "SEHAT"');
        break;
    case 'softdrink':
    case 'hamburger':
    case 'softdrink':
        alert('ini adalah makanan/minuman "TIDAK SEHAT"');
    default:
        alert('Tolong masukkan nama makanan yang ada di dalam list!!!');
}
