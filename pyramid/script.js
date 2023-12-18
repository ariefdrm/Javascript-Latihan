// patern segitiga pertama 

let segitiga1 = "";

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= i; j++ ) {
    segitiga1 += "*";
  }
  segitiga1 += "\n";
}

console.log(segitiga1);

// patern segitiga ke 2
let segitiga2 = "";

for (let i = 10; i >= 0; i --) {
  for (let j = 0; j <= 10; j++) {
    if (j >= i) {
      segitiga2 += "*";
    } else {
      segitiga2 += " ";
    }
  }
  segitiga2 += "\n";
}

console.log(segitiga2);


// patern segitiga ke 3
let segitiga3 = "";

for (let i = 10; i >= 0;i--) { // untuk menambahkan baris 
  for (let j = 0; j <= i;j++) { // untuk menambahkan karakter bintang
    segitiga3 += "*";
  }
  segitiga3 += "\n";
}

console.log(segitiga3);


// patern segitaga ke 4
let segitiga4 = "";

for (let i = 10; i >= 0; i--) {
  for (let j = 10; j >= 0; j--) {
    if (j >= i) {
      segitiga4 += " ";
    } else {
      segitiga4 += "*";
    }
  }
  segitiga4 += "\n";
}

console.log(segitiga4);


// patern segitiga ke 5
let segitiga5 = "";

for (let i = 10; i >= 0; i--) {
  for (let j = 0; j <= 10 - i;j++) {
    if (j <= i) {
      segitiga5 += "*";
    } else {
      segitiga5 += " ";   
    }
  }
  segitiga5 += "\n";             
}

console.log(segitiga5);


// patern segitiga ke 3
let segitaSamaSisi = "";

for (let i = 10; i > 0; i--) {
  for (let j = 0; j <= 10; j++) {
      if (j >= i) {
        segitaSamaSisi += "* ";
      } else {
        segitaSamaSisi += " ";
      }
    }
    segitaSamaSisi +="\n";
}

console.log(segitaSamaSisi);

