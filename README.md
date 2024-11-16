# 🚀 ETH & BSC Wallet Bruteforce

Công cụ bruteforce ví ETH và BSC được tạo bởi NghiaOMG.

## 📋 Tính năng

- Tự động tạo ví ngẫu nhiên
- Kiểm tra số dư:
  - ETH và USDT trên mạng Ethereum
  - BNB và USDT trên mạng BSC
- Chạy đa luồng để tối ưu tốc độ
- Tự động lưu kết quả khi tìm thấy ví có số dư
- Hệ thống backup để đảm bảo không mất dữ liệu

## 💻 Yêu cầu hệ thống

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
npm install web3 bip39 eth-hd-wallet
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
    BSC_RPCs: [
        'https://bsc-dataseed1.binance.org',
        'https://bsc-dataseed2.binance.org',
        'https://bsc-dataseed3.binance.org',
        'https://bsc-dataseed4.binance.org',
        'https://bsc.nodereal.io',
        'https://rpc.ankr.com/bsc'
    ],
    ETH_RPC: 'https://eth.drpc.org',

    // File paths
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

## 📁 Cấu trúc thư mục

```
├── index-ERC.js         # Script bruteforce ETH
├── index-BSC.js         # Script bruteforce BSC
├── config.js            # File cấu hình
├── ABI/
│   ├── TetherERC_ABI.js # ABI cho USDT trên ETH
│   └── TetherBSC_ABI.js # ABI cho USDT trên BSC
├── found_wallets.txt    # Kết quả tìm được trên ETH
└── found_wallets_bsc.txt # Kết quả tìm được trên BSC
```

## 📝 Format kết quả

Kết quả được lưu với format:
```
Địa chỉ ví: 0x...
Private Key: ...
Số dư ETH/BNB: ...
Số dư USDT: ...
Cụm từ gợi nhớ: ...
```

## ⚠️ Lưu ý

- Tool chỉ phục vụ mục đích học tập và nghiên cứu
- Không sử dụng vào mục đích xấu
- Tôn trọng quyền riêng tư và tài sản của người khác

## 👨‍💻 Tác giả

Created by NghiaOMG

## 📄 License

MIT License

## 🤝 Đóng góp

Mọi đóng góp và phản hồi đều được chào đón. Vui lòng tạo issue hoặc pull request.