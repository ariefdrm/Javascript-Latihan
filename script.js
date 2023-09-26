var Name = 'Hello World';

// Penggunaan "conlose.log" pada javascript
console.log('Isi dari variable "Name" adalah\n' + Name );
console.log(Name);

// Pop up box pada Javascript 
/*
1. alert
2. prompt
3. confirm
*/ 

/*
1.alert

~ "alert" dapat ditumpuk
*/ 
    // alert('Ini Adalah Alert');
    // alert('Halo');
    // alert('Nama Saya');
    // alert('Arief Darmawan');

/*
2.prompt

~ penggunaan "prompt" harus dimasukkan pada sebuah variable
~ Prompt menggembalikan sebuah nilai yg dituliskan oleh pengguna
*/ 
    // var Nama = prompt('Ini adalah "prompt":');
    // var Nama;
    // alert(Nama);

/*
3.confirm

~ Confirm menggembalikan sebuah nilai sebagai boolean 'true' jika "Oke" dan 'false' jika "Cancel" 
*/ 
    // var tes = confirm('Ini adalah "confirm"');
    // if (tes === true) {
    //     alert('user menekan Oke!');
    // }else{
    //     alert('user menekan Cancel!');
    // }
// end line Pop Up Box



// contoh program sederhana1

// alert("selamat datang");
// var ulang = true;

// while (ulang === true) {
//     var nama3 = prompt ('Masukkan Nama:');
//     alert('Halo,\n' + nama3);

//     ulang = confirm('coba lagi');
// }

// alert('Terimakasih');



// control flow


/*
~ Pengulangan / Looping
    1.for
    2.while
    3.do while
*/


// Contoh Pengulangan / Looping

// alert('Mulai');
// for (var i = 0; i < 5; i++) {
//     alert('Hello World');
// }
// alert('Selesai');

/*
~ Pengkondisian
    1. if
    2. if - else
    3. else - if
    4. switch

*/

// contoh kasus Pengkondisian

// var angka = prompt ('Masukkan Angka :');
// if (angka % 2 === 0) {
//     alert (angka + ' adalah bilangan GENAP');
// }else {
//     alert(angka + ' adalah bilangan "GANJIL"');
// }


// end line control flow