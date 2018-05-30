// Tugas 1
function shoutOut() {
  console.log("Halo Function!");
}
shoutOut();

// Tugas 2
function calculateMultiply(num1,num2) {
  return num1 * num2
}
var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian); 

// Tugas 3
function processSentence(name, age, address, hobby) {
  return 'Nama saya ' + name + ', umur saya '+ age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby
}

var fullSentence = processSentence('Agus', 30 , 'Jln. Malioboro, Yogjakarta', 'gaming');
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan s
