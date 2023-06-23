import React from 'react'
import AssetItem from '../../utils/asset/assetItem'

const ShowAssets: React.FC = ({ assets = [], users }) => {

    const mapAssets = () => assets.map(({ id, username, user, cover, assetType }, index) => (
      <AssetItem
        key={index}
        id={id}
        assetType={assetType}
        type={findEndpoint(assetType[0])}
        username={username}
        userId={user}
        avatar={users.avatar}
        cover={cover}
      />
  ));


  function findEndpoint(assetType) {
    switch (assetType) {
      case "AI Art":
        return "ai/art";
      case "AIChat":
        return "ai/chat";
      case "Audio":
        return "audio";
      case "Blog":
        return "blog";
      case "Document":
        return "document";
      case "Domain":
        return "domain";
      case "Downloader":
        return "downloader";
      case "Enterprise":
        return "enterprise";
      case "Image":
        return "image";
      case "Link":
        return "link";
      case "Live":
        return "live";
      case "Metaverse":
        return "metaverse";
      case "Music":
        return "music";
      case "Podcast":
        return "podcast";
      case "RealEstate":
        return "real-estate";
      case "Shop":
        return "shop";
      case "Text":
        return "text";
      case "Video":
        return "video";
      case "Website":
        return "website";
      default:
        return "";
    }
  }
  
    return(
      <div className="show-assets-list">
      { assets.length ? mapAssets() : <div className="asset-error">No Assets available</div> }
    </div>
    )
  }

  export default ShowAssets
  