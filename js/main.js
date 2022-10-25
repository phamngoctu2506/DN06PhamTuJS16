//! bài tập 1
/**
 * b1: tạo hàm
 * b2: khai báo biến
 * b3: phân loại điều kiện vòng lặp
 * b4: hiển thị kết quả
 */

function timSoNguyenDuong() {
    var num = 0;
    var i = 1;
    while (num < 10000) {
        i++;
        num = num + i;
    }
    document.getElementById('ketQua1').innerHTML = i;
}

//! bài tập 2
/**
 * b1: tạo hàm
 * b2: Lấy giá trị từ value
 * b3: phân loại điều kiện vòng lặp
 * b4: hiển thị kết quả
 */


function tinhTongSo() {
    var x = Number(document.getElementById('num1').value);
    var n = Number(document.getElementById('num2').value);
    var luyThua = 1;
    var tong = 0;
    for (var i = 1; i <= n; i++) {
        luyThua = Math.pow(x, i);
        tong += luyThua;
    }
    document.getElementById('ketQua2').innerHTML = tong;
}

//! bài tập 3
/**
 * b1: tạo hàm
 * b2: Lấy giá trị từ value
 * b3: phân loại điều kiện vòng lặp
 * b4: hiển thị kết quả
 */

function tinhGiaiThua() {
    var num3 = Number(document.getElementById('num3').value);
    var giaiThua = 1;
    var tong = 0;
    for (var i = 1; i <= num3; i++) {
        giaiThua = giaiThua * i;
    }
    document.getElementById('ketQua3').innerHTML = giaiThua;
}

//! bài tập 4
/**
 * b1: tạo hàm
 * b2: gắn sự kiện click
 * b3: tạo biến cho divChan divLe
 * b4: phân loại điều kiện vòng lặp và điều kiện if else
 * b5: hiển thị kết quả
 */


function taoDiv() {
    var divChan = '<div class="mt-2 alert bg-primary">Div chẵn</div>';
    var divLe = '<div class="mt-2 alert bg-danger">Div lẻ</div>';
    var thediv = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            thediv += divLe;
        } else {   
            thediv += divChan;
        }
    }
    document.getElementById("ketQua4").innerHTML = thediv;
}