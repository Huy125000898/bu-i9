// ==========================================
// HOẠT ĐỘNG 2: TỔNG HỢP CÁC BÀI TẬP VỀ HÀM (FUNCTIONS)
// ==========================================

// --- BÀI 1: Hàm tính diện tích hình chữ nhật ---
function tinhDienTich(dai, rong) {
    return dai * rong;
}

console.log("=== BÀI 1: TÍNH DIỆN TÍCH HÌNH CHỮ NHẬT ===");
// Gọi hàm 3 lần với các thông số khác nhau
console.log("Lần 1 (Chiều dài 5, Chiều rộng 10):", tinhDienTich(5, 10));   // Kết quả: 50
console.log("Lần 2 (Chiều dài 7, Chiều rộng 3):", tinhDienTich(7, 3));     // Kết quả: 21
console.log("Lần 3 (Chiều dài 12, Chiều rộng 4):", tinhDienTich(12, 4)); // Kết quả: 48


// --- BÀI 2: Hàm chào hỏi và tính số tuổi tự động ---
function chaoVaTinhTuoi(ten, namSinh) {
    let namHienTai = 2026; // Năm hiện tại
    let soTuoi = namHienTai - namSinh;
    
    return "Chào " + ten + ", bạn hiện tại " + soTuoi + " tuổi.";
}

console.log("\n=== BÀI 2: HÀM CHÀO VÀ TÍNH TUỔI ===");
let ketQua = chaoVaTinhTuoi("Nguyen Quang Huy", 2006);
console.log(ketQua); 
// Kết quả in ra: Chào Nguyen Quang Huy, bạn hiện tại 20 tuổi.