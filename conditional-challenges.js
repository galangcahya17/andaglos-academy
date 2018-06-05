// Menggunakan If Else
var nama = 'Zero';
var peran = 'Penyihir';
if(nama == '') {
  console.log("Nama harus diisi!");
}
if(nama == 'Mikael') {
  console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
}

if(nama == 'Nina' && peran == 'Ksatria') {
  console.log("Selamat datang di Dunia Proxytia, Nina\nHalo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
}

if(nama == 'Danu' && peran == 'Tabib') {
  console.log("Selamat datang di Dunia Proxytia, Danu\nHalo Tabib Danu, kamu akan membantu temanmu yang terluka.");
}

if(nama == 'Zero' && peran == 'Penyihir') {
  console.log("Selamat datang di Dunia Proxytia, Zero\nHalo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
}


// Menggunakan Switch-Case
var hari = 2; 
var bulan = 7; 
var tahun = 1998;

if(tahun < 1900 || tahun > 2200){
  console.log("tahun hanya bisa diisi antara 1900-2200")
}else{
  if(hari < 1 || hari > 31) {
    console.log("Hari hanya bisa diisi antara 1-31");
  }
  else {
    // console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
    switch(bulan) {
      case 1:   { console.log(hari + ' Januari ' + tahun); break; }
      case 2:   { console.log(hari + ' Februari ' + tahun); break; }
      case 3:   { console.log(hari + ' Maret ' + tahun); break; }
      case 4:   { console.log(hari + ' April ' + tahun); break; }
      case 5:   { console.log(hari + ' Mei ' + tahun); break; }
      case 6:   { console.log(hari + ' Juni ' + tahun); break; }
      case 7:   { console.log(hari + ' Juli ' + tahun); break; }
      case 8:   { console.log(hari + ' Agustus ' + tahun); break; }
      case 4:   { console.log(hari + ' September ' + tahun); break; }
      case 4:   { console.log(hari + ' Oktober ' + tahun); break; }
      case 4:   { console.log(hari + ' November ' + tahun); break; }
      case 4:   { console.log(hari + ' Desember ' + tahun); break; }
      default:  { console.log('Bulan hanya diisi antara 1-12'); }
    }
  }
}