import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import { ErrorAlert } from "../errors/alert";

//Redux
import { connect } from "react-redux";

// import { uploadFile } from "../../../../../actions/user";

import {
  AvatarProfile,
  CodeBlock,
  FileUpload,
  ShowComments,
  ShowReviews,
  ShowAsset,
  ShowAssets,
  TestFuncsTemplate,
} from "./layoutStyles";

import {
  AddPermissions,
  BuyTokens,
  CreateAsset,
  MintTokens,
  MintAsset,
  SellShare,
  TxPrompt,
} from "./blockchainStyles";

import {
  Wallet,
  WalletSignIn,
} from './walletStyles';

import { 
  attachAsset,
  getAllAssets, 
  getSingleAsset,
  getUserAssets 
} from "../../../../actions/asset";

import {
  buyTokens,
  buyNFT,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
  loggedInUserAddress,
  makeMarketItem,
  mint,
  mintNFT,
  setShowForm,
  start,
  updateAdmin,
  updateSupply,
  withdrawDai,
  withdrawTokens,
} from "../../../../actions/blockchain";

const TemplateLayout = ({
  assets,
  attachAsset,
  auth,
  blockchain,
  blockchainAction,
  buyTokens,
  buyNFT,
  buyXLN,
  content,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
  getSingleAsset,
  getUserAssets,
  makeMarketItem,
  mint,
  mintNFT,
  setValues,
  setShowForm,
  start,
  shares,
  templateData,
  updateAdmin,
  updateSupply,
  users,
  values,
  withdrawDai,
  withdrawTokens,
}) => {
  let navigate = useNavigate();
  const params = useParams();

  const [showError, setShowError] = useState(false);
  const [ selectedAsset, setSelectedAsset ] = useState({})
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    if (auth.register.success) {
      navigate("../login", { replace: true });
    }

    if (auth.login.success) {
      sessionStorage.setItem("xln_token", JSON.stringify(auth.login));
      navigate("../xln", { replace: true });
    }

    if (auth.isError) {
      setShowError(true);
      errorArr.push(auth.error);
      //setValues({ ...values, errors: errorArr  })
    }
  }, [auth?.login?.success, auth?.register?.success]);


  useEffect(() => {
    if(users.role == "user" &&  blockchain.address ) loggedInUserAddress(blockchain.address)
  }, [ users.role, blockchain.address ])

  useEffect(() => {
    // get all assets related to user
    if(users.id ){
      getUserAssets(users.id)
    }

    if(assets.phase == 'middle' && assets.asset.id ){
      navigate(`../xln/attach-asset/${assets.asset.id}`, { replace: true });
    }

    if(templateData.type == "showAsset"){
      const { id } = params;
      getSingleAsset(id)
    }

  }, [ assets.phase, users.id, assets.asset.id, templateData.type ]);

  useEffect(() => {
    const callAction = async (e) => {
      if (!errorArr[""] || errorArr.length) {
        errorArr.pop();
      }

      if (!errorArr.length) {
        switch (actionType) {
          case "start":
            start(values);
            break;

          case "buyTokens":
            buyTokens();
            break;

          case "buyNFT":
            buyNFT(blockchain);
            break;

          case "withdrawDai":
            withdrawDai(values);
            break;

          case "withdrawTokens":
            withdrawTokens(values);
            break;

          case "updateAdmin":
            updateAdmin(values);
            break;

          case "mint":
            mint(values);
            break;

          case "mintNFT":
            mintNFT({ blockchain, assets, selectedAsset });
            break;

          case "getListingPrice":
            getListingPrice(values);
            break;

          case "makeMarketItem":
            makeMarketItem(values);
            break;

          case "createMarketSale":
            createMarketSale(values);
            break;

          case "fetchMarketTokens":
            fetchMarketTokens(values);
            break;

          case "fetchMyNFTs":
            fetchMyNFTs(values);
            break;

          case "fetchItemsCreated":
            fetchItemsCreated(values);
            break;

          default:
            return null;
        }
      }
    };

    actionType && callAction();
  }, [actionType]);

  const templateOptions = (type, options) => {
    switch (type) {
      case "addPermissions":
        return (
          <AddPermissions options={options} setActionType={setActionType} />
        );

        case "attachAsset":   
            return <CreateAsset 
                 options={options} 
                 setActionType={setActionType} 
                 />;

      case "avatar":
        return (
          <AvatarProfile options={options} setActionType={setActionType} />
        );


      case "buyShare":
        return (
          <BuyShare
            options={options}
            setActionType={setActionType}
            blockchain={blockchain}
          />
        );

      case "buyTokens":
        return (
          <BuyTokens
            options={options}
            setActionType={setActionType}
            blockchain={blockchain}
            setShowForm={setShowForm}
          />
        );

      case "codeBlock":
        return <CodeBlock options={options} setActionType={setActionType} />;

      case "file":
        return <FileUpload options={options} setActionType={setActionType} />;

      case "mintAsset":
        return <MintAsset options={options} setActionType={setActionType} />;

      case "mintTokens":
        return <MintTokens options={options} setActionType={setActionType} />;

      case "createAsset":
      options.form.formData.fields.forEach(field => {
        if(field.type == "dropdown"){
          if(field.attributes.datalist.type == "category") field.attributes.datalist.schema = assets.category;
        }
      })

      options.form.formData.fields.forEach(field => {
        if(field.type == "dropdown"){
          if(field.attributes.datalist.type == "asset-type") field.attributes.datalist.schema = assets.assetTypes;
        }
      })

        return <CreateAsset 
             options={options} 
             setActionType={setActionType} 
             />;

      case "showComments":
        return <ShowComments options={options} setActionType={setActionType} />;

      case "showReviews":
        return <ShowReviews options={options} setActionType={setActionType} />;

      case "showAsset":
        const { id } = params;
        console.log('Show Assets -----', id)
        //  getSingleAsset(id)
        return <ShowAsset options={options} setActionType={setActionType} />;

      case "showMintableAssets":
        return <ShowAssets collection={assets} options={options} setActionType={setActionType} />;

      case "showPurchasableAssets":
        return <ShowAssets collection={blockchain} options={options} setActionType={setActionType} />;

      case "sellShare":
        return <SellShare options={options} setActionType={setActionType} />;

      case "txPrompt":
        return <TxPrompt options={options} setActionType={setActionType} />;

      case "testFuncsTemplate":
        return (
          <TestFuncsTemplate options={options} setActionType={setActionType} />
        );

      case "wallet":
        return (
          <Wallet
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            assets={assets}
            shares={shares}
            users={users}
            blockchain={blockchain}
          />
        );

        case "walletFileUpload":
          return (
            <Wallet
              type={type}
              content={content}
              options={options}
              setActionType={setActionType}
              users={users}
              blockchain={blockchain}
            />
          );


          case "walletStats":
            return (
              <Wallet
                type={type}
                content={content}
                options={options}
                setActionType={setActionType}
                users={users}
                blockchain={blockchain}
              />
            );

      case "walletSetting":
        return (
          <Wallet
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            users={users}
            blockchain={blockchain}
          />
        );

        case "walletAssets":
          return (
            <Wallet
              type={type}
              content={content}
              options={options}
              setActionType={setActionType}
              setSelectedAsset={ setSelectedAsset }
              assets={assets}
              shares={shares}
              users={users}
              blockchain={blockchain}
            />
          );

          case "walletShares":
            return (
              <Wallet
                type={type}
                content={content}
                options={options}
                setActionType={setActionType}
                assets={assets}
                shares={shares}
                users={users}
                blockchain={blockchain}
              />
            );

            case "walletShareholders":
              return (
                <Wallet
                 type={type}
                 content={content}
                  options={options}
                  setActionType={setActionType}
                  assets={assets}
                  shares={shares}
                  users={users}
                  blockchain={blockchain}
                />
              );

      case "walletSignIn":
        return <WalletSignIn options={options} setActionType={setActionType} />;

      default:
        return <></>;
    }
  };

  //const mapTemplates = (templates) => templates.map(({type, attributes }, index) => templateOptions( type, attributes,index ) );
  const mapErrors = (errors) =>
    errors.map((error, index) => <ErrorAlert key={index} error={error} />);
  const errorArr = [];

  return <div>{templateOptions(templateData.type, templateData.options)}</div>;
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
    auth: state.auth,
    blockchain: state.blockchain,
    shares: state.shares,
    users: state.users,
  };
};

const mapDispatchToProps = {
  attachAsset,
  buyTokens,
  buyNFT,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
  getSingleAsset,
  getUserAssets,
  mint,
  mintNFT,
  makeMarketItem,
  setShowForm,
  start,
  updateAdmin,
  updateSupply,
  withdrawDai,
  withdrawTokens,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLayout);
