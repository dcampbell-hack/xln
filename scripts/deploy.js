const hre = require("hardhat");
const web3 = require("web3");
const fs = require("fs");

async function main() {

  const xlnMarket = await hre.ethers.getContractFactory("XLNMarket");
  const market = await xlnMarket.deploy();
  await market.deployed();
  const marketAddress = market.address;
  console.log('Market Deployed -----', market.address)

  const xlnNFT = await hre.ethers.getContractFactory("XLNNFT");
  const nft = await xlnNFT.deploy(marketAddress);
  await nft.deployed();
  const nftAddress = nft.address;
  console.log('NFT Deployed -----', nft.address)

  //Token
  const xlnToken = await hre.ethers.getContractFactory('XLNToken')
  const totalSupply =  5444444671; //5.4B

  const token = await xlnToken.deploy(
    'Medallion XLN', //name
    '$XLN', //sticker
    totalSupply
  )

   await token.deployed()
   console.log('Token Deployed -----', token.address)
  //ICO
  const xlnICO = await hre.ethers.getContractFactory('XLNICO')
  const ico = await xlnICO.deploy(
      token.address,
      300, // duration (592200s = 1 week)
      web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
      totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
      200, //_minPurchase (in DAI)
      5000 //_maxPurchase (in DAI)
  );

   await ico.deployed();
  await token.updateAdmin(ico.address);
  await ico.start();

  console.log('ICO Deployed -----', ico.address )

  let config = `
          exports.tokenAddress = '${token.address}'
          exports.icoAddress = '${ico.address}'
          exports.nftAddress = '${nft.address}'
          exports.marketAddress = '${market.address}'
          `;

  let data = JSON.stringify(config);
  fs.writeFileSync('server/config/config.js', JSON.parse(data))

};


main()
.then(() => process.exit(0))
.catch(error => {
    process.exit(1);
});
