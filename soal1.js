class Barang {
  barang1 = "Buku Tulis";
  barang2 = "Laptop";
  barang3 = "keyboard";
  barang4 = "Mouse Pad";
  barang5 = "Smartphone";

  keterangan() {
    console.log(
      `DAFTAR BARANG YANG ADA DI MEJA 1.${this.barang1} 2.${this.barang2} 3.${this.barang3} 4.${this.barang4}  5.${this.barang5}`
    );
  }
}

let barangnya = new Barang();

console.log(barangnya.keterangan());
