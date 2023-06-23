import React, { useState } from 'react'
import { FormWrapper } from "../../../layout/HOC/form-wrapper";
import Form from '../../form/form';

const CreateText: React.FC = ({ options }) => {
  const [ values, setValues ] = useState({})
    return (
      <FormWrapper>
        <h2>CreateText</h2>
        <Form formData={options} setValues={setValues} values={values} />
      </FormWrapper>
    );
  };

  export default CreateText;