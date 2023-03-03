import React, { useRef, useEffect, useState } from "react";
import { FormWrapper } from "../../../HOC/form-wrapper";
import Form from "../../form/form";

const CreateVideo = ({ options }) => {

  const [ values, setValues ] = useState({})

  return (
   <FormWrapper>
      <Form formData={options} values={values} setValues={setValues} />
   </FormWrapper>
  );
};

export default CreateVideo;