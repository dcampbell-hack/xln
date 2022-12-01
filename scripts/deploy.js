const hre = require("hardhat");
const web3 = require("web3");
const fs = require("fs");
const dai = (n) => Number(web3.utils.toWei(n.toString(), "picoether"));

async function main() {

  let tokenAdmin;

  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0],
  // const deployer = 0x75cFC852f0A83DF3b19ead24793240B37b7DfadD,
  tokenPrice = dai(0.07),
  duration = 592200, 
  minPurchase = dai(15), 
  maxPurchase = dai(170),
  maxSupply = 5444444671,
  tokenSupply = 176944452;


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
    maxSupply
  )

   await token.deployed()
   console.log('Token Deployed -----', token.address)
  //ICO
  const xlnICO = await hre.ethers.getContractFactory('XLNICO')
  const ico = await xlnICO.deploy(
      token.address,
      duration, // duration (592200s = 1 week)
      tokenPrice, // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
      tokenSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
      minPurchase, //_minPurchase (in DAI)
      maxPurchase //_maxPurchase (in DAI)
  );

   await ico.deployed();
  await token.updateAdmin(deployer.address);

  // await token.updateAdmin(deployer.address);
  tokenAdmin = await token.admin();

  console.log('ICO Deployed 1 -----', ico.address, tokenAdmin )

  await token.connect(deployer).mint(deployer, 100000)
  await token.connect(deployer).mint(ico.address, tokenSupply )

  await ico.start();

  const xlnSwap = await hre.ethers.getContractFactory('XLNICO')
  const swap = await xlnSwap.deploy(token.address)

  const xlnENS = await hre.ethers.getContractFactory('XLNENS')
  const ens = await xlnSwap.deploy(xlnENS.address)



  let config = `
          exports.tokenPrice = '${tokenPrice}'
          exports.deployerAddress = '${deployer.address}'
          exports.tokenAddress = '${token.address}'
          exports.icoAddress = '${ico.address}'
          exports.nftAddress = '${nft.address}'
          exports.marketAddress = '${market.address}'
          exports.swapAddress = '${swap.address}'
          exports.swapAddress = '${swap.address}'  
          exports.ensAddress = '${ens.address}'
          `;

  let data = JSON.stringify(config);
  fs.writeFileSync('server/config/config.js', JSON.parse(data))

  saveFrontendFiles(ens, 'xlnENS')

};

function saveFrontendFiles(contract, name){
   const contractsDir = __dirname + "/../../ensData";
   
   if(!fs.existsSync(contractsDir)){
    fs.mkdirSync(contractsDir)
   }

   fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
   );

   const contractArtifact = artifacts.readArtifactSync(name)

   fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
   );

   
}


main()
.then(() => process.exit(0))
.catch(error => {
    process.exit(1);
});
