const hre = require("hardhat");
const fs = require('fs');

async function main() {

  const SICCMarket = await hre.ethers.getContractFactory("SICCMarket");
  const siccMarket = await SICCMarket.deploy();
  await siccMarket.deployed();
  console.log('siccMarket contract deployed to: ', siccMarket.address )

  const SICC = await hre.ethers.getContractFactory("SICC");
  const sicc = await SICC.deploy();
  await sicc.deployed(siccMarket.address);
  console.log('sicc contract deployed to: ', sicc.address )


  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();
  await crowdfunding.deployed();
  console.log('crowdfunding contract deployed to: ', crowdfunding.address )

let config = `
   export const siccMarketAddress = ${siccMarket.address}
   export const siccAddress = ${sicc.address}
   export const crowdfundingAddress = ${crowdfunding.address}
`;

let data = JSON.stringify(config);

fs.writeFileSync('../server/config/config.js', JSON.parse(data))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
