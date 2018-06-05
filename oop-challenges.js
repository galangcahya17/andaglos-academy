console.log("Membuat Class dan Meng-Instance nya.")
class Kalkulator{
  constructor(){
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = 0
  }
  tambah(){
    return this.hasil = angka1+angka2
  }

  kurang(){
    return this.hasil = angka1-angka2
  }

  kali(){
    return this.hasil = angka1*angka2
  }

  bagi(){
    return this.hasil = angka1/angka2
  }
}

const angka1 = 2
const angka2 = 3
const kalkulator = new Kalkulator(angka1, angka2)
kalkulator.tambah()
console.log(kalkulator.hasil) 
kalkulator.kurang()
console.log(kalkulator.hasil) 
kalkulator.kali()
console.log(kalkulator.hasil) 

kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) 



console.log("Melakukan inheritanc terhadap Class.")
class Hewan{
  constructor(warna, makanan, kaki){
    this.warna = warna
    this.makanan = makanan
    this.kaki = kaki
    this.buas = false
  }
  hewanBuas(){
    return this.buas = true
  }

  hewanTidakBuas(){
    return this.buas = false
  }
}
const hewan = new Hewan('coklat', 'daun', 4)
hewan.hewanTidakBuas()


class Ikan extends Hewan{
  constructor(warna,makanan, kaki){
    super(warna, makanan, kaki)
    this.air = false
  }
  berenangDiAir(){
    console.log('Ikan hidup di air')
    return this.air = true
  }
}

class Harimau extends Hewan{
  constructor(warna,makanan, kaki){
    super(warna, makanan, kaki)
    this.lari = false
  }
  lariCepat(){
    console.log('harimau memiliki kecepatan dalam berlari')
    return this.lari = true
  }
}

const hewanIkan = new Ikan('putih', 'planktone', 0)
const hewanHarimau = new Harimau('orange', 'tumbuhan', 4)

hewanIkan.berenangDiAir()
hewanHarimau.lariCepat()
hewanIkan.hewanTidakBuas()
hewanHarimau.hewanBuas()