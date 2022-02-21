import { BrowserRouter, Routes, Route } from "react-router-dom";
import { header, footer, landing, socialLinks, register } from "../data";
import Header from "./global/Header";
import Footer from "./global/Footer";
import Landing from "./landing";
import FormatLayout from "./utils/layout/";
import "../css/App.scss";
import "../css/Buttons.scss";
import "../css/Form.scss";

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
          path="/register" 
          element={<FormatLayout type={register.type} options={register.options}  /> }
          />
        </Routes>
        <Footer footer={footer} socialLinks={socialLinks} />
        </BrowserRouter>
    </div>
  );
};

export default App;
