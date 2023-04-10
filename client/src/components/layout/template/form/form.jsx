import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { category } from "../../../../data/categories";
// Components
import { ErrorAlert } from "../../errors/alert";

//Redux
import { connect } from "react-redux";

// Action items
import {
  loginUser,
  registerUser,
  findUsername,
  forgotPassword,
  resetPassword
} from "../../../../actions/user/auth";

// Action items
import {
  addNewError,
  removeError
} from "../../../../actions/error";

import {
  createAsset,
  downloadYoutube,
} from "../../../../actions/assets/asset";

import { uploadUserFile, updateUser } from "../../../../actions/user/user";

import { textToImage } from "../../../../actions/assets/ai";

import {
  buyNFT,
  buyTokens,
  mintNFT,
  mintToken,
  tokenSupply,
  updateSupply,
} from "../../../../actions/blockchain";

import { ToggleFormContainer } from "../../HOC/toggle-form-container";

import {
  validAuthLogin,
  validAuthRegister,
  validUpdateProfile
} from "../../../utils/operations/auth";

import {
  isValidAssetValues,
} from '../../../utils/operations/asset'

import {
  FormInput,
  FormTextArea,
  FormSelect,
  FormDropdown,
  FormButton,
  FileUpload,
  BuyFormInput,
} from "./formStyles";

import { AssetDetails } from "../../../utils/helpers/assetDetails";

const Form = ({
  addNewError,
  ai,
  assets,
  auth,
  blockchain,
  buyNFT,
  buyTokens,
  createAsset,
  downloadYoutube,
  findUsername,
  forgotPassword,
  formData: { action, method, assetType = "", toggle = false, fields, submit },
  textToImage,
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
  const [error, setError] = useState([]);
  const [status, setStatus ] = useState(false)

  useEffect(() => {
 
    const description =  `${assetType} asset created by ${
      users.username
    } on ${new Date(Date.now()).toDateString()}.`

    setValues({
      ...values,
      assetType,
      name: `${assetType}_${Date.now()}`,
      category: category.find(({ name }) => name === assetType)?.suggestion.toString(),
      description: values.prompt ? ( description + " " + values.prompt ) : description,
      website: users.website,
      price: users.assetPrice - users.assetPrice * 0.03,
      stock: users.stockLimit,
      fee: users.assetPrice * 0.03,
    });


  }, []);

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
      setError([...error, auth.error]);
      setValues({ ...values, errors: [...values?.errors, ...error] });
    }

    if (users.isError) {
      users.error && setError([...error, users.error]);
      setValues({ ...values, errors: [...error] });
    }
  }, [auth?.login?.success, auth?.register?.success]);



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
            blockchain={blockchain}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      case "textarea":
        return (
          <FormTextArea
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      case "select":
        return (
          <FormSelect
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

      case "dropdown":
        return (
          <FormDropdown
            key={index}
            options={attributes}
            setValues={setValues}
            values={values}
          />
        );

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
     setStatus(!status)
    console.log("OnSubmit", action, values, error );

    if (!error.length) {
      const { id } = params;
      switch (action) {

        case "buyNFT":
          console.log("buyNFT", { blockchain });
          buyNFT("param ----");
          break;

        case "buyTokens":
          buyTokens(values);
          break;

        case "createAsset":
          await isValidAssetValues(assetType, values, addNewError) 
          await createAsset({ id: users.id, values, blockchain });
           
          break;

        // Auth
        case "login":
          await validAuthLogin(values, addNewError, setStatus);
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

        case "downloadYoutube":
          values.id = users.id;
          downloadYoutube(values);
          break;

        case "setCredentials":
        case "updateProfile":
          await validUpdateProfile(values, addNewError, findUsername);
          updateUser(users.id, values);

        //Blockchain
        case "updateSupply":
          console.log("Update Supply", values);
          updateSupply(values);
          break;

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
    <form className="xln-form" onSubmit={(e) => onSubmit(e)} method={method}>
      <div className={action == "buyXLN" ? "buy-xln-form" : "form-default"}>
        {mapFields(fields)}
        {auth.forgotPassword?.success && (
          <div className="form-alert form-alert-success">
            <div className="success-text">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        )}

        {toggle && (
          <ToggleFormContainer header="Asset details:">
            <AssetDetails assetType={assetType} users={users} />
          </ToggleFormContainer>
        )}

        <FormButton status={status} className={submit.className} label={submit.label} />

        {auth.isError && mapErrors(auth.errors)}
        {assets.isError && mapErrors(assets.errors)}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    ai: state.ai,
    assets: state.assets,
    auth: state.auth,
    users: state.users,
    blockchain: state.blockchain,
  };
};

const mapDispatchToProps = {
  addNewError,
  buyNFT,
  buyTokens,
  createAsset,
  downloadYoutube,
  findUsername,
  forgotPassword,
  textToImage,
  loginUser,
  mintNFT,
  registerUser,
  removeError,
  resetPassword,
  uploadUserFile,
  updateSupply,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
