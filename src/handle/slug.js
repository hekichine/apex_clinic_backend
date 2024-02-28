const slugify = (str) => {
  if (!str) {
    return null;
  }
  return str
    .toLowerCase()
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, '') // xóa các ký tự dấu sau khi tách tổ hợp
    .replace(/[đĐ]/g, 'd') // Thay ký tự đĐ
    .replace(/([^0-9a-z-\s])/g, '') // Xóa ký tự đặc biệt
    .replace(/(\s+)/g, '-') // Xóa khoảng trắng thay bằng ký tự -
    .replace(/-+/g, '-') // Xóa ký tự - liên tiếp
    .replace(/^-+|-+$/g, '') // xóa phần dư - ở đầu & cuối
    
}


export default slugify
