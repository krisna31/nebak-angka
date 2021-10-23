var tanya = true
while (tanya) {
  var nyawa = 3
  var comp = Math.round(Math.random() * 10);
  // var comp = Math.random();
  // if (comp >= 0 && comp < 0.1) {
  //   comp = 1;
  // } else if (comp >= 0.1 && comp < 0.2) {
  //   comp = 2;
  // } else if (comp >= 0.2 && comp < 0.3) {
  //   comp = 3;
  // } else if (comp >= 0.3 && comp < 0.4) {
  //   comp = 4;
  // } else if (comp >= 0.4 && comp < 0.5) {
  //   comp = 5;
  // } else if (comp >= 0.5 && comp < 0.6) {
  //   comp = 6;
  // } else if (comp >= 0.6 && comp < 0.7) {
  //   comp = 7;
  // } else if (comp >= 0.7 && comp < 0.8) {
  //   comp = 8;
  // } else if (comp >= 0.8 && comp < 0.9) {
  //   comp = 9;
  // } else {
  //   comp = 10;
  // }
  // rules
  for (nyawa; nyawa > 0;) {
    var user = prompt('masukkan angka antara 1-10\nNyawa tersisa ' + nyawa);
    if (parseInt(user) == comp) {
      alert('Pilihan Anda sama dari Pilihan Computer');
      alert('Kamu MENANG');
      nyawa = -1;
    } else if (parseInt(user) < comp) {
      alert('Pilihan Anda Kurang Besar dari Pilihan Computer');
      nyawa--;
    } else if (parseInt(user) > comp) {
      alert('Pilihan Anda Kurang Kecil dari Pilihan Computer');
      nyawa--;
    } else {
      alert('Pilihan Anda KELIRU dari Pilihan Computer');
      nyawa--;
    }
    if (nyawa == 0) {
      alert('Kamu KALAH')
    }
  }
  tanya = confirm('Mau Main Lagi?');
}
alert('Terimakasih Sudah Bermain.')