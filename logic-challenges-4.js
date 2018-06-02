// Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  var index1 = 0;
  var index2 = 0;
  var tampung = 0;
  var arrX = [];
  
  if(arr.indexOf('x') === -1){
    return 0
  }
  else{
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === 'x'){
      index1 = i
      arrX.push(index1)
      }
      else if (arr[i] === 'o'){
       index2 = i
      }
   
      var hasil= [];
      for (var j = 0; j < arrX.length; j++){
        tampung = Math.abs(index2 - arrX[j]);
        hasil.push(tampung)
        hasil.sort()
      }
    }
      return hasil[0]
  }
  }

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


// Logic Challenge - Mengelompokkan Angka
function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var output = [[],[],[]];
    for(i=0;i<arr.length;i++){
        // console.log(i)
        if (arr[i]%3==0) {
            output[2].push(arr[i])
        } else if (arr[i] % 2 == 0) {
            output[0].push(arr[i])
        } else {
            output[1].push(arr[i])
        }
    }
    console.log(output)
    
}
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]