import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Token from "../../../../artifacts/contracts/XLN_Token.sol/XLNToken.json";
import ICO from "../../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json";
import NFT from "../../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json";
import Market from "../../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json";


  // Token Actions
  async function updateAdmin(blockchain) {}
  
  async function mintToken(blockchain, buyerAddress) {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
      blockchain.token.address,
      Token.abi,
      signer
    );

    const transaction = await contract.mint(buyerAddress);

    await transaction.wait();
  }