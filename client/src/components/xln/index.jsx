import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Token from "../../../../artifacts/contracts/XLN_Token.sol/XLNToken.json";
import ICO from "../../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json";
import NFT from "../../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json";
import Market from "../../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json";

// import Web3 from "web3";
import {
  getAddress,
  getContractAddress,
  updateWalletBalance,
  connectUserWallet,
} from "../../actions/blockchain";

import TemplateLayout from "../utils/layout/template/elements/layout";
import { connect } from "react-redux";
import Panels from "../utils/panels";
import "../../css/xln/XLN.scss";
import "../../css/assets/Avatar.scss";
import Template from "../utils/layout/template";
import { filter } from "lodash";
import axios from "axios";

// infura, options, authentication: { userChecks }
const XLN = ({
  users,
  auth,
  blockchain,
  page,
  getContractAddress,
  getAddress,
  xln: {
    options: { content, templateData },
  },
}) => {
  const [tokens, setTokens] = useState("");
  const [ico, setICO] = useState("");
  const [nfts, setNFTs] = useState([]);
  const [market, setMarket] = useState("");

  const [loadingState, setLoadingState] = useState("not loaded");
  const [web3Api, setWeb3Api] = useState("");
  const [contentText, setContentText] = useState(content.defaultText);
  const [accounts, setAccounts] = useState({
    address: "",
    url: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    console.log("Get Contract Address ----", templateData);
    loadNFTs();
  }, []);

  useEffect(() => {
    const getAllAddresses = async () => {
      await getContractAddress();
    };

    if (!blockchain.token.address) {
      getAllAddresses();
    }

    console.log("Auth ----", auth.isAuthenticated, accounts.url);
    if (!auth.isAuthenticated) {
      console.log("Hello", auth);
      //  setAccounts({ ...accounts, url: '/login'})
    }
  }, []);

  useEffect(() => {
    navigate(`${accounts.url}`, { replace: true });
  }, [accounts.url]);

  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;

      if (window.ethereum) {
        provider = window.ethereum;
        try {
          const eth = await provider.request({ method: "eth_requestAccounts" });
          if (page == "walletSignIn") {
            setAccounts({ ...accounts, address: eth[0], url: "/xln/assets" });
          }
        } catch {
          console.error("User denied accounts access!");
          setContentText(content.errorText);
        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }

      setWeb3Api({
        //  web3: new Web3(provider),
        provider,
      });
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccounts(accounts[0]);
    };

    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  // Token Actions
  async function updateAdmin() {}
  async function mintToken(buyerAddress) {
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

  // ICO Actions

  async function buyTokens() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      blockchain.ico.address,
      ICO.abi,
      signer
    );

    console.log('Trigger Buy Tokens ----> 0', blockchain.ico.address, contract )

    const price = ethers.BigNumber.from(blockchain.price).mul(ethers.BigNumber.from(10).pow(18));
    //const price = ethers.utils.parseUnits(blockchain.price.toString(), "dai");

    console.log('Trigger Buy Tokens ----> 1', price)


    const transaction = await contract.buy( price );

    console.log('Trigger Buy Tokens ----> 2',  transaction )

    await transaction.wait();
  }

  async function withdrawTokens() {}
  async function withdrawDai() {}

  // NFT Actions

  async function buyNFT(nft) {

    console.log('Buy New NFT ----- 0')
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      blockchain.market.address,
      Market.abi,
      signer
    );




    const price = ethers.BigNumber.from(blockchain.price).mul(ethers.BigNumber.from(10).pow(18));

    console.log('Buy New NFT ----- 1', { price, contract,  bPrice: blockchain.price, marketAddress: blockchain.market.address, nftAddress: blockchain.nft.address  } )
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
    console.log('Buy New NFT ----- 3', transaction)
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h1> No NFTs in marketplace</h1>;

  // async function mintNFT(){}

  async function loadNFTs() {
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

  // Market Action

  // async function buyTokenICO(){}
  // async function mintTokenToken(){}
  // async function mintNFTNFT(){}
  // async function buyNFTNFT(){}

  const renderTemplate = templateData.filter(({ type }, index) => page == type);
  renderTemplate[0].options.text = contentText;

  return (
    <div className="xln-setup-container">
      <div className="flex justify-center">
        <h4>Figure out how to layout later</h4>
        <div className="px-4"></div>
        <div className="grid grid-cols-1">
          {nfts.map((nft, i) => {
            <div key={i} className="border shadow rounded">
              <img src={nft.image} />
              <div className="p-4">
                <p style={{ height: "64px" }}>
                  {nft.name} {nft.price} ETH
                </p>
                <button onClick={() => buyNFT()}>Buy NFT</button>
              </div>
              <div className="p-5">{nft.description}</div>
            </div>;
          })}
        </div>
      </div>

      <TemplateLayout templateData={renderTemplate[0]} blockchainAction={  renderTemplate[0].actions } buyTokens={buyTokens} buyNFT={buyNFT} mintToken={mintToken} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blockchain: state.blockchain,
  };
};

const mapDispatchToProps = {
  getAddress,
  getContractAddress,
  updateWalletBalance,
  connectUserWallet,
};

export default connect(mapStateToProps, mapDispatchToProps)(XLN);
