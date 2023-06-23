import React, { useRef, useEffect, useState } from "react";
import { FormWrapper } from "../../../layout/HOC/form-wrapper";
import Form from "../../form/form";

const CreateVideo: React.FC = ({ options }) => {

  const [ values, setValues ] = useState({})

  return (
   <FormWrapper>
     <h4>Create Video Asset</h4>
      <Form formData={options} values={values} setValues={setValues} />
   </FormWrapper>
  );
};

export default CreateVideo;