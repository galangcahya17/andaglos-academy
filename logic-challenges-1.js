// Logic Challenge - Bandingkan Angka
function bandingkanAngka(angka1, angka2) {
  if(angka1===angka2){
    return -1
  }return angka1<angka2
}
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Logic Challenge - Balik Kata
function balikKata(kata) {
   var a='';
  for(var i=kata.length -1; i >=0; i--){
  a=a+kata[i]; 
  }
  return a;
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

// Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  var jam = Math.floor(menit/60)
  var menit2 = menit % 60
  if(menit2 < 10){
    return jam + ':0' + menit2
  }else{
  return jam + ':' + menit2
  }
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Logic Challenge - X dan O
function xo(str) {
  var x = 0;
  var o = 0;
  for(var i = 0; i <= str.length; i++){
  if(str[i]==='x')x++;
  else if(str[i]==='o')o++;
}
  return x === o;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true