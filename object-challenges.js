// Logic Challenge - Change Me!

function changeMe(arr) {
  // cek jika arr kosong
  if(arr.length < 1) {
    console.log('');
  }

  for(var i = 0; i < arr.length; i++) {
    var objArr = {};
    var age = 2018 - arr[i][3];

    // assign key firstName
    objArr.firstName = arr[i][0];
    // assign key lastName
    objArr.lastName = arr[i][1];
    // assign key gender
    objArr.gender = arr[i][2];

    // jika umur tidak valid, key age = 'Invalid Birth Year'
    if(!age || 2018 < arr[i][3]) {
      objArr.age = 'Invalid Birth Year';
    } else {
      objArr.age = age;
    }

    console.log(objArr);
  }
}
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);

// Logic Challenge - Shopping Time!
function shoppingTime(memberId, money) {
  var sisa = money;
  var chart = [];
  
  for(var i=0; i<5; i++){
    if(sisa >= 1500000){
      chart.push('Sepatu Stacattu');
      sisa -= 1500000;
    } else if(sisa >= 500000){
      chart.push('Baju Zoro');
      sisa -= 500000;
    } else if(sisa >= 250000){
      chart.push('Baju H&N');
      sisa -= 250000;
    } else if(sisa >= 175000){
      chart.push('Sweater Uniklooh');
      sisa -= 175000;
    } else if(sisa >= 50000){
      chart.push('CasingHandphone');
      sisa -= 50000;
      break; // kondisi dihentikan, karna hanya diperbolehkan masing2 membeli 1 item
    }
  }
  // console.log(chart);
  // console.log('Sisa Uang : ' + sisa);
  
  var objProduct = {};
  objProduct.memberId = memberId;
  objProduct.money = money;
  objProduct.listPurchased = chart;
  objProduct.changeMoney = sisa;
  // objProduct.
  
  if(memberId === '' || memberId === undefined && money === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  return objProduct;
  
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

// Logic Challenge - Toko X
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  var newArray = []; // big warp   
  
  // stok product
  var stokSepatu = listBarang[0][2];
  var stokZoro = listBarang[1][2];
  var stokUniklooh = listBarang[2][2];
  
  // tampung ke varibel masing2 *push
  var pembeliSepatu = [];
  var pembeliZoro = [];
  var pembeliUniklooh = [];
  
  for(var i=0; i<shoppers.length; i++){
    if(shoppers[i].product === 'Sepatu Stacattu'){
      if(stokSepatu >= shoppers[i].amount){ // jika stok masih ada, maka bisa dijual
        pembeliSepatu.push(shoppers[i].name);
        stokSepatu -= shoppers[i].amount;
      }
    } else if(shoppers[i].product === 'Baju Zoro'){
      if(stokZoro >= shoppers[i].amount){
        pembeliZoro.push(shoppers[i].name);
        stokZoro -= shoppers[i].amount;
      }
    } else if(shoppers[i].product === 'Sweater Uniklooh'){
      if(stokUniklooh >= shoppers[i].amount){
        pembeliUniklooh.push(shoppers[i].name);
        stokUniklooh -= shoppers[i].amount;
      }
    }
  }
  
  
  var pembeli;
  var sisa;
  
  for(var l=0; l<listBarang.length; l++){
    if(listBarang[l][0] === 'Sepatu Stacattu'){
      pembeli = pembeliSepatu;
      sisa = stokSepatu;
      totProfit = (listBarang[l][2]- stokSepatu) * listBarang[l][1];
    } else if(listBarang[l][0] === 'Baju Zoro'){
      pembeli = pembeliZoro;
      sisa = stokZoro;
      totProfit = (listBarang[l][2] - stokZoro) * listBarang[l][1];
    } else if(listBarang[l][0] === 'Sweater Uniklooh'){
      pembeli = pembeliUniklooh;
      sisa = stokUniklooh;
      totProfit = (listBarang[l][2] - stokUniklooh) * listBarang[l][1];
    }
    
    
    var objectProduct = {};
    objectProduct.product = listBarang[l][0];
    objectProduct.shoppers = pembeli;
    objectProduct.leftOver = sisa;
    objectProduct.totalProfit = totProfit;
    newArray.push(objectProduct);
  }

  return newArray;
  
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));