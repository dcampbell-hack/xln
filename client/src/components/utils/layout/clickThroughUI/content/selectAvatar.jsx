import React, { useState, useEffect } from 'react';
import { landing } from "../../../../../data";
import Avatar from "../../../avatar"; 
import Form from "../../forms";
import QRCodeGenerator from '../../../qrcode';
import SetAssetPermissions from '../../checkbox/setAssetPermissions';

import { ethers } from 'ethers';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { create as ipfsHttpClient } from 'ipfs-http-client';
//import { xlnAddress, xlnMarketAddress } from '../../../../../../server/config/config';
let xlnAddress = "", xlnMarketAddress = "";

import XLNNFT from '../../../../../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json';
import XLNMarket from '../../../../../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const SelectAvatar = ({ users }) => {
  const { team } = landing;
  const [ nfts, setNFTs ] = useState([]);
  const [fileUrl, setFileUrl ] = useState(null);
  const [formInput, updateForm] = useState({ price: 0.045, name: `${users.username}`, description: `${users.username}'s avatar`, permissions: [] });
  const [loadingState, setLoadingState ] = useState('not loadded');

  console.log('Form Input ----', users, formInput);

  async function onChange(e){
      const file = e.target.files[0];

      try{
      const added = await client.add(file, {
          progress: prog => console.log(`recieved: ${prog}`)
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
  } catch (error){
  console.log('Error uploading file: ', error)
};

}

// async function createMarket(){
//   const { name , description, price, permissions } = formInput;
//   if(!fileUrl ) return;

//   // upload to IPFS
//   const data = JSON.stringify({
//       name, 
//       description, 
//       price,
//       permissions,
//       image: fileUrl
//   });

//   try{
//       const added = await client.add(data);
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`;
//       setFileUrl(url)
//       // run a function that creates sale and passes in the url
//       await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {
//         value: price
//       })
//       createSale(url);
//   } catch(error){
//       console.log(`Error uploading file: `, error )
//   }
// }

async function createMarket() {
  const {name, description, permissions, price} = formInput 
  if(!name || !description || !price || !fileUrl) return 
  // upload to IPFS
  const data = JSON.stringify({
      name, description, permissions, image: fileUrl
  })
  try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      // run a function that creates sale and passes in the url 
      createSale(url)
      } catch (error) {
          console.log('Error uploading file:', error)
      }
}


async function createSale(url) {

  // create the items and list them on the marketplace
  const web3Modal = new Web3Modal()
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  // we want to create the token
  let contract = new ethers.Contract(xlnNFTAddress, XLNNFT.abi, signer)
  console.log('check nft address: ', { contract } )
  let transaction = await contract.mintToken(url)

  let tx = await transaction.wait()
  let event = tx.events[0]
  let value = event.args[2]
  let tokenId = value.toNumber()
  const price = ethers.utils.parseUnits(formInput.price, 'ether')
  
  // list the item for sale on the marketplace 
  contract = new ethers.Contract(xlnMarketAddress, XLNMarket.abi, signer)
  let listingPrice = await contract.getListingPrice()
  listingPrice = listingPrice.toString()

  transaction = await contract.makeMarketItem(xlnAddress, tokenId, price, {value: listingPrice})
  await transaction.wait();
  router.push('./');
}

async function loadNFTs(){
  // what we want to load:
  // *** provider, tokenContract, marketContract, data for our marketItem

const provider = new ethers.providers.JsonRpcProvider();
const tokenContract = new ethers.Contract(xlAddress, XLN.abi, provider);
const marketContract = new ethers.Contract(xlnMarketAddress, XLNMarket.abi, provider );
const data = await marketContract.fetchMarketTokens();

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

setNFTs(items);
setLoadingState('loaded');
}


useEffect(() => {
  loadNFTs();
}, [])

console.log('Load NFTs --- ', nfts)

const formData = {
    action: "avatar",
    method: "post",
    submit: {
        display: 'none',
      label: "Change Avatar",
      className: "btn btn-block btn-info",
    },
    fields: [
      {
        type: "file",
        attributes: {
          label: {
            show: false,
            labelText: "Enter First Name",
            forId: "kyc-first-name",
          },
          input: {
            type: "text",
            id: "kyc-first-name",
            className: "",
            name: "firstname",
            value: {},
            onChange: "",
            placeholder: "First Name *",
          },
          aria: {},
        },
      },

    ],
  };

  const [values, setValues] = useState({});

const renderAvatarOptions = () => team.members.map(({ avatar }, index) => <Avatar key={index} username="xln" avatar={avatar} />)

    return(
        <div className="select-avatar-container">
            <div className="select-avatar-from-wallet">
                { renderAvatarOptions()}
            </div>
            <div className="upload-xln-avatar-container">
              <div className="xln-avatar-upload-header">
                <h1>Mint A Medallion XLN Avatar</h1>
                <p>A Medallion XLN avatar is interoperable between multiple interfaces across various application interfaces. The avatar is the digital representation of a user that allows them to own their own data and manage access to their data.</p>
              </div>
            <div className="upload-xln-avatar">
                <div className="upload-xln-avatar-form">
                    <div className="">
                       { !fileUrl ? <img src={`/uploads/xln/avatar/no-photo.jpg`} width="100%" height="auto"  /> : <div className="upload-xln-avatar-img-wrapper">
                        <img  width="100%" height="auto"  src={fileUrl} />
                         <QRCodeGenerator text={fileUrl} />
                        </div>
                         }
                        <input 
                          type="file"
                          name="Asset"
                          className='mt-4'
                          onChange={ onChange }
            /> 
                        {/* <Form formData={formData} setValues={setValues} values={values} /> */}
                    </div>
                </div>
                <div className="avatar-permission">
                  <SetAssetPermissions formInput={formInput} updateForm={updateForm} />
                </div>
                <button onClick={createMarket} className="btn btn-primary btn-block">Mint NFT</button>
            </div>
            </div>
        </div>
    )
}

export default SelectAvatar;