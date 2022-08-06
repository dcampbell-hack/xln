require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const keyData = fs.readFileSync('./server/config/p-key.txt', {
//   encoding: 'utf8', flag: 'r'
// })

const keyData = "880cc13f65a639ab6ddd37afbfa9b008bc5045fccc2da1b715b67f7c8317fdec"
const eth_id = '68eb211506c141e78162043b7b0df69a';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
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
