import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import { ErrorAlert } from "../errors/alert";

//Redux
import { connect } from "react-redux";

// Action items
import {
  addNewError,
  loginUser,
  registerUser,
  findUsername,
  forgotPassword,
  removeError,
  resetPassword,
} from "../../../../actions/auth";
import { 
  buyXLN, 
  mintToken, 
  tokenSupply,
  updateSupply, 
} from "../../../../actions/blockchain";
import { 
  uploadUserFile, 
  updateUser 
} from "../../../../actions/user";

import { 
  validAuthLogin,
  validAuthRegister,
} from "../../operations/auth";

import {
  FormInput,
  FormTextArea,
  FormSelect,
  FormDropdown,
  FormButton,
  FileUpload,
  BuyFormInput,
} from "./elements";

const Form = ({
  addNewError,
  auth,
  blockchain,
  findUsername,
  forgotPassword,
  formData: { action, method, fields, submit},
  loginUser,
  registerUser,
  removeError,
  resetPassword,
  setValues,
  updateSupply,
  updateUser,
  uploadUserFile,
  users,
  values,
}) => {
  
  let navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  //const [ showSuccess, setShowSuccess ] = useState(false)
  const errorArr = [];
  
  useEffect(() => {
    if (auth.register.success) {
      navigate("../login", { replace: true });
    }

    if (auth.login.success) {
      sessionStorage.setItem("xln_token", JSON.stringify(auth.login));
      navigate("../xln", { replace: true });
    }

    if (auth.isError ) {
      setShowError(true);
      errorArr.push(auth.error);
      setValues({ ...values, errors: [ ...values.errors, ...errorArr ]  });
    }
  }, [auth?.login?.success, auth?.register?.success]);


  useState(() => {
    if(users.isError){
      errorArr.push(users.error);
      setValues({ ...values, errors: [ ...errorArr ]  })

      console.log('Values useState ---->', values)
    }

  }, [ users.isError ])

  const formFieldTypes = (type, attributes, index) => {
    switch (type) {
      case "input":
        return (
          <FormInput
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      case "buy":
        return (
          <BuyFormInput
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      case "textarea":
        return <FormTextArea key={index} options={attributes} />;

      case "select":
        return <FormSelect key={index} options={attributes} />;

      case "dropdown":
        return <FormDropdown key={index} options={attributes} />;

      case "file":
        return <FileUpload 
        key={index} 
        options={attributes} 
        setValues={setValues}
        values={values}
        />;

      default:
        return <>Empty</>;
    }
  };

  const mapFields = (fields) => fields.map(({ type, attributes }, index) =>
      formFieldTypes(type, attributes, index)
    );

  const mapErrors = (errors) => errors.map((error, index) => <ErrorAlert key={index} error={error} action={removeError} />);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!errorArr.length) {
      switch (action) {
        case "login":
        await  validAuthLogin(values, addNewError)
        await  loginUser(values);
          break;
        case "register":
         await validAuthRegister(values, addNewError, findUsername )
         await registerUser(values);
          break;
        case "forgotPassword":
          forgotPassword(values);
          break;
        case "resetPassword":
          resetPassword(values);
          break;
        case "updateSupply":
          updateSupply(values);
          break;
        case "updateProfile":
          updateUser(users.id, values);
        case "buyXLN":
          buyXLN(values);
          break;
        case "uploadFile":
           uploadUserFile(users.id, values );
          break;
        default:
          return null;
      }
    }
  };



  return (
    <form onSubmit={(e) => onSubmit(e)} method={method}>
      <div className={action == "buyXLN" ? "buy-xln-form" : "" }>
        {mapFields(fields)}
        {auth.forgotPassword?.success && (
          <div className="form-alert form-alert-success">
            <div className="success-text">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        )}

        <FormButton className={submit.className} label={submit.label} />

        {auth.isError && mapErrors( auth.errors ) }
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users,
    blockchain: state.blockchain
  };
};

const mapDispatchToProps = {
  addNewError,
  buyXLN,
  findUsername,
  forgotPassword,
  loginUser,
  registerUser,
  removeError,
  resetPassword,
  uploadUserFile,
  updateSupply,
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
