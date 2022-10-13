//React
import React, { useEffect } from "react";

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
  socialLinks, 
  register, 
  login, 
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
import Documentation from "./utils/layout/documentation";
import Landing from "./landing";
import XLN from "./xln";
// import Template from './utils/layout/template';
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
        <Header auth={auth} user={users} blockchain={blockchain} header={header} isLoggedIn={isLoggedIn} xln={xln} landing={landing} />
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


          <Route path="/xln/permissions" element={<XLN xln={xln} page={xln.states[0]} />} />
          <Route path="/xln/attach-asset/:id" element={<XLN xln={xln} page={xln.states[1]} />} />  
          <Route path="/xln/buy-share" element={<XLN xln={xln} page={xln.states[2]} />} />
          <Route path="/xln/buy-tokens" element={<XLN xln={xln} page={xln.states[3]} />} />
          <Route path="/xln/code-block" element={<XLN xln={xln} page={xln.states[4]} />} />
          <Route path="/xln/create-asset" element={<XLN xln={xln} page={xln.states[5]} />} />  
          <Route path="/xln/mint-asset" element={<XLN xln={xln} page={xln.states[6]} />} />
          <Route path="/xln/sell-share" element={<XLN xln={xln} page={xln.states[7]} />} />
          <Route path="/xln/assets/:id" element={<XLN xln={xln} page={xln.states[8]} />} />
          <Route path="/xln/assets/mintable" element={<XLN xln={xln} page={xln.states[9]} />} />
          <Route path="/xln/assets/buy" element={<XLN xln={xln} page={xln.states[10]} />} />
          <Route path="/xln/comments" element={<XLN xln={xln} page={xln.states[11]} />} />
          <Route path="/xln/reviews" element={<XLN xln={xln} page={xln.states[12]} />} />
          <Route path="/xln/tx-prompt" element={<XLN xln={xln} page={xln.states[13]} />} />

          <Route path="/xln" element={<XLN xln={wallet} page={wallet.states[0]} />} />
          <Route path="/xln/wallet" element={<XLN xln={wallet} page={wallet.states[1]} />} />
          <Route path="/xln/wallet/setting" element={<XLN xln={wallet} page={wallet.states[2]} />} />
          <Route path="/xln/wallet/file-upload" element={<XLN xln={wallet} page={wallet.states[3]} />} />
          <Route path="/xln/wallet/stats" element={<XLN xln={wallet} page={wallet.states[4]} />} />
          <Route path="/xln/wallet/shares" element={<XLN xln={wallet} page={wallet.states[5]} />} />
          <Route path="/xln/wallet/assets" element={<XLN xln={wallet} page={wallet.states[6]} />} />
          <Route path="/xln/wallet/shareholders" element={<XLN xln={wallet} page={wallet.states[7]} />} />

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

          <Route path="/ai" element={<AIModelSelector type="handPoseDetection" />} /> 
 
          <Route path="/xr" element={<XRScene />} /> 

          {/* <Route path="/users/:id/assets/:id/view" element={<ExecuteAsset />} />
          <Route path="//shares" element={<Shares />} />
          <Route path="/shares/:id" element={<Shares />} />
          <Route path="/shares/:id/buy" element={<ExecuteShare />} />
          <Route path="/shares/:id/sell" element={<ExecuteShare />} /> */}
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
