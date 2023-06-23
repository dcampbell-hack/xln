import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import { ErrorAlert } from "../layout/errors/alert";

//Redux
import { connect } from "react-redux";

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

import { BuyTokens } from "./blockchain/token/buy";
import { MintTokens } from "./blockchain/token/mint";
import { CreateAsset } from "./blockchain/asset/create";
import { MintAsset } from "./blockchain/asset/mint";
import { BuyShare } from "./blockchain/share/buy";
import { SellShare } from "./blockchain/share/sell";

import CreateAIArt from "./asset/ai/art/createAIArt";
import ViewAIArt from "./asset/ai/art/viewAIArt";
import CreateAudioPlayer from "./asset/audio/createAudio";
import ViewAudioPlayer from "./asset/audio/viewAudio";
import CreateBlog from "./asset/blog/createBlog";
import ViewBlog from "./asset/blog/viewBlog";
import CreateChat from "./asset/ai/chat/createChat";
import ViewChat from "./asset/ai/chat/viewChat";
import CreateDocument from "./asset/docs/createDocument";
import ViewDocument from "./asset/docs/viewDocument";
import CreateDomain from "./asset/domain/createDomain";
import ViewDomain from "./asset/domain/viewDomain";
import CreateDownloader from "./asset/downloader/createDownloader";
import ViewDownloader from "./asset/downloader/viewDownloader";
import CreateEnterprise from "./asset/enterprise/createEnterprise";
import ViewEnterprise from "./asset/enterprise/viewEnterprise";
import CreateImage from "./asset/image/createImage";
import ViewImage from "./asset/image/viewImage";
import CreateLink from "./asset/link/createLink";
import ViewLink from "./asset/link/viewLink";
import CreateLive from "./asset/live/createLive";
import ViewLive from "./asset/live/viewLive";
import CreateMetaverse from "./asset/metaverse/createMetaverse";
import ViewMetaverse from "./asset/metaverse/viewMetaverse";
import CreatePodcast from "./asset/podcast/createPodcast";
import ViewPodcast from "./asset/podcast/viewPodcast";
import CreateRealEstate from "./asset/real/createEstate";
import ViewRealEstate from "./asset/real/viewEstate";
import CreateShop from "./asset/shop/createShop";
import ViewShop from "./asset/shop/viewShop";
import CreateText from "./asset/text/createText";
import ViewText from "./asset/text/viewText";
import CreateVideo from "./asset/video/createVideo";
import ViewVideo from "./asset/video/viewVideo";
import CreateWebsite from "./asset/website/createWebsite";
import ViewWebsite from "./asset/website/viewWebsite";

import { Wallet } from "./wallet";
import { Profile } from "./profile";

import {
  attachAsset,
  getAllAssets,
  getSingleAsset,
  getUserAssets,
} from "../../actions/assets/asset";

import { 
 getAssetArt,
 getSingleAIArt,
 getChatMessages,
 postChatMessages
} from '../../actions/assets/ai'

import {
  buyTokens,
  buyNFT,
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
  updateAdmin,
  withdrawDai,
  withdrawTokens,
} from "../../actions/blockchain";

const TemplateLayout: React.FC = ({
  ai,
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
  getAssetArt,
  getChatMessages,
  getSingleAIArt,
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
  users,
  values,
  withdrawDai,
  withdrawTokens,
}) => {
  let navigate = useNavigate();
  const params = useParams();

  const [showError, setShowError] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState({});
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
    // get all assets related to user
    if (users.id) {
      getUserAssets(users.id);
    }

    if (assets.pending && assets.asset.id) {
      navigate(`../xln/attach-asset/${assets.asset.id}`, { replace: true });
    }

    if (templateData.type == "aiArt" && ai.created !== "") {
      navigate(`../xln/assets/ai/art/${assets.id}`, { replace: true });
    }

    if (templateData.type == "showAsset") {
      getSingleAsset(params.id);
    }
  }, [assets.phase, users.id, assets.id, templateData.type, assets.created]);

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
            buyTokens(blockchain);
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

          case "getAssetArt":
            getAssetArt(params.assetId)
            break;

          case "getSingleAIArt":
            getSingleAIArt()
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
      case "createAiArt":
        return <CreateAIArt options={options} setActionType={setActionType} />;

      case "viewAiArt":
        return <ViewAIArt ai={ai} asset={assets.asset} options={options} setActionType={setActionType} />;

      case "createAudio":
        return (
          <CreateAudioPlayer options={options} setActionType={setActionType} />
        );

      case "viewAudio":
        return (
          <ViewAudioPlayer options={options} setActionType={setActionType} />
        );

      case "addPermissions":
        return (
          <AddPermissions options={options} setActionType={setActionType} />
        );

      case "attachAsset":
        return <CreateAsset options={options} setActionType={setActionType} />;

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

      case "createBlog":
        return <CreateBlog options={options} setActionType={setActionType} />;

      case "viewBlog":
        return <ViewBlog options={options} setActionType={setActionType} />;

      case "createChat":
        return <CreateChat options={options} assets={assets} users={users}  setActionType={setActionType} />;

      case "viewChat":
        return <ViewChat options={options} assetId={params.assetId} ai={ai} users={users} getChatMessages={getChatMessages} setActionType={setActionType} />;

      case "codeBlock":
        return <CodeBlock options={options} setActionType={setActionType} />;

      case "createAsset":
        return (
          <Profile
            type={type}
            options={options}
            setActionType={setActionType}
          />
        );

      case "createDocument":
        return <CreateDocument />;

      case "viewDocument":
        return <ViewDocument />;

      case "createDomain":
        return <CreateDomain />;

      case "viewDomain":
        return <ViewDomain />;

      case "createDownloader":
        return (
          <CreateDownloader options={options} setActionType={setActionType} />
        );

      case "viewDownloader":
        return (
          <ViewDownloader options={options} setActionType={setActionType} />
        );

      case "createEnterprise":
        return <CreateEnterprise />;

      case "viewEnterprise":
        return <ViewEnterprise />;

      case "fileUpload":
        return <FileUpload options={options} setActionType={setActionType} />;

      case "createImage":
        return <CreateImage options={options} setActionType={setActionType} />;

      case "viewImage":
        return <ViewImage options={options} setActionType={setActionType} />;

      case "createLink":
        return (
          <CreateLink options={options} setActionType={setActionType} />
        );

      case "viewLink":
        return <ViewLink options={options} setActionType={setActionType} />;

      case "createLive":
        return <CreateLive options={options} setActionType={setActionType} />;

      case "viewLive":
        return <ViewLive options={options} setActionType={setActionType} />;

      case "createMetaverse":
        return (
          <CreateMetaverse options={options} setActionType={setActionType} />
        );

      case "viewMetaverse":
        return (
          <ViewMetaverse options={options} setActionType={setActionType} />
        );

      case "createMusic":
        return <CreateMusic options={options} setActionType={setActionType} />;

      case "viewMusic":
        return <ViewMusic options={options} setActionType={setActionType} />;

      case "profile":
        return (
          <Profile
            type={type}
            options={options}
            users={users}
            setActionType={setActionType}
          />
        );

      case "createPodcast":
        return (
          <CreatePodcast
            type={type}
            options={options}
            setActionType={setActionType}
          />
        );

      case "viewPodcast":
        return (
          <ViewPodcast
            type={type}
            options={options}
            setActionType={setActionType}
          />
        );

      case "createRealEstate":
        return (
          <CreateRealEstate options={options} setActionType={setActionType} />
        );

      case "viewRealEstate":
        return (
          <ViewRealEstate options={options} setActionType={setActionType} />
        );

      case "search":
        return (
          <Profile
            type={type}
            assets={assets}
            users={users}
            options={options}
            setActionType={setActionType}
            blockchain={blockchain}
            setShowForm={setShowForm}
          />
        );

      case "createShop":
        return <CreateShop options={options} setActionType={setActionType} />;

      case "viewShop":
        return <ViewShop options={options} setActionType={setActionType} />;

      case "createText":
        return <CreateText options={options} setActionType={setActionType} />;

      case "viewText":
        return <ViewText options={options} setActionType={setActionType} />;

      case "mintAsset":
        return <MintAsset options={options} setActionType={setActionType} />;

      case "mintTokens":
        return <MintTokens options={options} setActionType={setActionType} />;

      case "showComments":
        return <ShowComments options={options} setActionType={setActionType} />;

      case "showReviews":
        return <ShowReviews options={options} setActionType={setActionType} />;

      case "showAsset":
        return (
          <ShowAsset
            blockchain={blockchain}
            assets={assets}
            options={options}
            setActionType={setActionType}
          />
        );

      case "showMintableAssets":
        return (
          <ShowAssets
            collection={assets}
            options={options}
            setActionType={setActionType}
          />
        );

      case "showPurchasableAssets":
        return (
          <ShowAssets
            collection={blockchain}
            options={options}
            setActionType={setActionType}
          />
        );

      case "sellShare":
        return <SellShare options={options} se90ptActionType={setActionType} />;

      case "txPrompt":
        return <TxPrompt options={options} setActionType={setActionType} />;

      case "testFuncsTemplate":
        return (
          <TestFuncsTemplate options={options} setActionType={setActionType} />
        );

      case "createVideo":
        return <CreateVideo options={options} setActionType={setActionType} />;

      case "viewVideo":
        return <ViewVideo options={options} setActionType={setActionType} />;

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

      case "authFileUpload":
        return (
          <Profile
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
          <Profile
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            users={users}
            blockchain={blockchain}
          />
        );

      case "walletSeed":
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

      case "walletSwap":
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

      case "walletNinja":
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

      case "walletSend":
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

      case "walletReceive":
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

      case "authSetting":
        return (
          <Profile
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            users={users}
            blockchain={blockchain}
          />
        );

      case "authPermission":
        return (
          <Profile
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            users={users}
            blockchain={blockchain}
          />
        );

      case "authCredential":
        return (
          <Profile
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
          <Profile
            type={type}
            content={content}
            options={options}
            setActionType={setActionType}
            setSelectedAsset={setSelectedAsset}
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

      case "createWebsite":
        return <CreateWebsite />;

      case "viewWebsite":
        return <ViewWebsite />;

      default:
        return <></>;
    }
  };

  //const mapTemplates = (templates) => templates.map(({type, attributes }, index) => templateOptions( type, attributes,index ) );
  const mapErrors = (errors) =>
    errors.map((error, index) => <ErrorAlert key={index} error={error} />);
  const errorArr = [];

  return <>{templateOptions(templateData.type, templateData.options)}</>;
};

const mapStateToProps = (state) => {
  return {
    ai: state.ai,
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
  getAssetArt,
  getChatMessages,
  getSingleAIArt,
  getListingPrice,
  getSingleAsset,
  getUserAssets,
  mint,
  mintNFT,
  makeMarketItem,
  setShowForm,
  start,
  updateAdmin,
  withdrawDai,
  withdrawTokens,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLayout);
