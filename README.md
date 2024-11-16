# ETH & USDT Wallet Bruteforce

Công cụ bruteforce ví Ethereum và USDT được tạo bởi NghiaOMG.

## 🚀 Tính năng

- Tự động tạo ví Ethereum ngẫu nhiên
- Kiểm tra số dư ETH và USDT
- Chạy đa luồng để tối ưu tốc độ
- Tự động lưu kết quả khi tìm thấy ví có số dư
- Hệ thống backup để đảm bảo không mất dữ liệu

## 📋 Yêu cầu

- Node.js (khuyến nghị v16+)
- NPM hoặc Yarn

## 🛠️ Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd <project-folder>
```

2. Cài đặt dependencies:
```bash
npm install web3
npm install bip39
npm install eth-hd-wallet
```

3. Chạy chương trình:
```bash
# Windows
set NODE_OPTIONS=--openssl-legacy-provider
node index.js

# Linux/Mac
export NODE_OPTIONS=--openssl-legacy-provider
node index.js
```

## ⚙️ Cấu hình

Trong file `index.js`, bạn có thể điều chỉnh:
```javascript
const CONCURRENT_TASKS = 30; // Số tác vụ chạy đồng thời
const THREADS = 4; // Số luồng xử lý
```

## 📝 Kết quả

- Kết quả được lưu trong `found_wallets.txt`
- File backup: `found_wallets_backup.txt`
- Format kết quả:
```
Address: 0x...
Private Key: ...
ETH Balance: ...
USDT Balance: ...
Mnemonic: ...
```

## ⚠️ Lưu ý

- Tool chỉ phục vụ mục đích học tập và nghiên cứu
- Không sử dụng vào mục đích xấu
- Tôn trọng quyền riêng tư và tài sản của người khác

## 👨‍💻 Tác giả

Created by NghiaOMG

## 📄 License

MIT License