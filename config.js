module.exports = {
    // Cấu hình chung
    THREADS: 4,
    CONCURRENT_TASKS: 30,

    // RPC URLs
    ETH_RPC: 'https://eth.drpc.org',
    BSC_RPC: 'https://bsc-dataseed.bnbchain.org',

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