import {
  MINT_NFT,
  UPDATE_ADMIN,
  MINT,
  START,
  BUY_XLN,
  WITHDRAW_TOKENS,
  WITHDRAW_DAI,
  GET_LISTING_PRICE,
  MAKE_MARKET_ITEM,
  CREATE_MARKET_SALE,
  FETCH_MARKET_TOKENS,
  FETCH_MY_NFTS,
  FETCH_ITEMS_CREATED,
  CHAIN_ERROR,
} from "../../actions/types";

const initState = {
  balance: 0,
  address: null,
  token: {
    message: "",
    mint: {
        status: false,
        payload: {}
    },
    updateAdmin: {
        status: false,
        payload: {}
    },
  },
  nft: {
    message: "",
    mintNFT: {
        status: false,
        payload: {}
    }
  },
  market: {
    message: "",
    getListingPrice: {
        status: false,
        payload: {}
    },
    makeMarketItem: {
        status: false,
        payload: {}
    },
    createMarketSale: {
        status: false,
        payload: {}
    },
    fetchMarketTokens: {
        status: false,
        payload: {}
    },
    fetchMyNFTs: {
        status: false,
        payload: {}
    },
    fetchItemsCreated: {
        status: false,
        payload: {}
    },

  },
  ico: {
    message: "",
    start: {
        status: false,
        payload: {}
    },
    buyXLN: {
        status: false,
        payload: {}
    },
    withdrawTokens: {
        status: false,
        payload: {}
    },
    withdrawDai: {
        status: false,
        payload: {}
    },
  },
  wallet: null,
  error: null,
  status: null,
  isError: false,
  tokenRecieved: false,
  loading: true,
};

export default function (state = initState, action) {
  switch (action.type) {
    case MINT_NFT:
      return {
        ...state,
        loading: false,
        isError: false,
        nft: { 
            ...state.nft,
            message: "NFT has been minted!", 
            mintNFT: { status: true, payload: action.payload } 
        }
      };
    case UPDATE_ADMIN:
      return {
        ...state,
        loading: false,
        isError: false,
        token: { 
            ...state.token,
            message: "Admin has been updated", 
            updateAdmin: { status: true, payload: action.payload } 
        }

      };
    case MINT:
      return {
        ...state,
        loading: false,
        isError: false,
        token: { 
            ...state.token,
            message: "New Tokens have been created", 
            mint: { status: true, payload: action.payload } 
        }
      };
    case START:
      return {
        ...state,
        loading: false,
        isError: false,
        ico: { 
            ...state.ico,
            message: "The ICO has started", 
            start: { status: true, payload: action.payload } 
        }
      };
    case BUY_XLN:
      return {
        ...state,
        loading: false,
        isError: false,
        ico: { 
            ...state.ico,
            message: "Tokens have been bought", 
            buyXLN: { status: true, payload: action.payload } 
        }
      };
    case WITHDRAW_TOKENS:
      return {
        ...state,
        loading: false,
        isError: false,
        ico: { 
            ...state.ico,
            message: "User has withdrawn tokens", 
            withdrawTokens: { status: true, payload: action.payload } 
        }
      };
    case WITHDRAW_DAI:
      return {
        ...state,
        loading: false,
        isError: false,
        ico: { 
            ...state.ico,
            message: "Admin has withdrawn Dai", 
            buyXLN: { status: true, payload: action.payload } 
        }
      };
    case GET_LISTING_PRICE:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "Successfully listed price ", 
            getListingPrice: { status: true, payload: action.payload } 
        }
      };
    case MAKE_MARKET_ITEM:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "Made new market item ", 
            makeMarketItem: { status: true, payload: action.payload } 
        }
      };
    case CREATE_MARKET_SALE:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "Market sale has been created", 
            createMarketSale: { status: true, payload: action.payload } 
        }
      };
    case FETCH_MARKET_TOKENS:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "All market tokens ", 
            fetchMarketTokens: { status: true, payload: action.payload } 
        }
      };
    case FETCH_ITEMS_CREATED:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "All items that you have created", 
            fetchItemsCreated: { status: true, payload: action.payload } 
        }
      };
    case FETCH_MY_NFTS:
      return {
        ...state,
        loading: false,
        isError: false,
        market: { 
            ...state.market,
            message: "Fetch my nfts", 
            fetchMyNFTs: { status: true, payload: action.payload } 
        }
      };
    case CHAIN_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload?.response?.data?.error,
        status: action.payload?.response?.status,
      };
    default:
      return state;
  }
}
