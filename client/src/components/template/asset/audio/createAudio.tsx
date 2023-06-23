import React, { useState, useEffect } from 'react';
import Form from '../../form/form';
import { FormWrapper } from '../../../layout/HOC/form-wrapper';
import "../../../../css/assets/Audio.scss"

const CreateAudioPlayer: React.FC = ({ options }) => {

  const [ values, setValues ] = useState({})




  return (
       <FormWrapper>
        <h4>Create Audio Asset</h4>
         <Form formData={options} setValues={setValues} values={values} />
        </FormWrapper>
  );
}
export default CreateAudioPlayer;
