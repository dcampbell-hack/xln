import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Token from "../../../../../../artifacts/contracts/XLN_Token.sol/XLNToken.json";
import ICO from "../../../../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json";
import NFT from "../../../../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json";
import Market from "../../../../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json";

  // NFT Actions

  async function buyNFT(blockchain) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      blockchain.market.address,
      Market.abi,
      signer
    );

    const price = ethers.BigNumber.from(blockchain.price).mul(
      ethers.BigNumber.from(10).pow(18)
    );

    console.log("Buy New NFT ----- 1", {
      price,
      contract,
      bPrice: blockchain.price,
      marketAddress: blockchain.market.address,
      nftAddress: blockchain.nft.address,
    });
    // const price = ethers.utils.parseUnits(Number(18).toString(), "ether");
    const transaction = await contract.createMarketSale(
      blockchain.market.address,
      blockchain.nft.tokenId,
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNFTs();
    console.log("Buy New NFT ----- 3", transaction);
  }

  // if (loadingState === "loaded" && !nfts.length)
  //   return <h1> No NFTs in marketplace</h1>;

  // async function mintNFT(){}

  async function loadNFTs(blockchain) {
    // provider, icoContract, tokenContract, nftContract, marketContract, data for marketItem

    const provider = new ethers.providers.JsonProvider();

    const tokenContract = new ethers.Contract(
      blockchain.token.address,
      Token.abi,
      provider
    );
    const icoContract = new ethers.Contract(
      blockchain.ico.address,
      ICO.abi,
      provider
    );
    const nftContract = new ethers.Contract(
      blockchain.nft.address,
      NFT.abi,
      provider
    );
    const marketContract = new ethers.Contract(
      blockchain.market.address,
      Market.abi,
      provider
    );

    const fetchMarketItems = await marketContract.fetchMarketTokens();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = nftContract.tokenUri(i.tokenId);
        // We want get the token metadata -json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUtils(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };

        setNFTs(items);
        setLoadingState("loaded");
      })
    );
  }