import axios from "../axios";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { infura } from "../data";
import Web3Modal from "web3modal";
import { create as ipfsHttpClient } from "ipfs-http-client";

import XLNNFT from "../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json";
import XLNMarket from "../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json";
import XLNICO from '../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json';

import {
  GET_ADDRESS,
  LOGGED_IN_USER_ADDRESS,
  UPDATE_WALLET_BALANCE,
  MINT_NFT,
  UPDATE_ADMIN,
  MINT,
  START,
  LOAD_NFT,
  BUY_TOKENS,
  BUY_NFT,
  WITHDRAW_TOKENS,
  WITHDRAW_DAI,
  GET_LISTING_PRICE,
  MAKE_MARKET_ITEM,
  CREATE_MARKET_SALE,
  FETCH_MARKET_TOKENS,
  FETCH_MY_NFTS,
  FETCH_ITEMS_CREATED,
  UPDATE_ADDRESS,
  TOKEN_SUPPLY,
  UPDATE_SUPPLY,
  GET_CONTRACT_ADDRESS,
  SHOW_FORM,
  CHAIN_ERROR,
} from "./types";

export const getAddress = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/blochain/get-address");

    dispatch({
      type: GET_ADDRESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        msg: "No address recieved",
        err,
      },
    });
  }
};

export const loggedInUserAddress = (address) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/address", { address });
    dispatch({
      type: LOGGED_IN_USER_ADDRESS,
      address: res.data.address,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const getContractAddress = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/blockchain/get-contract-address");

    dispatch({
      type: GET_CONTRACT_ADDRESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        msg: "There was an error recieving ",
        err,
      },
    });
  }
};

export const setShowForm = () => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_FORM,
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const updateSupply = ({ buyxln }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SUPPLY,
        payload: Number(buyxln),
      });
    } catch (err) {
      dispatch({
        type: CHAIN_ERROR,
        payload: {
          type: "index",
          msg: "No NFTs loaded",
          err,
        },
      });
    }
  };

export const updateWalletBalance = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/blockchain/update-wallet-balance");

    dispatch({
      type: UPDATE_WALLET_BALANCE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const loadNFTs = (blockchain) => async (dispatch) => {
  // what we want to load:
  // *** provider, tokenContract, marketContract, data for our marketItems ***

  try {
    const provider = new ethers.providers.JsonRpcProvider();

    const nftContract = new ethers.Contract(
      blockchain.nft.address,
      XLNNFT.abi,
      provider
    );

    const marketContract = new ethers.Contract(
      blockchain.market.address,
      XLNMarket.abi,
      provider
    );

    const data = await marketContract.fetchMarketTokens();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        // get meta data
        const meta = await axios.get(tokenUri);
        const price = ethers.utils.formatUnits(i.price.toString(), "ethers");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };

        return item;
      })
    );

    dispatch({
      type: LOAD_NFT,
      payload: items,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const tokenSupply = (amount) => {
  return {
    type: TOKEN_SUPPLY,
    payload: amount,
  };
};

export const buyTokens =  (blockchain) => async (dispatch) => {

  try {

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const ico = new ethers.Contract( blockchain.ico.address, XLNICO.abi, signer);

    console.log('Amount ---', typeof blockchain.dai  )

    //const price = ethers.utils.parseUnits(blockchain.dai, "ethers");
    let transaction = await ico.buy( '12562800000000000' );
    console.log('Transaction', transaction)
    await transaction.wait();


    // let transaction;
    // const { asset } = assets;

    // // Mint NFT from contract
    // const client = ipfsHttpClient(`https://ipfs.infura.io:5001/api/v0/${infura}`);

    // const obj = {
    //   price: asset.price,
    //   name: asset.name,
    //   description: asset.description,
    //   price: asset.price,
    //   fileUrl: `${asset.cover}`,
    // };

    // const fileUrl = `${client}/${obj.fileUrl}}`;

    // const { name, description, price } = obj;


    // // upload IPFS
    // const data = JSON.stringify({
    //   name,
    //   description,
    //   price,
    //   image: fileUrl,
    // });

    // try {
      
    //   // run a function that creates sale and passes in the url
    //   const web3Modal = new Web3Modal();
    //   const connection = await web3Modal.connect();
    //   const provider = new ethers.providers.Web3Provider(connection);
    //   const signer = provider.getSigner();

    //   // we want to create
    //   const nft = new ethers.Contract(
    //     blockchain.nft.address,
    //     XLNNFT.abi,
    //     signer
    //   );


    //   transaction = await nft.mintNFT(`/uploads/${asset.user}/asset/${asset.cover}`);
    //   let tx = await transaction.wait();
    
    //   let event = tx.events[0];
    //   let value = event.args[2];
    //   let tokenId = value.toNumber();
    //   const price = ethers.utils.parseUnits(asset.price, "ether");

    //   // list the item for sale on the marketsale
    //   const market = new ethers.Contract(
    //     blockchain.market.address,
    //     XLNMarket.abi,
    //     signer
    //   );

    //   let listingPrice = await market.getListingPrice();
    //   listingPrice = listingPrice.toString();

    //   transaction = await market.makeMarketItem(
    //     blockchain.nft.address,
    //     tokenId,
    //     price,
    //     { value: listingPrice }
    //   );

    //   await transaction.wait();

    //   console.log('NFT Market ---->', transaction )

    // } catch (err) {
    //   console.log("Error uploading file: ", err );
    // }


    // dispatch({
    //   type: MINT_NFT,
    //   // payload: res.data,
    // });

    dispatch({
      type: BUY_TOKENS,
      payload: transaction,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "token",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

// Token

export const mintToken = (token) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/nft/mintToken", token);

    dispatch({
      type: MINT_TOKEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "token",
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

// NFT

export const buyNFT = (blockchain) => async (dispatch) => {
  try {

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      blockchain.nft.address,
      XLNMarket.abi,
      signer
    );

    const price = ethers.utils.parseUnits(
      blockchain.nft.price.toString(),
      "ether"
    );
    const transaction = await contract.createMarketSale(
      blockchain.nft.address,
      "blockchain.nft.tokenId",
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNFTs(blockchain);

    // let buy;
    // if(!buy) buy = { price: 3 }
    // const res = await axios.post("/api/v1/blockchain/ico/buyXLN", buy);

    dispatch({
      type: BUY_NFT,
      // payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "nft",
        msg: "Cannot buy NFT",
        err,
      },
    });
  }
};

export const mintNFT =
  ({ blockchain, assets, selectedAsset }) =>
  async (dispatch) => {
    try {
      let transaction;
      const { asset } = assets;

      // Mint NFT from contract
      const client = ipfsHttpClient(`https://ipfs.infura.io:5001/api/v0/${infura}`);

      const obj = {
        price: asset.price,
        name: asset.name,
        description: asset.description,
        price: asset.price,
        fileUrl: `${asset.cover}`,
      };

      const fileUrl = `${client}/${obj.fileUrl}}`;

      const { name, description, price } = obj;


      // upload IPFS
      const data = JSON.stringify({
        name,
        description,
        price,
        image: fileUrl,
      });

      try {
        
        // run a function that creates sale and passes in the url
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        // we want to create
        const nft = new ethers.Contract(
          blockchain.nft.address,
          XLNNFT.abi,
          signer
        );


        transaction = await nft.mintNFT(`/uploads/${asset.user}/asset/${asset.cover}`);
        let tx = await transaction.wait();
      
        let event = tx.events[0];
        let value = event.args[2];
        let tokenId = value.toNumber();
        const price = ethers.utils.parseUnits(asset.price, "ether");

        // list the item for sale on the marketsale
        const market = new ethers.Contract(
          blockchain.market.address,
          XLNMarket.abi,
          signer
        );

        let listingPrice = await market.getListingPrice();
        listingPrice = listingPrice.toString();

        transaction = await market.makeMarketItem(
          blockchain.nft.address,
          tokenId,
          price,
          { value: listingPrice }
        );

        await transaction.wait();

        console.log('NFT Market ---->', transaction )

      } catch (err) {
        console.log("Error uploading file: ", err );
      }


      dispatch({
        type: MINT_NFT,
        // payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CHAIN_ERROR,
        payload: {
          type: "nft",
          isError: true,
          msg: "Not able to mint NFT",
          err,
        },
      });
    }
  };

// TOKEN

export const updateAdmin = (token) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/v1/blockchain/token/update-admin",
      token
    );

    dispatch({
      type: UPDATE_ADMIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "index",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const mint = (token) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/token/mint", token);

    dispatch({
      type: MINT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "token",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

// ICO

export const start = (ico) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/ico/start", ico);

    dispatch({
      type: START,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "ico",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const withdrawTokens = (tokens) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/v1/blockchain/ico/withdraw-tokens",
      tokens
    );

    dispatch({
      type: WITHDRAW_TOKENS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "ico",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const withdrawDai = (tokens) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/v1/blockchain/ico/withdraw-tokens",
      tokens
    );

    dispatch({
      type: WITHDRAW_DAI,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "ico",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

// MARKET

export const getListingPrice = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/blockchain/market/get-listing-price");

    dispatch({
      type: GET_LISTING_PRICE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "ico",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const makeMarketItem = (item) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/v1/blockchain/market/make-market-item",
      item
    );

    dispatch({
      type: MAKE_MARKET_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const createMarketSale = (sale) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/v1/blockchain/market/create-market-sale",
      sale
    );

    dispatch({
      type: CREATE_MARKET_SALE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const fetchMarketTokens = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "/api/v1/blockchain/market/fetch-market-tokens"
    );

    dispatch({
      type: FETCH_MARKET_TOKENS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const fetchMyNFTs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/blockchain/market/fetch-my-nfts");

    dispatch({
      type: FETCH_MY_NFTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

export const fetchItemsCreated = (tokens) => async (dispatch) => {
  try {
    const res = await axios.get(
      "/api/v1/blockchain/market/fetch-items-created"
    );

    dispatch({
      type: FETCH_ITEMS_CREATED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAIN_ERROR,
      payload: {
        type: "market",
        isError: true,
        msg: "No NFTs loaded",
        err,
      },
    });
  }
};

// ENS 
const listForSale = async ( tokenId, ensName) => {
  try{
     const tx = await ENSContract.setApprovalForAll(ENSName.address, true );
     await tx.wait();
     let priceInEth = ethers.utils.parseEther(price.toString())
     const tx2 = await marketplace.listENS(ensName, tokenId, priceInEth );
     await tx2.wait();
     prompt('Awesome! You have now listed your Item for sale');
  } catch(err){
    console.error(err)
  }
}
