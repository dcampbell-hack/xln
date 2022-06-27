require("@nomiclabs/hardhat-waffle");
const eth_id = '68eb211506c141e78162043b7b0df69a'
const p_key = 'b026e73511bc97873460063947cc258d2fb5c99f9e8bc0077a97a626de08425f'

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.ETHEREUM_ID || eth_id}`,
      accounts: [process.env.PKey || p_key]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.ETHEREUM_ID || eth_id}`,
      accounts: [process.env.PKey || p_key]
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
