//React
import React, { useEffect } from "react";

// React DOM
import { Routes, Route, useNavigate } from "react-router-dom";

// Data
import { header, footer, landing, socialLinks, register, login, xln, whitepaper } from "../data";

// Components
import Header from "./global/Header";
import Error from "./global/Error";
import Footer from "./global/Footer";
import Whitepaper from "./whitepaper";
import Landing from "./landing";
import Profile from "./profile";
import XLN from "./xln";
import Wallet from "./wallet";
import CoverPhoto from "./profile/setting.js/cover-photo";
import ProfilePhoto from "./profile/setting.js/profile_photo";
import Assets from "./asset";
import ExecuteAsset from "./asset/execute";
import Shares from "./share";
import ExecuteShare from "./share/execute";
import NotFound from "./notFound";
import AIModelSelector from './AI/';
import XRDemo from './XR/';

// Utils
import FormatLayout from "./utils/layout/";

// CSS
import "../css/App.scss";
import "../css/Buttons.scss";
import "../css/Form.scss";
import "../css/assets/Assets.scss";
import "../css/error/error.scss";

//Redux
import { connect } from "react-redux";
import { loadUser } from "../actions/user";


const App = ({ auth, users, loadUser }) => {

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
        { auth.isError && <Error auth={auth} /> }
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
            path="/whitepaper"
            element={<Whitepaper whitepaper={whitepaper} />}
          />


          <Route path="/xln" element={<XLN 
              users={users}
              xln={xln}
          />} />

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
 
          <Route path="/xr" element={<XRDemo />} /> 

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
  };
};

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
