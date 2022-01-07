let dataInput = [4, 8, 2, 1, 5, 7, 6, 3];

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

const bubbleSort = (arr) => {
  const tukar = (arr, idx1, idx2) => {
    // function tukar() ini gunanya mengubah dua angka dari index awal ke index berikutnya dan begitu sebaliknya
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    // for loop pertama
    // i ini gunanya mengambil length dari sebuah array yg kita masukin, untuk kasus ini, ada 7 indexes
    // dan selagi i lebih dari 0, i berkurang, i akan berguna untuk for loop kedua
    for (let j = 0; j < i - 1; j++) {
      //guna for loop kedua ini untuk mengurangi komparasi tanpa harus mengulang keseluruh index
      //melainkan index untuk sorting akan berkurang apabila angka terakhir (untuk kasus ini 2) sudah mencapai paling belakang dst.
      console.log(arr, arr[j], arr[j + 1]);
      //memunculkan array yg kita masukan diawal, index angka awal dan index angka berikutnya
      if (arr[j] < arr[j + 1]) {
        //apabila index awal kurang dari index berikutnya:
        tukar(arr, j, j + 1);
        //function tukar akan melakukan tugasnya. dan akan melakukan perulangan hingga array mengecil.
      }
    }
    console.log("ONE PASS COMPLETED");
    //membukitkan loop pertama sudah selesai
  }
  return arr;
  //mengembalikan hasil jadinya
};

console.log(`hasil pivot untuk quicksort adalah: ${pivot(dataInput)}`);
console.log(`hasil quicksort: ${quickSort(dataInput)}`);
console.log(`hasil bubblesort: ${bubbleSort(dataInput)}`);
