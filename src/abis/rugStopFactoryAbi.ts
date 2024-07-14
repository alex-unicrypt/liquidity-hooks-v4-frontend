export const rugStopFactoryAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "Currency",
        "name": "currency0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "Currency",
        "name": "currency1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint24",
        "name": "fee",
        "type": "uint24"
      },
      {
        "indexed": false,
        "internalType": "contract CLLockerHook",
        "name": "clockhook",
        "type": "address"
      }
    ],
    "name": "Initialize",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MAX_PRICE_LIMIT",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "",
        "type": "uint160"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MIN_PRICE_LIMIT",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "",
        "type": "uint160"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "Currency",
        "name": "currency0",
        "type": "address"
      },
      {
        "internalType": "Currency",
        "name": "currency1",
        "type": "address"
      },
      {
        "internalType": "uint24",
        "name": "fee",
        "type": "uint24"
      }
    ],
    "name": "initializePool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const