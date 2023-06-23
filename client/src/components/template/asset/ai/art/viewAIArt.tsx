import React, { useState, useEffect } from "react";
import "../../../../../css/assets/ai/aiView.scss";
import Form from "../../../form/form";
import { ToggleFormContainer } from "../../../../layout/HOC/toggle-form-container";
import { charLimiter } from "../../../../utils/text/transform";

const ViewAIArt: React.FC = ({ ai, asset, options, setActionType }) => {
  const [values, setValues] = useState({});
  const [ expand, setExpand ] = useState(false)

  useEffect(() => {
    setActionType("getAssetArt");
  }, []);

  console.log("View AI Asset", asset, "AI ---", ai)

  return (
    <div id="ai-art-view">
      <div id="view-info">
        <div className="view-input">
          <div className="cover-text">
            <div className="cover-text-heading">
            <h2 className="label">{asset.assetType}</h2>
            </div>
            {/* asset.description */}
            <p>{charLimiter(420, asset.description)}</p>
            <div className="category-art">
                {asset.category
                  .split(",")
                  .slice(0, 6)
                  .map((cat, index) => (
                    <span key={index} className="category-item">{cat}</span>
                  ))}
              </div>
          </div>
          <ToggleFormContainer header="Generate Variations" description="Use the main image to generate a collection">
                  <Form formData={options} setValues={setValues} values={values} />
          </ToggleFormContainer>
        </div>
      </div>

      <div id="view-cover">

        <div className={"cover-image"}>
          <div className="cover-image-btn">
            <button onClick={() => setExpand(!expand) }>
            <i className={ expand ?  "fa-solid fa-down-left-and-up-right-to-center" : "fa-solid fa-up-right-and-down-left-from-center fa-beat"} ></i>
            </button>
          </div>
          <div className={expand ? 'expand' : 'shrink'}>
          <img
            src={asset.cover === 'no-photo.jpg' ? `/uploads/xln/asset/images/no-asset-placeholder.png` : `/uploads/${asset.user}/asset/${asset.cover}`}
            width="100%"
            height="auto"
          />
          </div>
        </div>

        <div className="list-container">
          {ai.art.map(({ url, user }) => (
            <div className="view-item">
              <img
                src={`/uploads/${user}/asset/${url}`}
                width="100%"
                height="auto"
              />
              <div className="view-item-icon">
                <p>Icon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAIArt;
