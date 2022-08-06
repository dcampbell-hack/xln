import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import { ErrorAlert } from "../../errors/alert";

//Redux
import { connect } from "react-redux";

import { uploadFile } from "../../../../../actions/user";

import {
  validateEmailAddress,
  validatePassword,
} from "../../../operations/auth";

import {
  WalletSignIn,
  BuyAsset,
  MintAsset,
  CreateAsset,
  ShowComments,
  ShowReviews,
  ShowAsset,
  ShowAssets,
  BuyShare,
  SellShare,
  TxPrompt,
  CodeBlock,
  AddPermissions,
  FileUpload,
  TestFuncsTemplate,
} from "./layoutStyles";

import {
  start,
  buyXLN,
  withdrawDai,
  withdrawTokens,
  updateAdmin,
  mint,
  mintNFT,
  getListingPrice,
  makeMarketItem,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
} from "../../../../../actions/blockchain";

/*
{
action: "",
method: ""
fields: [
    {type: input, options },
    {type: textarea, options },
    {type: select, options },
    {type: dropdown, options }
]
}

 */

const TemplateLayout = ({
  templateData,
  setValues,
  values,
  start,
  buyXLN,
  withdrawDai,
  withdrawTokens,
  updateAdmin,
  mint,
  mintNFT,
  getListingPrice,
  makeMarketItem,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  uploadFile,
  auth,
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
        console.log("Buy Asset Layout Template", actionType);
  
        switch (actionType) {
          case "start":
            start(values);
            break;
  
          case "buyXLN":
            buyXLN(values);
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

  }, [actionType])

  const templateOptions = (type, options) => {
    switch (type) {
      case "walletSignIn":
        return <WalletSignIn options={options} setActionType={setActionType} />;

      case "buyAsset":
        return <BuyAsset options={options} setActionType={setActionType} />;

      case "mintAsset":
        return <MintAsset options={options} setActionType={setActionType} />;

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

      case "buyShare":
        return <BuyShare options={options} setActionType={setActionType} />;

      case "sellShare":
        return <SellShare options={options} setActionType={setActionType} />;

      case "txPrompt":
        return <TxPrompt options={options} setActionType={setActionType} />;

      case "codeBlock":
        return <CodeBlock options={options} setActionType={setActionType} />;

      case "addPermissions":
        return (
          <AddPermissions options={options} setActionType={setActionType} />
        );

      case "buy":
        return <CreateAsset options={options} setActionType={setActionType} />;

      case "file":
        return <FileUpload options={options} setActionType={setActionType} />;

      case "testFuncsTemplate":
        return (
          <TestFuncsTemplate options={options} setActionType={setActionType} />
        );

      default:
        return <>Empty</>;
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
    auth: state.auth,
    users: state.users,
  };
};

const mapDispatchToProps = {
  start,
  buyXLN,
  withdrawDai,
  withdrawTokens,
  updateAdmin,
  mint,
  mintNFT,
  getListingPrice,
  makeMarketItem,
  createMarketSale,
  fetchMarketTokens,
  fetchMyNFTs,
  fetchItemsCreated,
  uploadFile,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLayout);
