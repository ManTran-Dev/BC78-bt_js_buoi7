let arr = [];
let arr2 = [];

// Hàm thêm số vào mảng
function addNumber() {
  const numInput = document.getElementById("numInput").value * 1; // Lấy giá trị từ ô input
  // Kiểm tra giá trị có phải là số hợp lệ không
  const number = parseInt(numInput);
  if (isNaN(number)) {
    arr.join["0"];
  }

  // Thêm số vào mảng
  arr.push(number);

  // Cập nhật mảng hiển thị trên giao diện
  document.getElementById("arrayDisplay").innerText = arr.join(", ");

  // Xóa giá trị trong ô nhập liệu sau khi thêm
  document.getElementById("numInput").value = "";
}

//Tổng số dương
function tinhTong() {
  let sumPositive = arr.reduce((sum, num) => {
    if (num > 0) {
      return sum + num;
    }
    return sum;
  }, 0);
  sumPositive = `Tổng số dương: ${sumPositive}`;
  document.getElementById("result1").innerHTML = sumPositive;
}

function demSoDuong() {
  let positiveCount = 0; // Biến đếm số dương

  // Duyệt qua mảng và đếm các số dương
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    }
  }
  let result2 = `Tổng số dương: ${positiveCount}`;
  document.getElementById("result2").innerHTML = result2;
}

function min() {
  let min = Math.min(...arr);
  let result3 = `Số nhỏ nhất là: ${min}`;
  document.getElementById("result3").innerHTML = result3;
}

function minSoDuong() {
  const positiveNumber = arr.filter((num) => num > 0); //Lọc ra số dương
  const minDuong = Math.min(...positiveNumber);
  let result4 = `Số dương nhỏ nhất là: ${minDuong}`;
  document.getElementById("result4").innerHTML = result4;
}

function soChanCuoiCung() {
  let lastEvenNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      lastEvenNumber = arr[i];
    }
  }
  let result5 = `Số chẵn cuối cùng là: ${lastEvenNumber}`;
  document.getElementById("result5").innerHTML = result5;
}

function doiViTri() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
  document.getElementById("result6").innerHTML = arr.join(", ");
}

function sapXepTangDan() {
  arr.sort((a, b) => a - b);
  document.getElementById("result7").innerHTML = arr.join(", ");
}

function soNguyenTo() {
  let primeNumber = arr.filter((num) => num > 1); // Lọc số nguyên tố phải lớn hơn 1
  primeNumber = primeNumber.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  });
  let result8 = `Số nguyên tố đầu tiên: ${primeNumber[0]}`;
  document.getElementById("result8").innerHTML = result8;
  if (primeNumber.length == 0) {
    result8 = `Mảng không cô số nguyên tố`;
    document.getElementById("result8").innerHTML = result8;
  }
}

function addNumber2() {
  const numInput2 = document.getElementById("numInput2").value * 1; // Lấy giá trị từ ô input
  // Kiểm tra giá trị có phải là số hợp lệ không
  const number2 = parseFloat(numInput2);
  if (isNaN(number2)) {
    arr2.join["0"];
  }

  // Thêm số vào mảng
  arr2.push(number2);

  // Cập nhật mảng hiển thị trên giao diện
  document.getElementById("arrayDisplay2").innerText = arr2.join(", ");

  // Xóa giá trị trong ô nhập liệu sau khi thêm
  document.getElementById("numInput2").value = "";
}
//Đếm số nguyên
function demSoNguyen() {
  let countSoNguyen = 0; // Biến đếm số nguyên
  // Duyệt qua mảng và đếm các số nguyên
  for (let i = 0; i < arr2.length; i++) {
    if (Number.isInteger(arr2[i])) {
      countSoNguyen++;
    }
    let result9 = `Số nguyên: ${countSoNguyen}`;
    document.getElementById("result9").innerHTML = result9;
  }
}

function soSanhDuongAm() {
  let countSoDuong = 0; // Biến đếm số dương
  let countSoAm = 0; // Biến đếm số am
  // Duyệt qua mảng và đếm các số nguyên
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countSoDuong++;
    } else if (arr[i] < 0) {
      countSoAm++;
    }
  }
  if (countSoDuong > countSoAm) {
    let result11 = `Số dương > Số âm`;
    document.getElementById("result10").innerHTML = result11;
  } else if (countSoDuong < countSoAm) {
    let result11 = `Số âm > Số dương`;
    document.getElementById("result10").innerHTML = result11;
  } else {
    let result11 = `Số dương = Số âm`;
    document.getElementById("result10").innerHTML = result11;
  }
}
