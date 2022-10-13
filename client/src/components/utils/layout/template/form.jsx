import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  attachAsset,
  createAsset
} from '../../../../actions/asset';

import {
  buyNFT,
  buyTokens,
  mintNFT,
  mintToken,
  tokenSupply,
  updateSupply,
} from "../../../../actions/blockchain";


import { uploadUserFile, updateUser } from "../../../../actions/user";

import { validAuthLogin, validAuthRegister } from "../../operations/auth";

import {
  FormInput,
  FormTextArea,
  FormSelect,
  FormDropdown,
  FormButton,
  FileUpload,
  BuyFormInput,
} from "./formStyles";

const Form = ({
  addNewError,
  attachAsset,
  auth,
  blockchain,
  buyNFT,
  buyTokens,
  createAsset,
  findUsername,
  forgotPassword,
  formData: { action, method, fields, submit },
  loginUser,
  mintNFT,
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
  const params = useParams();

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

    if (auth.isError) {
      setShowError(true);
      errorArr.push(auth.error);
      setValues({ ...values, errors: [...values?.errors, ...errorArr] });
    }
  }, [auth?.login?.success, auth?.register?.success]);

  useState(() => {
    if (users.isError) {
      users.error && errorArr.push(users.error);
      setValues({ ...values, errors: [...errorArr] });
    }
  }, [users.isError]);

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
        return <FormTextArea 
        key={index} 
        options={attributes} 
        setValues={setValues}
        values={values}
        />;

      case "select":
        return <FormSelect 
        key={index} options={attributes} 
        setValues={setValues}
        values={values}
        />;

      case "dropdown":
        return <FormDropdown 
        key={index} 
        options={attributes} 
        setValues={setValues}
        values={values}
        />;

      case "file":
        return (
          <FileUpload
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      default:
        return <>Empty</>;
    }
  };

  const mapFields = (fields) =>
    fields.map(({ type, attributes }, index) =>
      formFieldTypes(type, attributes, index)
    );

  const mapErrors = (errors) =>
    errors.map((error, index) => (
      <ErrorAlert key={index} error={error} action={removeError} />
    ));

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('OnSubmit', action, values)
    
    if (!errorArr.length) {
      switch (action) {

        case "attachAsset":
          const { id } = params;
          console.log('attach asset ------', id, values )
         // mintNFT({ id: users.id, address: blockchain.nft.address, values });
           attachAsset({ id, values });
          break;

        case "buyNFT":
          console.log('buyNFT', { blockchain })
          buyNFT('param ----');
          break;

          case "buyTokens":
            buyTokens(values);
            break;

          case "createAsset":
            console.log('create asset ------', { id: users.id, values, blockchain })
           // mintNFT({ id: users.id, address: blockchain.nft.address, values });
             createAsset({ id: users.id, values, blockchain });
            break;

        // Auth
        case "login":
          await validAuthLogin(values, addNewError);
          await loginUser(values);
          break;
        case "register":
          await validAuthRegister(values, addNewError, findUsername);
          await registerUser(values);
          break;
        case "forgotPassword":
          forgotPassword(values);
          break;
        case "resetPassword":
          resetPassword(values);
          break;

        //Blockchain
        case "updateSupply":
          updateSupply(values);
          break;

        // Profile
        case "updateProfile":
          updateUser(users.id, values);

        // General
        case "uploadFile":
          uploadUserFile(users.id, values);

          break;
        default:
          return null;
      }
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} method={method}>
      <div className={action == "buyXLN" ? "buy-xln-form" : ""}>
        {mapFields(fields)}
        {auth.forgotPassword?.success && (
          <div className="form-alert form-alert-success">
            <div className="success-text">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        )}

        <FormButton className={submit.className} label={submit.label} />

        {auth.isError && mapErrors(auth.errors)}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    asset: state.asset,
    auth: state.auth,
    users: state.users,
    blockchain: state.blockchain,
  };
};

const mapDispatchToProps = {
  addNewError,
  attachAsset,
  buyNFT,
  buyTokens,
  createAsset,
  findUsername,
  forgotPassword,
  loginUser,
  mintNFT,
  registerUser,
  removeError,
  resetPassword,
  uploadUserFile,
  updateSupply,
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
