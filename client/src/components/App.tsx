//React
import React, { useEffect, Suspense } from "react";

// Typescript
import { AppProps  } from "../types";

// React DOM
import { 
  Routes, 
  Route, 
  useNavigate 
} from "react-router-dom";

// Data
import { 
  documentation,
  header, 
  footer, 
  landing, 
  register, 
  login, 
  create,
  view,
  xln, 
  wallet,
  whitepaper, 
  forgotPassword, 
  resetPassword 
} from "../data";

// Components
import Header from "./global/Header";
import Error from "./global/Error";
import Footer from "./global/Footer";
import Documentation from "./documentation";
import Landing from "./landing";
import XLN from "./xln";

// import Template from './utils/layout/template';
import NotFound from "./notFound";

// Utils
import FormatLayout from "./layout";
import PrivateRoute from "./global/PrivateRoute";

// CSS
import "../css/App.scss";
import "../css/Buttons.scss";
import "../css/Form.scss";
import "../css/assets/Assets.scss";
import "../css/error/error.scss";

//Redux
import { connect } from "react-redux";
import { loadUser } from "../actions/user/user";


const App: React.FC<AppProps> = ({ auth, users, blockchain, loadUser }:AppProps) => {

 const xlnToken = sessionStorage.getItem('xln_token');
 const isLoggedIn = xlnToken ? JSON.parse(xlnToken) : false;

  useEffect(() => {

      if (isLoggedIn?.success) {
           loadUser();
      } 

  }, []);

  return (
    <div className="xln-container">
        <Header auth={auth} users={users} blockchain={blockchain} header={header} isLoggedIn={isLoggedIn}/>
        {/* { auth.isError && <Error auth={auth.error} /> } */}
        <Suspense fallback="Loading ...">
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/"  element={<Landing landing={landing} />} />
          <Route  path="/login" element={<FormatLayout type={login.type} options={login.options} />} />
          <Route path="/register" element={ <FormatLayout type={register.type} options={register.options} /> } />
          <Route path="/forgotpassword"  element={ <FormatLayout type={forgotPassword.type} options={forgotPassword.options} />  } />
          <Route path="/reset_password?:id"  element={ <FormatLayout type={resetPassword.type} options={resetPassword.options} /> }  />
          <Route  path="/resetpassword"  element={ <FormatLayout type={resetPassword.type} options={resetPassword.options} />  } />
          <Route path="/whitepaper" element={<Documentation docs={whitepaper} />} />
          <Route path="/docs" element={<Documentation docs={documentation} />} />

          <Route path="/xln/permissions" element={<XLN xln={xln} page={xln.states[0]} />} />
          <Route path="/xln/buy-share" element={<XLN xln={xln} page={xln.states[1]} />} />
          <Route path="/xln/buy-tokens" element={<XLN xln={xln} page={xln.states[2]} />} />
          <Route path="/xln/code-block" element={<XLN xln={xln} page={xln.states[3]} />} />
          <Route path="/xln/create" element={<XLN xln={xln} page={xln.states[4]} />} />  
          <Route path="/xln/mint-asset" element={<XLN xln={xln} page={xln.states[5]} />} />
          <Route path="/xln/search" element={<XLN xln={xln} page={xln.states[6]} />} />
          <Route path="/xln/sell-share" element={<XLN xln={xln} page={xln.states[7]} />} />
          <Route path="/xln/assets/:id" element={<XLN xln={xln} page={xln.states[8]} />} />
          <Route path="/xln/assets/mint" element={<XLN xln={xln} page={xln.states[9]} />} />
          <Route path="/xln/assets/buy" element={<XLN xln={xln} page={xln.states[10]} />} />
          <Route path="/xln/comments" element={<XLN xln={xln} page={xln.states[11]} />} />
          <Route path="/xln/reviews" element={<XLN xln={xln} page={xln.states[12]} />} />
          <Route path="/xln/tx-prompt" element={<XLN xln={xln} page={xln.states[13]} />} />

          <Route path="/xln" element={<XLN xln={wallet} page={wallet.states[0]} />} />
          <Route path="/xln/wallet" element={<XLN xln={wallet} page={wallet.states[1]} />} />
          <Route path="/xln/setting" element={<XLN xln={wallet} page={wallet.states[2]} />} />
          <Route path="/xln/setting/photos" element={<XLN xln={wallet} page={wallet.states[3]} />} />
          <Route path="/xln/stats" element={<XLN xln={wallet} page={wallet.states[4]} />} />
          <Route path="/xln/wallet/shares" element={<XLN xln={wallet} page={wallet.states[5]} />} />
          <Route path="/xln/assets" element={<XLN xln={wallet} page={wallet.states[6]} />} />
          <Route path="/xln/wallet/shareholders" element={<XLN xln={wallet} page={wallet.states[7]} />} />
          <Route path="/xln/wallet/seed" element={<XLN xln={wallet} page={wallet.states[8]} />} />
          <Route path="/xln/wallet/send" element={<XLN xln={wallet} page={wallet.states[9]} />} />
          <Route path="/xln/wallet/swap" element={<XLN xln={wallet} page={wallet.states[10]} />} />
          <Route path="/xln/wallet/ninja" element={<XLN xln={wallet} page={wallet.states[11]} />} />
          <Route path="/xln/wallet/receive" element={<XLN xln={wallet} page={wallet.states[12]} />} />
          <Route path="/xln/setting/permission" element={<XLN xln={wallet} page={wallet.states[13]} />} />
          <Route path="/xln/setting/credentials" element={<XLN xln={wallet} page={wallet.states[14]} />} />
          
          {/* Create New Asset */}
          <Route path="/xln/create/asset/ai/art/" element={<XLN xln={create} page={create.states[0]} />} />  
          <Route path="/xln/create/asset/ai/chat" element={<XLN xln={create} page={create.states[1]} />} />  
          <Route path="/xln/create/asset/audio/" element={<XLN xln={create} page={create.states[2]} />} />  
          <Route path="/xln/create/asset/blog/" element={<XLN xln={create} page={create.states[3]} />} />  
          <Route path="/xln/create/asset/document/" element={<XLN xln={create} page={create.states[4]} />} />  
          <Route path="/xln/create/asset/domain/" element={<XLN xln={create} page={create.states[5]} />} />  
          <Route path="/xln/create/asset/downloader/" element={<XLN xln={create} page={create.states[6]} />} />  
          <Route path="/xln/create/asset/enterprise/" element={<XLN xln={create} page={create.states[7]} />} />  
          <Route path="/xln/create/asset/image/" element={<XLN xln={create} page={create.states[8]} />} />  
          <Route path="/xln/create/asset/link/" element={<XLN xln={create} page={create.states[9]} />} />  
          <Route path="/xln/create/asset/live/" element={<XLN xln={create} page={create.states[10]} />} />  
          <Route path="/xln/create/asset/metaverse/" element={<XLN xln={create} page={create.states[11]} />} />  
          <Route path="/xln/create/asset/music/" element={<XLN xln={create} page={create.states[12]} />} />  
          <Route path="/xln/create/asset/podcast/" element={<XLN xln={create} page={create.states[13]} />} />  
          <Route path="/xln/create/asset/real-estate/" element={<XLN xln={create} page={create.states[14]} />} />  
          <Route path="/xln/create/asset/shop/" element={<XLN xln={create} page={create.states[15]} />} />  
          <Route path="/xln/create/asset/text/" element={<XLN xln={create} page={create.states[16]} />} />  
          <Route path="/xln/create/asset/video/" element={<XLN xln={create} page={create.states[17]} />} />  
          <Route path="/xln/create/asset/website/" element={<XLN xln={create} page={create.states[18]} />} />  
          
          {/* View Asset */}
          <Route path="/xln/view/asset/:assetId/ai/art/" element={<XLN xln={view} page={view.states[0]} />} />  
          <Route path="/xln/view/asset/:assetId/ai/chat" element={<XLN xln={view} page={view.states[1]} />} />  
          <Route path="/xln/view/asset/:assetId/audio/" element={<XLN xln={view} page={view.states[2]} />} />  
          <Route path="/xln/view/asset/:assetId/blog/" element={<XLN xln={view} page={view.states[3]} />} />  
          <Route path="/xln/view/asset/:assetId/document/" element={<XLN xln={view} page={view.states[4]} />} />  
          <Route path="/xln/view/asset/:assetId/domain/" element={<XLN xln={view} page={view.states[5]} />} />  
          <Route path="/xln/view/asset/:assetId/downloader/" element={<XLN xln={view} page={view.states[6]} />} />  
          <Route path="/xln/view/asset/:assetId/enterprise/" element={<XLN xln={view} page={view.states[7]} />} />  
          <Route path="/xln/view/asset/:assetId/image/" element={<XLN xln={view} page={view.states[8]} />} />  
          <Route path="/xln/view/asset/:assetId/link/" element={<XLN xln={view} page={view.states[9]} />} />  
          <Route path="/xln/view/asset/:assetId/live/" element={<XLN xln={view} page={view.states[10]} />} />  
          <Route path="/xln/view/asset/:assetId/metaverse/" element={<XLN xln={view} page={view.states[11]} />} />  
          <Route path="/xln/view/asset/:assetId/music/" element={<XLN xln={view} page={view.states[12]} />} />  
          <Route path="/xln/view/asset/:assetId/podcast/" element={<XLN xln={view} page={view.states[13]} />} />  
          <Route path="/xln/view/asset/:assetId/real-estate/" element={<XLN xln={view} page={view.states[14]} />} />  
          <Route path="/xln/view/asset/:assetId/shop/" element={<XLN xln={view} page={view.states[15]} />} />  
          <Route path="/xln/view/asset/:assetId/text/" element={<XLN xln={view} page={view.states[16]} />} />  
          <Route path="/xln/view/asset/:assetId/video/" element={<XLN xln={view} page={view.states[17]} />} />  
          <Route path="/xln/view/asset/:assetId/website/" element={<XLN xln={view} page={view.states[18]} />} />  
          

          <Route path="/xln/:username" element={<XLN xln={wallet} page={wallet.states[0]} />} />
          {/* <Route path="/template" element={<Template options={xln.options} />} /> */}

          <Route path="/users/:id/wallet" element={<XLN xln={wallet} page={wallet.states[0]} />} />
          {/* <Route path="/users/:id/cover_photo" element={<CoverPhoto />} />
          <Route path="/users/:id/profile_photo" element={<ProfilePhoto />} /> */}

          {/* <Route path="/assets" element={<Assets />} />
          <Route path="/assets/:id" element={<Assets />} />
          <Route path="/assets/create" element={<ExecuteAsset users={users} />} />
          <Route path="/assets/:id/sell" element={<ExecuteAsset />} />
          <Route path="/assets/:id/buy" element={<ExecuteAsset />} /> */}



          {/* <Route path="/users/:id/assets/:id/view" element={<ExecuteAsset />} />
          <Route path="//shares" element={<Shares />} />
          <Route path="/shares/:id" element={<Shares />} />
          <Route path="/shares/:id/buy" element={<ExecuteShare />} />
          <Route path="/shares/:id/sell" element={<ExecuteShare />} /> */}
        </Routes>
        { !isLoggedIn?.success && (
          <Footer footer={footer} />
        )}
        </Suspense>
    </div>
  );
};

const mapStateToProps = (state: AppProps ) => {
  console.log("Authentication Log", state);
  return {
    auth: state.auth,
    users: state.users,
    blockchain: state.blockchain
  };
};

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
