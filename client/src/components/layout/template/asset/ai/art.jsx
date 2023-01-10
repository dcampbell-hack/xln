import { useState } from 'react'
import "../../../../../css/assets/AI.scss";
import Form from "../../form/form";

export const AIArt = ({ options, setActionType }) => {
    const [values, setValues] = useState({});
  
    return (
      <div className="ai-art-container">
        <div className="ai-art-form">
          <h4>Enter Text Prompt</h4>
          <Form formData={options} setValues={setValues} values={values} />
        </div>
      </div>
    );
  };


  