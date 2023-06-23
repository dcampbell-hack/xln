import React, { useState, useEffect } from 'react'
import { FormWrapper } from '../../../../layout/HOC/form-wrapper'
import "../../../../../css/assets/ai/aiCreate.scss";
import Form from "../../../form/form";

const CreateAIArt: React.FC = ({ options }) => {
    const [values, setValues] = useState({});

    return (
          <FormWrapper>          
              <p>Enter Text Prompt</p>
              <Form formData={options} setValues={setValues} values={values} />
          </FormWrapper>
    );
  };


  export default CreateAIArt


  