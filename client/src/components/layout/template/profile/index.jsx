import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormatLayout from '../..'
import { FormInput } from '../form/formStyles'
import AssetItem from '../../../utils/asset/assetItem'
import { InfoB, LinkB } from '../../../utils/buttons/buttons'
import {
    DangerL,
    LinkL,
    PrimaryL,
    InfoL,
    VerticalButtonL,
    AssetLink
  } from "../../../utils/buttons/links"
import Chart from "../../../utils/charts";
import { assetTypes, walletProfile, formLinks } from '../../../../data/nav'
import { walletSetting, walletPermission, walletCredential, walletFileUpload } from '../../../../data/forms';
import '../../../../css/templates/profile.scss'

const ProfileView = ({ maxBoolean }) => {

const [ max, setMax ] = useState(true)

    return (
        <div className='profile-view'>
              {
                max && 
                <div className='profile-view-max'>
                        <img className="profile-view-symbol" src="/uploads/xln/avatar/CEO-Executive.png" width="200px"  height="auto" />
                        { max &&
                        <div className='profile-view-panel'>
                            <div className='profile-view-panel-icon'>
                            <img src="/uploads/xln/avatar/CEO-Executive.png" width="50px" height="50px" />
                                <h3>#1 Asset with Shareholders Today</h3>
                            </div>

                                <p className='profile-view-panel-text'>
                                    description of some sort.  description of some sort.  description of some sort.  description of some sort.
                                </p>
                        </div>
                         }
                        <div className="profile-view-buttons">
                             <InfoB
                                  text="Play"
                                  className=""
                                  icon="fas fa-play"
                                  click={() => console.log("Play Profile")}
                             />
                            <LinkB
                                  text="More Info"
                                  className=""
                                  icon="fas fa-info"
                                  click={() => console.log("More Info")}
                             />
                        </div>
                </div>
              }
        </div>
    )
}

const Home = () => {

  const [ isVideoplaying, setIsVideoPlaying ] = useState(false)

  return(
    <div className="profile-home">
       <div className="featured-content">
          { isVideoplaying ?
                  <ProfileView max={false} />
                :
                <ProfileView max={true} />
}

        <div className="profile-xln-balance">
          <img src="/uploads/xln/asset/images/xln_logo.png" width="50px" height="auto" />
          <h4>350,000 XLN</h4>
        </div>
        </div>
        <div className="asset-items"></div>
        <div className="asset-items-poster"></div>
        <div className="asset-items"></div>
        <div className="asset-top-asset"></div>
    <div className="asset-items"></div>
    </div>
  )
}

const ShowAssets = ({ assets = [] }) => {

  const mapAssets = () => assets.map(({ id, username, avatar: { url, width, height }, cover }, index) => (
    <AssetItem
      key={index}
      username={username}
      avatar={url}
      cover={cover}
      width={width}
      height={height}
    />
));

  return(
    <div className="show-assets-list">
    { assets.length ? mapAssets() : <div className="asset-error">No Assets available</div> }
  </div>
  )
}

const Search = ({ assets }) => {

  const [search, setSearch] = useState("");



  return(
    <div className="search-container">
      <div className="asset-search">
        <input
          type="text"
          placeholder={`Search Assets`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
       <ShowAssets assets={assets} />
</div>

  )
}

const CreateAsset = () => {

  return(
    <div className='create-xln-asset'>
      { assetTypes.map(({ name, icon, url }) => <AssetLink name={name} icon={icon} url={url} />) }
    </div>
  )
}

const Stats = () => {
  return <div className="stats-container">
    <div className="stats-chart-container">
      <div className="stats-chart-price">
        <h1>$100,000,000</h1>
        <p>+$43.29(+0.04) Today</p>
      </div>
      <div className="stats-chart">
        <Chart type="line" chartData={{ label: "Label", distribution: [] }} />
      </div>
    </div>
    <div  className="stats-list-panel">
      <div className="stats-header"></div>
      <div className="stats-list-tokens"></div>
    </div>
  </div>;
};

const Setting = ({ form, navLinks, users, setActionType }) => {
  useEffect(() => {
    form?.formData.fields?.forEach((field) => {
      if (field.attributes.input.name == "firstname") {
        field.attributes.input.placeholder = users.firstname;
      }

      if (field.attributes.input.name == "lastname") {
        field.attributes.input.placeholder = users.lastname;
      }

      if (field.attributes.input.name == "username") {
        field.attributes.input.placeholder = users.username;
      }
    });
  }, [users]);

  return (
    <div className="wallet-content-setting">
      <div className="wallet-setting-selections">
        { formLinks.map(({ url, text}) =>             <div className="select-wallet-settings selected">
          <Link to={url}>{text}</Link>
        </div>  )

}
      </div>
      <FormatLayout
        type={form.type}
        options={form}
        setActionType={setActionType}
      />
    </div>
  );
};
 
export const Profile = ({
    options,
    assets,
    users,
    setValues,
    setActionType,
    type,
    values,
  }) => {
  
    const mapProfileNav = () => walletProfile.map(({ text, url, icon, external, show}, index) => <LinkL   key={index} text={text} url={url} icon={icon} show={show}  /> )
     
    const renderView = () => {
         switch(type){
          case "profile":
            return <Home />
          case "search":
            return <Search assets={assets} />
          case "createAsset":
            return <CreateAsset />
          case "walletStats":
              return <Stats />
          case "walletAssets":
            return <ShowAssets assets={assets} />
          case "walletSetting":
            return <Setting
                form={walletSetting }
                users={users}
                setActionType={setActionType}
              />
  
          case  "walletPermission":  
             return <Setting
                form={walletPermission}
                users={users}
                setActionType={setActionType}
              />
          case  "walletCredential": 
            return  <Setting
                form={walletCredential}
                users={users}
                setActionType={setActionType}
              />
            case "walletFileUpload": 
               return  <Setting
              form={walletFileUpload}
              users={users}
              setActionType={setActionType}
            />
         }

    }
    /* TODO: 
    1. Add nav 
     2. Grid system
     3. nav button
     4. .profile-content .featured-content 2 cols. 
     5. col-1 is name,quick links, bio
     6. col-2 is profile photo 
    */
    return (
      <div className="profile-sign-in">
          <div className="profile-nav">
            { walletProfile && mapProfileNav() }
          </div>
           <div className="profile-content">
            {renderView() }
                
          </div>
      </div>
    );
  };