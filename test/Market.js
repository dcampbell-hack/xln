const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("XLN Market", function () {

  
  it("Should mint and trade NFTs", async function () {

    // test to recieve contract addresses
      const Market = await ethers.getContractFactory('XLNMarket');
      const market = await Market.deploy();
      await market.deployed();
      const marketAddress = market.address;

      const NFT = await ethers.getContractFactory('XLNNFT');
      const nft = await NFT.deploy(marketAddress);
      await nft.deployed();
      const nftContractAddress = nft.address;

      let listingPrice = await market.getListingPrice();
      listingPrice = listingPrice.toString();

      const auctionPrice = ethers.utils.parseUnits('100', 'ether');

      // test for minting
      await nft.mintNFT('https-t1');
      await nft.mintNFT('https-t2');


      await market.makeMarketItem(nftContractAddress, 1, auctionPrice, {
        value: listingPrice
      });

      await market.makeMarketItem(nftContractAddress, 2, auctionPrice, {
        value: listingPrice
      });

      // test for different addresses from different users - test accounts
      // return an array of however many addresses

      const [_, buyerAddress ] = await ethers.getSigners();
      await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {
        value: auctionPrice
      })

      let items = await market.fetchMarketTokens();

      items = await Promise.all(items.map(async i => {
        const tokenUri = await nft.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri
        }

        return item;
      
      }))

      // test out all the items
      console.log('items', items )

  });
});
