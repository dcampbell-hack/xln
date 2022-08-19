const { expect } = require("chai");
const { ethers } = require("hardhat");
const { nftAddress, marketAddress } = require("../server/config/config")

describe("XLNMarket", () => {
  let nft, market, nftAddress, marketAddress;


  beforeEach(async () => {

    const xlnMarket = await ethers.getContractFactory("XLNMarket");
    market = await xlnMarket.deploy();
    await market.deployed();
    marketAddress = market.address;
  
    const xlnNFT = await ethers.getContractFactory("XLNNFT");
    nft = await xlnNFT.deploy(marketAddress);
    await nft.deployed();
    nftAddress = nft.address;

  });

  describe("Deployment", () => {
    it("gets nft contract address", async () => {
      const address = await nft.address;
      expect(address).to.equal(nftAddress);
    });

    it("gets market contract address", async () => {
      const address = await market.address;
      expect(address).to.equal(marketAddress);
    });

  });

  describe("XLN NFT", () => {

    it("gets nft contract address", async () => {
      const address = await nft.address;
      expect(address).to.equal(nftAddress);
    });

  });

  describe("XLN Market", () => {

    it("gets market contract address", async () => {
      const address = await market.address;
      expect(address).to.equal(marketAddress);
    });
    
  });

});