//React
import React, { useEffect } from "react";

// React DOM
import { Routes, Route, useNavigate } from "react-router-dom";

// Data
import { header, footer, landing, socialLinks, register, login, xln, whitepaper, documentation, forgotPassword, resetPassword } from "../data";

// Components
import Header from "./global/Header";
import Error from "./global/Error";
import Footer from "./global/Footer";
import Documentation from "./utils/documentation";
import Landing from "./landing";
import Profile from "./profile";
import XLN from "./xln";
import Template from './utils/layout/template';
import Wallet from "./wallet";
import CoverPhoto from "./profile/setting.js/cover-photo";
import ProfilePhoto from "./profile/setting.js/profile_photo";
import Assets from "./asset";
import ExecuteAsset from "./asset/execute";
import Shares from "./share";
import ExecuteShare from "./share/execute";
import NotFound from "./notFound";
import AIModelSelector from './AI/';
import XRScene from './XR/index';

// Utils
import FormatLayout from "./utils/layout/";
import PrivateRoute from "./global/PrivateRoute";

// CSS
import "../css/App.scss";
import "../css/Buttons.scss";
import "../css/Form.scss";
import "../css/assets/Assets.scss";
import "../css/error/error.scss";

//Redux
import { connect } from "react-redux";
import { loadUser } from "../actions/user";


const App = ({ auth, users, blockchain, loadUser }) => {

 let navigate = useNavigate();
 const xlnToken = sessionStorage.getItem('xln_token');
 const isLoggedIn = xlnToken ? JSON.parse(xlnToken) : false;

  useEffect(() => {
    const init = async () => {
      if (isLoggedIn?.success) {
        await loadUser();
      } else {
      // navigate("../login", { replace: true });
      }
    }
    
    init();
  }, []);

  return (
    <div className="xln-container">
        <Header auth={auth} user={users} header={header} isLoggedIn={isLoggedIn} xln={xln} landing={landing} />
        {/* { auth.isError && <Error auth={auth.error} /> } */}
        <Routes>
        <Route path='*' element={<NotFound />} />
          <Route
            path="/"
            element={<Landing landing={landing} socialLinks={socialLinks} />}
          />
          <Route
            path="/login"
            element={<FormatLayout type={login.type} options={login.options} />}
          />
          <Route
            path="/register"
            element={
              <FormatLayout type={register.type} options={register.options} />
            }
          />

          <Route
            path="/forgotpassword"
            element={
              <FormatLayout type={forgotPassword.type} options={forgotPassword.options} />
            }
          />

          <Route
            path="/reset_password?:id"
            element={
              <FormatLayout type={resetPassword.type} options={resetPassword.options} />
            }
          />

          <Route
            path="/resetpassword"
            element={
              <FormatLayout type={resetPassword.type} options={resetPassword.options} />
            }
          />

          <Route
            path="/whitepaper"
            element={<Documentation docs={whitepaper} />}
          />

          <Route
            path="/docs"
            element={<Documentation docs={documentation} />}
          />


          <Route path="/xln" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[0]} />} />
          <Route path="/xln/assets/" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[1]} />} />
          <Route path="/xln/assets/:id" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[5]} />} />
          <Route path="/xln/buy-tokens" element={<XLN  users={users}  auth={auth} xln={xln} page={xln.states[2]} />} />
          <Route path="/xln/buy-nfts" element={<XLN  users={users}  auth={auth} xln={xln} page={xln.states[5]} />} />
          <Route path="/xln/mint-asset" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[2]} />} />
          <Route path="/xln/buy-share" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[3]} />} />
          <Route path="/xln/sell-share" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[4]} />} />
          <Route path="/xln/permissions" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[5]} />} />
          <Route path="/xln/comments" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[6]} />} />
          <Route path="/xln/mint-asset" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[7]} />} />
          <Route path="/xln/create-asset" element={<XLN  users={users} auth={auth} xln={xln} page={xln.states[4]} />} />          <Route path="/xln/assets/:id" element={<XLN users={users} xln={xln} page={xln.states[10]} />} />

          <Route path="/template" element={<Template options={xln.options} />} />

          <Route path="/xln/:username" element={<Profile />} />
          <Route path="/users/:id/wallet" element={<Wallet />} />
          <Route path="/users/:id/cover_photo" element={<CoverPhoto />} />
          <Route path="/users/:id/profile_photo" element={<ProfilePhoto />} />

          <Route path="/assets" element={<Assets />} />
          <Route path="/assets/:id" element={<Assets />} />
          <Route path="/assets/create" element={<ExecuteAsset users={users} />} />
          <Route path="/assets/:id/sell" element={<ExecuteAsset />} />
          <Route path="/assets/:id/buy" element={<ExecuteAsset />} />

          <Route path="/ai" element={<AIModelSelector type="handPoseDetection" />} /> 
 
          <Route path="/xr" element={<XRScene />} /> 

          <Route path="/users/:id/assets/:id/view" element={<ExecuteAsset />} />
          <Route path="//shares" element={<Shares />} />
          <Route path="/shares/:id" element={<Shares />} />
          <Route path="/shares/:id/buy" element={<ExecuteShare />} />
          <Route path="/shares/:id/sell" element={<ExecuteShare />} />
        </Routes>
        { !isLoggedIn?.success && (
          <Footer footer={footer} socialLinks={socialLinks} />
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
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
