const bubbleSort = (arr) => {
  const tukar = (arr, idx1, idx2) => {
    // function tukar() ini gunanya mengubah dua angka dari index awal ke index berikutnya dan begitu sebaliknya
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    // for loop pertama
    // i ini gunanya mengambil length dari sebuah array yg kita masukin, untuk kasus ini, ada 4 indexes
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

console.log(bubbleSort(4, 8, 2, 1, 5, 7, 6, 3));
