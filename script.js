// Hàm để xử lý phản hồi của người dùng
function respond(answer) {
    let message = '';
    if (answer === 'yes') {
        message = 'Em đã đồng ý làm người yêu anh! 💖';
    } else if (answer === 'no') {
        message = 'Anh buồn quá... 😢';
    }

    // Hiển thị thông báo với kết quả
    alert(message);
}
