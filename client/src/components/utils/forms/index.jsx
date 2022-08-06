import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { ErrorAlert } from '../layout/errors/alert';

//Redux
import { connect } from 'react-redux';
import { loginUser, registerUser, forgotPassword, resetPassword } from '../../../actions/auth';
import { buyXLN } from '../../../actions/blockchain'
import { uploadFile } from '../../../actions/user'
import { validateEmailAddress, validatePassword } from '../operations/auth';
import { FormInput,  FormTextArea, FormSelect, FormDropdown, FormButton, FileUpload, BuyFormInput } from "./elements";


const Form = ({ formData: { action, method, fields, submit }, setValues, values, loginUser, registerUser, forgotPassword, resetPassword, uploadFile, auth }) => {
  let navigate = useNavigate();
  const [ showError, setShowError ] = useState(false)
  //const [ showSuccess, setShowSuccess ] = useState(false)
  useEffect(() => {

    if(auth.register.success){
      navigate("../login", { replace: true });
    }

   if(auth.login.success){
     sessionStorage.setItem('xln_token', JSON.stringify(auth.login));
      navigate("../xln", { replace: true });
   }

   if(auth.isError){
    console.log('Whats the error?', auth.error)
    setShowError(true)
    errorArr.push(auth.error);
    //setValues({ ...values, errors: errorArr  })
  
}

  }, [auth?.login?.success, auth?.register?.success]);


  const formFieldTypes = ( type, attributes, index ) => {
    switch (type) {
      case "input":
        return <FormInput key={index} options={attributes} setValues={setValues} values={values}  />;
       
        case "buy":
          return <BuyFormInput key={index} options={attributes} setValues={setValues} values={values}  />;
  
      case "textarea":
        return <FormTextArea key={index}  options={attributes} />;

      case "select":
        return <FormSelect key={index}  options={attributes} />;

      case "dropdown":
        return <FormDropdown key={index}  options={attributes} />;

        case "file":
          return <FileUpload key={index}  options={attributes} />;

    default:
        return <>Empty</>
    }
  };

  const mapFields = (fields) => fields.map(({type, attributes }, index) => formFieldTypes( type, attributes,index ) ); 
  const mapErrors = (errors) => errors.map((error, index) => <ErrorAlert key={index} error={error} />)
  const errorArr = [];
  const onSubmit = async (e) => {
      e.preventDefault();

      // action !== 'forgotPassword') && 
     const validPassword =  ( action !== 'login') || ( action !== 'buyXLN')   && validatePassword(values.password, values.password2);
     const validEmail = ( action !== 'buyXLN') && validateEmailAddress(values.email);

 

     if(!validEmail.status){
        setShowError(true)
        errorArr.push(validEmail.error);
     } 

     if( (action !== 'forgotPassword') && !validPassword.status){
      setShowError(true)
      errorArr.push(validPassword.error);
     }

     if(auth.status && auth.status !== 200){
       auth.error && errorArr.push(auth.error)
     }

if(auth.status !== 200 ){
  setValues({ ...values, errors: errorArr  })
}

if(!errorArr[''] || errorArr.length){
  errorArr.pop();
//  throw new Error( errorArr[0] );
}

console.log('Form Values ----', values )

if(!errorArr.length){
  switch(action){
    case "login": 
      loginUser(values);
      break;
    case "register":
       registerUser(values)
       break;
       case "forgotPassword":
        forgotPassword(values)
        break;
      case "resetPassword":
        resetPassword(values)
        break;
      case "buyXLN":
        buyXLN(values)
        break;
      case "avatar":
      uploadFile(values)
      break;
    default: 
    return null
  }

}
  }


  return (
  <form onSubmit={e => onSubmit(e)} method={method}>
    <div className={action == 'buyXLN' && 'buy-xln-form'}>
       {  mapFields(fields) }
       {
        auth.forgotPassword?.success && <div className='form-alert form-alert-success'>
            <div className='success-text'>
            <i className="fa-solid fa-check"></i>
            </div>
        </div>
       }

       <FormButton className={submit.className} label={submit.label} />

       { auth.isError || showError && <div className='form-alert form-alert-error'>
          <div className='error-text'>{ auth.error || values.errors && mapErrors(values.errors) }</div> 
          <div className="dismiss" onClick={() => setShowError(false)}>x</div>
      </div> 
      }
       </div>
  </form>
  
  )
};

const mapStateToProps = state => {
  return {
  auth: state.auth,
  users: state.users
}
};

const mapDispatchToProps = { 
  loginUser, 
  registerUser,
  forgotPassword,
  resetPassword,
  uploadFile,
  buyXLN
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
