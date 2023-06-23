import React, { useState } from 'react'
import { FormWrapper } from "../../../layout/HOC/form-wrapper";
import Form from "../../form/form"
;
const CreateLink: React.FC = ({ options }) => {

  const [ setValues, values ] = useState({})

  return (
    <FormWrapper>
      <h2>Create Link</h2>
      <Form formData={options} setValues={setValues} values={values} />
    </FormWrapper>
  );
};

export default CreateLink;