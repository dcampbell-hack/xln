import { BrowserRouter, Routes, Route } from "react-router-dom";
import { header, footer, landing, socialLinks, kyc } from "../data";
import Header from "./global/Header";
import Footer from "./global/Footer";
import Landing from "./landing";
import FormatLayout from "./utils/layout/";
import "../css/App.scss";
import "../css/Buttons.scss";

const App = () => {
  return (
    <div className="xln-container">
        <BrowserRouter>
        <Header header={header} />
        <Routes>
          <Route
            path="/"
            element={<Landing landing={landing} socialLinks={socialLinks} />}
          />
          <Route 
          path="/kyc" 
          element={<FormatLayout type={kyc.type} options={kyc.options}  /> }
          />
        </Routes>
        <Footer footer={footer} />
        </BrowserRouter>
    </div>
  );
};

export default App;
