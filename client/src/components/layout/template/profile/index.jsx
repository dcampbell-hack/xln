import { useState, useEffect } from 'react'
import {
    DangerL,
    LinkL,
    PrimaryL,
    InfoL,
    VerticalButtonL,
    AssetLink
  } from "../../../utils/buttons/links"
import { assetTypes, authProfile, formLinks } from '../../../../data/nav'
import { authSetting, authPermission, authCredential, authFileUpload } from '../../../../data/auth_forms';
import '../../../../css/templates/profile.scss'

// Components
import Home from './home';
import Search from './search';
import CreateAsset from './create';
import Stats from './stats';
import ShowAssets from './showAssets';
import Setting from './setting';
 
export const Profile = ({
    options,
    assets,
    users,
    setValues,
    setActionType,
    type,
    values,
  }) => {
  
    const mapProfileNav = () => authProfile.map(({ text, url, icon, external, show}, index) => <LinkL   key={index} text={text} url={url} icon={icon} show={show}  /> )
     
    const renderView = () => {
     // console.log("Render View",type)
         switch(type){
          case "profile":
            return <Home users={users} />
          case "search":
            return <Search assets={assets} />
          case "createAsset":
            return <CreateAsset />
          case "walletStats":
              return <Stats />
          case "walletAssets":
            return <ShowAssets 
                assets={assets.assets} 
                users={users} 
                setActionType={setActionType}
                />
          case "authSetting":
            console.log("Auth Setting")
            return <Setting
                form={authSetting }
                users={users}
                setActionType={setActionType}
              />
  
          case  "authPermission":  
             return <Setting
                form={authPermission}
                users={users}
                setActionType={setActionType}
              />
          case  "authCredential": 
            return  <Setting
                form={authCredential}
                users={users}
                setActionType={setActionType}
              />
            case "authFileUpload": 
               return  <Setting
              form={authFileUpload}
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
            { authProfile && mapProfileNav() }
          </div>
           <div className="profile-content">
            {renderView() } 
          </div>
      </div>
    );
  };