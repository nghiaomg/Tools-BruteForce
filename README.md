# BSC & ETH Wallet Bruteforce

Công cụ bruteforce ví BSC và ETH được tạo bởi NghiaOMG.

## 🚀 Tính năng

- Tự động tạo ví ngẫu nhiên
- Kiểm tra số dư:
  - ETH và USDT trên mạng Ethereum
  - BNB và USDT trên mạng BSC
- Chạy đa luồng để tối ưu tốc độ
- Tự động chuyển đổi RPC khi bị giới hạn
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
# Chạy bruteforce ETH
node index-ERC.js

# Chạy bruteforce BSC
node index-BSC.js

# Nếu gặp lỗi OpenSSL, chạy với lệnh:
set NODE_OPTIONS=--openssl-legacy-provider && node index-ERC.js
# hoặc
set NODE_OPTIONS=--openssl-legacy-provider && node index-BSC.js
```

## ⚙️ Cấu hình

Tất cả cấu hình được tập trung trong file `config.js`:

```javascript
module.exports = {
    // Số luồng và tác vụ đồng thời
    THREADS: 4,
    CONCURRENT_TASKS: 30,

    // RPC URLs
    ETH_RPC: 'https://eth.drpc.org',
    BSC_RPC: 'https://bsc-dataseed.bnbchain.org',

    // Đường dẫn file kết quả
    ETH: {
        MAIN_FILE: 'found_wallets.txt',
        BACKUP_FILE: 'found_wallets_backup.txt'
    },
    BSC: {
        MAIN_FILE: 'found_wallets_bsc.txt',
        BACKUP_FILE: 'found_wallets_bsc_backup.txt'
    }
};
```

Bạn có thể dễ dàng điều chỉnh các thông số trong file này để thay đổi:
- Số luồng xử lý
- Số tác vụ chạy đồng thời
- URL của RPC endpoints
- Tên file lưu kết quả

## 📝 Kết quả

### Ethereum Network
- File chính: `found_wallets.txt`
- File backup: `found_wallets_backup.txt`

### BSC Network
- File chính: `found_wallets_bsc.txt`
- File backup: `found_wallets_bsc_backup.txt`

Format kết quả:
```
Địa chỉ ví: 0x...
Private Key: ...
Số dư ETH/BNB: ...
Số dư USDT: ...
Cụm từ gợi nhớ: ...
```

## 🔄 RPC Endpoints

### Ethereum
- https://eth.drpc.org

### BSC
- https://bsc-dataseed.bnbchain.org
- https://bsc-dataseed.nariox.org
- https://bsc-dataseed.defibit.io
- https://bsc-dataseed.ninicoin.io
- https://bsc.nodereal.io

## ⚠️ Lưu ý

- Tool chỉ phục vụ mục đích học tập và nghiên cứu
- Không sử dụng vào mục đích xấu
- Tôn trọng quyền riêng tư và tài sản của người khác

## 👨‍💻 Tác giả

Created by NghiaOMG

## 📄 License

MIT License