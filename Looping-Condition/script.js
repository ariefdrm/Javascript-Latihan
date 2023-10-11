// pengulangan & pengkondisian bersarang pada javascript.

// contoh 1 
let s1 = '';

for (let i = 0;i < 5;i++) {
    for (let a = 0; a <= 5;a++) {
        s1 += '*';
    }
    s1 += '\n';
}

console.log(s1);
// ouput :
/*
******
******
******
******
******
*/

// contoh 2 
let s2 = '';

for (let i = 0;i < 5;i++) {
    for (let a = 0; a <= i;a++) {
        s2 += '*';
    }
    s2 += '\n';
}

console.log(s2);
// ouput :
/*
*
**
***
****
*****
*/

// contoh 3:
let s3 = '';

for (let i = 5; i > 0;i--) {
    for (let a = 0; a < i;a++) {
        s3 += '*';
        // star = star + '*';
    } 
    s3 += '\n';
    // star = star + '\n';
}

console.log(s3);
// ouput : 

/*

*****
****
***
*

*/

// contoh 4
let s4 = '';

for (let i = 5; i > 0;i--) {
    for (let s = 5; s > 0;s--) {
        if (s <= i) {
            s4 += '*';
        } else {
            s4 += ' ';
        }
    }
    s4 += '\n';
}
 
console.log(s4);

//  output : 
 
/*
*****
 ****
  ***
   **
    *
*/

// contoh 5 
let s5 = '';

for (let i = 5;i > 0;i--) {
    for (let a = 0; a <= 5;a++) {
        if (a >= i) {
            s5 += '*';
        } else {
            s5 += ' ';
        }
    }
    s5 +='\n'
}
console.log(s5);
// ouput : 
/*
     *
    **
   ***
  ****
 *****
 */



