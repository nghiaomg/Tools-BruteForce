const { EthHdWallet } = require('eth-hd-wallet');
const { Web3 } = require('web3');
const bip39 = require('bip39');
const { ABI, CONTRACT_ADDRESS } = require('./ABI/TetherBSC_ABI');
const fs = require('fs');
const config = require('./config');

const web3 = new Web3(config.BSC_RPC);
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

function clearTerminal() {
  process.stdout.write('\x1Bc');
}

let checksCount = 0;

async function bruteForce() {
  try {
    checksCount++;
    let mnemonic = bip39.generateMnemonic();
    let wallet = EthHdWallet.fromMnemonic(mnemonic);
    let [address] = wallet.generateAddresses(1);

    let bnbBalance = await web3.eth.getBalance(address);
    let usdtBalance = await contract.methods.balanceOf(address).call();
    
    let privateKey = wallet.getPrivateKey(address);
    privateKey = privateKey.toString('hex');

    let bnbBalanceInEther = web3.utils.fromWei(bnbBalance, 'ether');
    let usdtBalanceInToken = web3.utils.fromWei(usdtBalance, 'ether');

    clearTerminal();
    console.log(`Tổng số lần kiểm tra: ${checksCount}`);
    console.log(`Kiểm tra gần nhất:`);
    console.log(`Địa chỉ ví: ${address}`);
    console.log(`Cụm từ gợi nhớ: ${mnemonic}`);
    console.log(`Private Key: ${privateKey}`);
    console.log(`Số dư BNB: ${bnbBalanceInEther}`);
    console.log(`Số dư USDT: ${usdtBalanceInToken}\n`);
    
    if (bnbBalance > 0 || usdtBalance > 0) {
      const content = `Địa chỉ ví: ${address}\nPrivate Key: ${privateKey}\nSố dư BNB: ${bnbBalanceInEther}\nSố dư USDT: ${usdtBalanceInToken}\nCụm từ gợi nhớ: ${mnemonic}\n\n`;
      
      try {
        fs.appendFileSync(config.BSC.MAIN_FILE, content);
        console.log('ĐÃ TÌM THẤY VÍ CÓ SỐ DƯ! Đã lưu vào found_wallets_bsc.txt');
      } catch (fileError) {
        console.error('Lỗi khi lưu file:', {
          error: fileError.message,
          wallet: { address, bnbBalance, usdtBalance }
        });
        
        try {
          fs.appendFileSync(config.BSC.BACKUP_FILE, content);
          console.log('Đã lưu thành công vào file backup');
        } catch (backupError) {
          console.error('Lỗi khi lưu file backup:', backupError.message);
        }
      }

      console.log({
        'Địa chỉ': address,
        'Cụm từ gợi nhớ': mnemonic,
        'Private Key': privateKey,
        'Số dư BNB': bnbBalanceInEther,
        'Số dư USDT': usdtBalanceInToken
      });
    }
  } catch (err) {
    console.log('Lỗi trong quá trình xử lý:', err.message);
  }
}

async function runMultipleTasks() {
  while (true) {
    try {
      const tasks = Array(config.CONCURRENT_TASKS).fill().map(() => bruteForce());
      await Promise.all(tasks);
    } catch (error) {
      console.error('Lỗi trong lô xử lý:', error);
    }
  }
}

for (let i = 0; i < config.THREADS; i++) {
  runMultipleTasks();
}

console.log('Đã bắt đầu quá trình bruteforce BSC với tốc độ tối đa...');