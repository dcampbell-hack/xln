import {
  MINT_NFT,
  LOAD_NFT,
  UPDATE_ADDRESS,
  TOKEN_SUPPLY,
  UPDATE_SUPPLY,
  GET_CONTRACT_ADDRESS,
  LOGGED_IN_USER_ADDRESS,
  SHOW_FORM,
  CHAIN_ERROR,
} from "../../actions/types";

const initState = {
  balance: 0,
  address: null,
  price: 0,
  supply: 0,
  deployer: null,
  showForm: false,
  token: {
    address: "",
    message: "",
   
  },
  nft: {
    address: "",
    message: "",
    loaded: false,
    price: 2,
    nft: {},
    collection: []
  },
  market: {
    address: "",
    message: "",
    market: []
  },
  ico: {
    address: "",
    message: "",
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
    case GET_CONTRACT_ADDRESS:
      return {
        ...state,
       price: action.payload.data.tokenPrice,
       deployer: action.payload.data.deployerAddress,
       token: { ...state.token, address: action.payload.data.tokenAddress },
       ico: { ...state.ico, address: action.payload.data.icoAddress },
       nft: { ...state.nft, address: action.payload.data.nftAddress },
       market: { ...state.market, address: action.payload.data.marketAddress }
      };
      case LOAD_NFT:
        console.log('LOAD NFT ----- Reducer', action.payload)
        return {
          ...state,
          loading: false,
          isError: false,
          nft: { 
              ...state.nft,
             nft: action.payload
          }
        };
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
      case UPDATE_ADDRESS:
        return {
          ...state,
          loading: false,
          isError: false,
          address: action.payload
        };
        case UPDATE_SUPPLY:
          console.log('Update Supply Reducer ---> ', action.payload )
          return {
            ...state,
            loading: false,
            isError: false,
            price: action.payload,
            showForm: false
          };
          case TOKEN_SUPPLY:
            console.log('Update Token Supply Reducer ---> ')
            return {
              ...state,
              loading: false,
              isError: false,
              supply: action.payload
            };
            case SHOW_FORM:
              return {
                ...state,
                loading: false,
                isError: false,
                showForm: true
              };
    case LOGGED_IN_USER_ADDRESS:
      return {
        ...state,
        address: action.address,
        wallet: {
          active: true
        }
      }
    case CHAIN_ERROR:
      console.log('Chain Error', action.payload)
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload,
        status: action.payload?.response?.status,
      };
    default:
      return state;
  }
}
