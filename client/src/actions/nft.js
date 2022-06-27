import Web3Modal from 'web3modal';
import {
  nftAddress, nftMarketaddress
} from '../config/config';

import SICC from '../artifacts/contracts/SICC.sol/SICC.json';
import SICCMarket from '../artifacts/contracts/SICCMarket.sol/SICCMarket.json'
import { ethers } from 'ethers';

const [ nfts, setNFTs ] = useState([]);
const [sold, setSold] = useState([])
const [loadingState, setLoadingState ] = useState('not loadded');

useEffect(() => {
 loadNFTs();
}, [])

async function loadNFTs(){
// what we want to load:
// *** provider, tokenContract, marketContract, data for our marketItem

const web3Modal = new Web3Modal()
connection = await web3Modal.connect();
const provider = new ethers.provider.Web3Provider(connection);
const signer = provider.getSigner();

const tokenContract = new ethers.Contract(nftAddress, SICC.abi, provider);
const marketContract = new ethers.Contract(nftMarketaddress, SICCMarket.abi, signer );
const data = await marketContract.fetchItemsCreated();

const items = await Promise.all(data.map(async i => {
const tokenUri = await tokenContract.tokenUri(i.tokenId);
const meta = await axios.get(tokenUri);
let price = ethers.utils.formatUtils(i.price.toString(), 'ether');
let item = {
  price,
  tokenId: i.tokenID.toNumber(),
  seller: i.seller,
  owner: i.owner,
  image: meta.data.image,
  name: meta.data.name,
  description: meta.data.description,
}

return item;
}))

//create filtered array of NFTs that have been sold
const soldItems = items.filter(i => i.sold)
setNFTs(items);
setLoadingState('loaded');
}


