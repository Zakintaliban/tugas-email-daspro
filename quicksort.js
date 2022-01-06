// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const tukar = (arr, idx1, idx2) => {
    // function tukar() ini gunanya mengubah dua angka dari index awal ke index berikutnya dan begitu sebaliknya
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  // pivot adalah elemen pertama
  let swapIdx = start;
  // untuk menjadi index, dan start adalah 0

  for (let i = start + 1; i <= end; i++) {
    // untuk melakukan loop setelah start/elemen pertama
    if (pivot > arr[i]) {
      swapIdx++;
      // untuk mengubah index berikutnya, contoh index pertama 4, setelahnya 8, dan berikutnya 2, menjadikannya penukaran 8 dan 2.
      tukar(arr, swapIdx, i);
      console.log(arr, swapIdx, i);
    }
  }

  tukar(arr, start, swapIdx);
  return swapIdx;
  // mengubah pivot dari start menuju swapPoint
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// jawabannya 3, karena terjadinya 3 kali lompatan, kalau kita ambil loop diatas, 8 akan bertukar dengan 1,2, dan 3 dikarenakan mereka
// dibawah index pertama, yaitu 4, menjadikannya lompat langsung ke index terakhir yaitu 7

// berikut adalah solusi untuk quick sortnya
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    // guna untuk tidak adanya infinite loop dan jika sudah selesai, tidak perlu melakukan looping kembali
    let pivotIndex = pivot(arr, left, right);
    // dimana left adalah sebelah kiri untuk index disebelah kiri, dan right adalah sebelah kanan untuk index disebelah kanan
    // pivot diawal adalah 3, yaitu adalah angka 4.

    //left
    quickSort(arr, left, pivotIndex - 1);
    // left adalah untuk angka diawal array dan pivotIndex - 1 adalah angka sebelum nomor 4 dan nomor 4 tidak ikut terhitung
    //right
    quickSort(arr, pivotIndex + 1, right);
    // right adalah untuk angka diakhir array dan pivotindex + adalah angka setelah nomor 4 dan nomor 4 tidak ikut terhitung
  }
  return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
