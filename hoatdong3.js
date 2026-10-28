// ==========================================
// HOẠT ĐỘNG 3: ĐÓNG GÓI CODE TÍNH THUẾ THU NHẬP
// ==========================================

// 1. Khai báo hàm tính thuế thu nhập cá nhân (đóng gói đoạn code lặp lại)
function tinhThuThue(thuNhap) {
    let tienThuThe = 0;

    // Logic tính thuế theo bậc thang (ví dụ giả định)
    if (thuNhap <= 10) {
        tienThuThe = thuNhap * 0.05; // Thuế suất 5%
    } else if (thuNhap <= 30) {
        tienThuThe = thuNhap * 0.10; // Thuế suất 10%
    } else {
        tienThuThe = thuNhap * 0.20; // Thuế suất 20%
    }

    return tienThuThe;
}

// 2. Gọi hàm tái sử dụng cho nhiều mức lương/thu nhập khác nhau
let mucLuong1 = 8;   // Triệu
let mucLuong2 = 25;  // Triệu
let mucLuong3 = 50;  // Triệu

console.log("=== KẾT QUẢ TÍNH THUẾ THU NHẬP ===");
console.log("Thu nhập " + mucLuong1 + " triệu -> Tiền thuế phải nộp là: " + tinhThuThue(mucLuong1) + " triệu");
console.log("Thu nhập " + mucLuong2 + " triệu -> Tiền thuế phải nộp là: " + tinhThuThue(mucLuong2) + " triệu");
console.log("Thu nhập " + mucLuong3 + " triệu -> Tiền thuế phải nộp là: " + tinhThuThue(mucLuong3) + " triệu");