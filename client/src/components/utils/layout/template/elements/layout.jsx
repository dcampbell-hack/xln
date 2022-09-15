import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import { ErrorAlert } from "../../errors/alert";

//Redux
import { connect } from "react-redux";

// import { uploadFile } from "../../../../../actions/user";

import {
  AddPermissions,
  AvatarProfile,
  BuyShare,
  BuyTokens,
  CreateAsset,
  CodeBlock,
  FileUpload,
  MintTokens,
  MintAsset,
  ShowComments,
  ShowReviews,
  ShowAsset,
  ShowAssets,
  SellShare,
  TxPrompt,
  TestFuncsTemplate,
} from "./layoutStyles";

import {
  Wallet,
  WalletSetting,
  WalletSignIn,
} from './walletStyles';

import {
  buyTokens,
  buyXLN,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
  makeMarketItem,
  mint,
  mintNFT,
  setShowForm,
  start,
  updateAddress,
  updateAdmin,
  updateSupply,
  withdrawDai,
  withdrawTokens,
} from "../../../../../actions/blockchain";

const TemplateLayout = ({
  assets,
  auth,
  blockchain,
  blockchainAction,
  buyTokens,
  buyNFT,
  buyXLN,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
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
  const [showError, setShowError] = useState(false);
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
      console.log("Whats the error?", auth.error);
      setShowError(true);
      errorArr.push(auth.error);
      //setValues({ ...values, errors: errorArr  })
    }
  }, [auth?.login?.success, auth?.register?.success]);

  useEffect(() => {
    const callAction = async (e) => {
      if (!errorArr[""] || errorArr.length) {
        errorArr.pop();
      }

      if (!errorArr.length) {
        console.log("Buy Asset Layout Template", actionType, blockchain);

        switch (actionType) {
          case "start":
            start(values);
            break;

          case "updateAddress":
            updateAddress(values);
            break;

          case "buyTokens":
            console.log("Clicking Buy Tokens Button --->");
            buyTokens();
            break;

          case "buyNFT":
            console.log("Clicking Buy NFT Button --->");
            buyNFT();
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
            mintNFT(values);
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

      case "avatar":
        return (
          <AvatarProfile options={options} setActionType={setActionType} />
        );

      case "buy":
        return <CreateAsset options={options} setActionType={setActionType} />;

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
        return <CreateAsset options={options} setActionType={setActionType} />;

      case "showComments":
        return <ShowComments options={options} setActionType={setActionType} />;

      case "showReviews":
        return <ShowReviews options={options} setActionType={setActionType} />;

      case "showAsset":
        return <ShowAsset options={options} setActionType={setActionType} />;

      case "showAssets":
        return <ShowAssets options={options} setActionType={setActionType} />;

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
            <WalletSetting
              options={options}
              setActionType={setActionType}
              users={users}
              blockchain={blockchain}
            />
          );

      case "walletSetting":
        return (
          <WalletSetting
            options={options}
            setActionType={setActionType}
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
  buyTokens,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  getListingPrice,
  mint,
  makeMarketItem,
  setShowForm,
  start,
  updateAdmin,
  updateSupply,
  withdrawDai,
  withdrawTokens,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLayout);
