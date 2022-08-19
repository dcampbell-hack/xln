import axios from "../axios";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  GET_ADDRESS,
  UPDATE_WALLET_BALANCE,
  MINT_NFT,
  UPDATE_ADMIN,
  MINT,
  START,
  BUY_TOKENS,
  BUY_XLN,
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
  GET_CONTRACT_ADDRESS,
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
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
  }
};



export const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
};

export const updateSupply = ({ buyXLN }) => {

  console.log('Recieved New Supply --- buyXLN action', buyXLN)
  return {
    type: UPDATE_SUPPLY,
    payload: buyXLN
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
    dispatch({ type: CHAIN_ERROR, payload: err });
  }
};

export const tokenSupply = (amount) => {
  return {
    type: TOKEN_SUPPLY,
    payload: amount
  }
};

export const buyTokens = async (ico) =>  async  (dispatch) => {
  console.log('Buy Tokens  Action ----->', ico )

  try {

    const web3Modal = new Web3Modal();
    console.log('Check buyTokens function() ---', web3Modal)
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();
    const contract = new ethers.Contract( ico.address, ICO.abi, signer );
    
    const price = ethers.utils.parseUnits( amount.toString(), 'ethers');
    const transaction = await contract.buyXLN( ico.address, ico.TokenId, {
     value: price
    })
  
   transaction = await transaction.wait();

    dispatch({
      type: BUY_TOKENS,
      payload: transaction,
    });
  } catch (err) {
    dispatch({ type: CHAIN_ERROR, payload: err });
  }

};

// NFT

export const mintToken = (token) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/nft/mintToken", token);

    dispatch({
      type: MINT_TOKEN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: CHAIN_ERROR, payload: err });
  }
};

// NFT

export const mintNFT = (nft) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/blockchain/nft/mintNFT", nft);

    dispatch({
      type: MINT_NFT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
  }
};

export const buyXLN = (buy) => async (dispatch) => {
  try {
    let buy;
    if(!buy) buy = { price: 3 }
    const res = await axios.post("/api/v1/blockchain/ico/buyXLN", buy);

    dispatch({
      type: BUY_XLN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
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
    dispatch({ type: CHAIN_ERROR, payload: err });
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
      dispatch({ type: CHAIN_ERROR, payload: err });
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
      dispatch({ type: CHAIN_ERROR, payload: err });
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
      dispatch({ type: CHAIN_ERROR, payload: err });
    }
  };

  export const fetchMarketTokens = () => async (dispatch) => {
    try {
      const res = await axios.get("/api/v1/blockchain/market/fetch-market-tokens");
  
      dispatch({
        type: FETCH_MARKET_TOKENS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: CHAIN_ERROR, payload: err });
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
      dispatch({ type: CHAIN_ERROR, payload: err });
    }
  };

  export const fetchItemsCreated = (tokens) => async (dispatch) => {
    try {
      const res = await axios.get( "/api/v1/blockchain/market/fetch-items-created");
  
      dispatch({
        type: FETCH_ITEMS_CREATED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: CHAIN_ERROR, payload: err });
    }
  };

export const connectUserWallet = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(
      `/api/v1/users/${payload.id}/wallets`,
      payload
    );
    dispatch({
      type: CONNECTED_WALLET,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }

  if (!payload.code) {
    return {
      type: CONNECTED_WALLET,
      balance: payload.balance,
      address: payload.address,
      username: payload.username,
      avatar: payload.avatar,
      cover: payload.cover,
    };
  } else {
    return {
      type: CHAIN_ERROR,
      payload: {
        response: {
          data: {
            error: payload.error,
          },
          status: payload.code,
        },
      },
    };
  }
};
