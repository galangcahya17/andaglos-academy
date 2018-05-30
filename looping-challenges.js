// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var i=2;
while (i<=20)
{
  console.log(i + ' - I love coding');
  i+=2;
}

console.log('LOOPING KEDUA');
var i=20;
while (i>=2){
  console.log(i + ' - I will become  developer');
  i-=2;
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20; i++) {
  console.log( i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var i = 20; i >= 1; i--) {
  console.log( i + ' - I will become  developer');
}
// ANGKA GANIL GENAP
var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
  if(nilai%2==0){
  	console.log("genap" );
  } else{
  	console.log("ganjil" );
  }
	nilai++;
}

//  perulangan tambah 2
var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
  if(nilai%3==0){
  	console.log("counter sekarang " + nilai + ", kelipatan 3" );
  } else{
  	console.log("counter sekarang " + nilai );
  }
  // console.log(nilai)
	nilai+=2;
}

// peerulangan tambah 5
var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
  if(nilai%6==0){
  	console.log("counter sekarang " + nilai + ", kelipatan 6" );
  } else{
  	console.log("counter sekarang " + nilai );
  }
  // console.log(nilai)
	nilai+=5;

// perulangan tambah 9
var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
  if(nilai%10==0){
  	console.log("counter sekarang " + nilai + ", kelipatan 10" );
  } else{
  	console.log("counter sekarang " + nilai );
  }
  // console.log(nilai)
	nilai+=9;
}

// Looping
// Soal looping - asterisk ini memiliki 3 nomor.

// 1. Menyusun Barisan Bintang
var rows1 = 5;
while (rows1 >= 1)
{
  console.log('*');
  rows1--;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5;
for (var i = 1; i <= row2; i++) {
 var output = "";
 for (var j = 1; j <= i; j++) {
  output += "*"
 }
 for (var j = row2 - 1; j >= i; j--) {
  output += "*"
 }
 console.log(output);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
for (var i = 1; i <= row3; i++) {
 var output = "*";
 for (var j =2; j <= i; j++) {
  output += "*"
 }
 console.log(output);
}
