import { useState } from 'react'
import { FormWrapper } from "../../../HOC/form-wrapper";
import Form from '../../form/form';

const CreateText = ({ options }) => {
  const [ values, setValues ] = useState({})
    return (
      <FormWrapper>
        <h2>CreateText</h2>
        <Form formData={options} setValues={setValues} values={values} />
      </FormWrapper>
    );
  };

  export default CreateText;