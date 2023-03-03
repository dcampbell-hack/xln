import { useState, useEffect } from "react";
import "../../../../../../css/assets/ai/aiView.scss";
import Form from "../../../form/form";
import { charLimiter } from "../../../../../utils/text/transform";

const ViewAIArt = ({ ai, asset, options, setActionType }) => {

const [values, setValues] = useState({})

useEffect(() => {
  setActionType("getAssetArt")
}, [])

  return (
    <div id="ai-art-view">
      <div id="ai-art-view-cover">
        <div className="cover-text">
          <div className="cover-text-heading">
            <div className="category-art">
              {asset.category
                .split(",")
                .slice(0, 6)
                .map((cat, index) => (
                  <span key={index}>{cat}</span>
                ))}
            </div>
          </div>
          {/* asset.description */}
          <p>{charLimiter(420, asset.description)}</p>
          <div className="label">{asset.assetType}</div>
        </div>
        <div className="cover-image">
          <img
            src={`/uploads/${asset.user}/asset/${asset.cover}`}
            width="auto"
            height="100%"
          />
        </div>
      </div>
      <div id="ai-art-view-input">
         <Form formData={options} setValues={setValues} values={values} />
      </div>
      <div id="ai-art-view-list-container">

        { ai.art.map(({ url, user}) => <div className="ai-art-view-item">
          <img
            src={`/uploads/${user}/asset/${url}`}
            width="auto"
            height="100%"
          />
          <div className="view-item-icon">
            <p>Icon</p>
          </div>
        </div> )}

      </div>
    </div>
  );
};

export default ViewAIArt;
