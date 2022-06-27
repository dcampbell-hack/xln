import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { ErrorAlert } from '../layout/errors/alert';

//Redux
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../../actions/auth';
import { uploadFile } from '../../../actions/user'
import { validateEmailAddress, validatePassword } from '../operations/auth';
import { FormInput,  FormTextArea, FormSelect, FormDropdown, FormButton, FileUpload } from "./elements";

/*
{
action: "",
method: ""
fields: [
    {type: input, options },
    {type: textarea, options },
    {type: select, options },
    {type: dropdown, options }
]
}

 */

const Form = ({ formData: { action, method, fields, submit }, setValues, values, loginUser, registerUser, uploadFile, auth }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if(auth.register.success){
      navigate("../login", { replace: true });
    }

   if(auth.login.success){
     sessionStorage.setItem('xln_token', JSON.stringify(auth.login));
      navigate("../xln", { replace: true });
   }
  }, [auth?.login?.success, auth?.register?.success]);


  const formFieldTypes = ( type, attributes, index ) => {
    switch (type) {
      case "input":
        return <FormInput key={index} options={attributes} setValues={setValues} values={values}  />;

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

  const onSubmit = async (e) => {
      e.preventDefault();

     const errorArr = [];
     const validPassword = validatePassword(values.password, values.password2);
     const validEmail = validateEmailAddress(values.email);

     if(auth.isError){
      errorArr.push(auth.error);
     }

     if(!validEmail.status){
        errorArr.push(validEmail.error);
     } 

     if(action === 'register' && !validPassword.status){
      errorArr.push(validPassword.error);
     } 

     if(auth.status && auth.status !== 200){
       auth.error && errorArr.push(auth.error)
     }

if(auth.status !== 200 ){
  setValues({ ...values, errors: errorArr  })
}

if(errorArr.length){
  throw new Error( errorArr[0] );
}

if(!errorArr.length){
  switch(action){
    case "login": 
      loginUser(values);
      break;
    case "register":
       registerUser(values)
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
       {  mapFields(fields) }
       <p className='form-error'>{ values.errors && mapErrors(values.errors) }</p>
       <FormButton className={submit.className} label={submit.label} />
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
  uploadFile
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
