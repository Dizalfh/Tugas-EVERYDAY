var kodeUnix = [
  23, 89, 67, 29, 192, 6, 2, 129, 21, 872, 891, 901, 70, 61, 78, 62, 32, 90, 90,
];

let hasil = kodeUnix
  .map((a) => a - 50)
  .map((b) => b + kodeUnix.length)
  .filter((c) => c < 20)
  .reduce((aku, dia) => aku + dia);

console.log(hasil);
