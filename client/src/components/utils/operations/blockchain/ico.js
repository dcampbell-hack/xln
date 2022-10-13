import { ethers } from "ethers";
import Web3Modal from "web3modal";
import ICO from "../../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json";


  // ICO Actions

  async function buyTokens(blockchain) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      blockchain.ico.address,
      ICO.abi,
      signer
    );

    console.log("Trigger Buy Tokens ----> 0", blockchain.ico.address, contract);

    const price = ethers.BigNumber.from(blockchain.price).mul(
      ethers.BigNumber.from(10).pow(18)
    );
    //const price = ethers.utils.parseUnits(blockchain.price.toString(), "dai");

    console.log("Trigger Buy Tokens ----> 1", price);

    const transaction = await contract.buy(price);

    console.log("Trigger Buy Tokens ----> 2", transaction);

    await transaction.wait();
  }

  async function withdrawTokens(blockchain) {}
  async function withdrawDai(blockchain) {}