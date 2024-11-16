module.exports = {
    // Cấu hình chung
    THREADS: 4,
    CONCURRENT_TASKS: 30,

    // RPC URLs
    BSC_RPCs: [
        'https://bsc-dataseed.bnbchain.org',
        'https://bsc-dataseed.nariox.org',
        'https://bsc-dataseed.defibit.io',
        'https://bsc-dataseed.ninicoin.io',
        'https://bsc.nodereal.io',
        'https://bsc-dataseed-public.bnbchain.org',
        'https://bnb.rpc.subquery.network/public',
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