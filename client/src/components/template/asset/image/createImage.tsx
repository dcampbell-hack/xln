import React, { useState } from "react";
import { FormWrapper } from "../../../layout/HOC/form-wrapper";
import Form from "../../form/form";

const CreateImage: React.FC = ({ options }) => {
  const [ values, setValues ] = useState({})
  return (
    <FormWrapper>
      <h2>Create Image</h2>
       <Form formData={options} setValues={setValues} values={values} />
    </FormWrapper>
  );
};

export default CreateImage;