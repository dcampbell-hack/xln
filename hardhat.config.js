require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers")
const fs = require("fs");
const keyData = fs.readFileSync('./server/config/p-key.txt', {
  encoding: 'utf8', flag: 'r'
});

const eth_id = '68eb211506c141e78162043b7b0df69a';

module.exports = {
  defaultNetwork: 'hardhat',
  allowUnlimitedContractSize: true,
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${ eth_id }`,
      accounts: [ keyData ]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${ eth_id }`,
      accounts: [ keyData ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};
