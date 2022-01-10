const sort = (data, start, end) => {
  const partition = (data, start, end) => {
    //diatas adalah function lomuto partition, guna mengambil nilai pivot/terakhir
    const swap = (x, y) => {
      //function tukar() ini gunanya menukar dua index
      const temp = data[y];
      data[y] = data[x];
      data[x] = temp;
    };
    const pivot = data[end];
    //untuk kasus ini 4, dan mencari dimana posisi 4 ini ditempatkan, sehingga sebelah kiri 4 lebih kecil, dan sebelah kanannya lebih besar.

    console.log({ pivot });
    // guna melihat pivot diawal, yaitu data terakhir

    let center = start;
    //dan kita membuat posisi pivot

    for (let ref = start; ref < end; ++ref) {
      // sekarang kita melakukan iterasi dari kiri (yakni 8), perlahan-lahan menuju ke kanan, sampai posisi terakhir

      console.log("iterasi", ref, data.join(" "));
      //memunculkan data yg akan diterasi, yakni 6

      if (data[ref] < pivot) {
        console.log("swap", ref, data.join(" "));
        // memunculkan iterasi dimana terjadinya ada penukaran

        // dan jika menemukan angka lebih kecil dari pada nilai pivot, maka nilai akan dipindahkan kesebelah kiri
        swap(center, ref);
        ++center;
        // dan karena sudah mendapatkan satu angka kita cukup pindahkan center ke kanan
      }
    }
    swap(center, end);
    // menukar angka tengah menjadi angka terakhir
    console.log({ center });
    // memunculkan posisi dimana pivot berakhir
    return center;
  };

  if (start >= end) return;

  const center = partition(data, start, end);
  sort(data, start, center - 1);
  sort(data, center + 1, end);
  partition(data, 0, data.length - 1);
};

let angka = [8, 3, 9, 0, 5, 2, 6];
sort(angka, 0, angka.length - 1);
console.log(angka.join(" "));
