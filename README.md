# Bella Vista Restaurant Website

## Cài đặt và Cấu hình

### Yêu cầu cài đặt
1. Node.js (v16 hoặc cao hơn)
2. MySQL (v8 hoặc cao hơn)
3. npm hoặc yarn

### Bước 1: Cài đặt Dependencies
```bash
npm install
# hoặc
yarn
```

### Bước 2: Cấu hình Database
1. Đảm bảo MySQL đã được cài đặt và đang chạy
2. Cập nhật thông tin kết nối MySQL trong file `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=210506
DB_NAME=bella_vista_restaurant
DB_PORT=3306
```

### Bước 3: Build và chạy ứng dụng
Cơ sở dữ liệu sẽ tự động được khởi tạo trong quá trình build!

```bash
# Cài đặt dependencies
npm install
# hoặc
yarn

# Build ứng dụng (sẽ tự động khởi tạo database)
npm run build
# hoặc
yarn build

# Chạy ứng dụng
npm run start
# hoặc
yarn start
```

Hoặc chạy ở chế độ development:
```bash
npm run dev
# hoặc
yarn dev
```

### Kiểm tra kết nối cơ sở dữ liệu
Sau khi cài đặt và chạy ứng dụng, bạn có thể kiểm tra kết nối cơ sở dữ liệu bằng cách truy cập:

```
http://localhost:3000/api/test-db
```

Nếu kết nối thành công, bạn sẽ thấy thông báo: `{"success":true,"message":"Kết nối cơ sở dữ liệu thành công!"}`

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem website.

## Đăng nhập Admin

- URL: [http://localhost:3000/admin](http://localhost:3000/admin)
- Tên đăng nhập: `admin`
- Mật khẩu: `bellavista2024`

## Các chức năng chính

1. **Đặt bàn**:
   - Chọn ngày và giờ
   - Điền thông tin khách hàng
   - Nhận xác nhận đặt bàn

2. **Trang Admin**:
   - Đăng nhập bảo mật
   - Xem danh sách đặt bàn
   - Quản lý trạng thái đặt bàn (Xác nhận hoặc Hủy)
   - Xem thông tin chi tiết đặt bàn

## Lưu ý phát triển

- Trong môi trường thực tế, bạn nên mã hóa mật khẩu admin
- Thêm xác thực email để xác nhận đặt bàn
- Thêm hệ thống thông báo qua email khi trạng thái đặt bàn thay đổi
