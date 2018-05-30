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

// Looping
// Soal looping - asterisk ini memiliki 3 nomor.

// 1. Menyusun Barisan Bintang
var rows1 = 5;
while (rows1 >= 1)
{
  console.log('*');
  rows1--;
}