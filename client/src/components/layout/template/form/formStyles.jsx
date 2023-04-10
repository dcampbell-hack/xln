import { useEffect, useState } from "react";
import { InfoB } from "../../../utils/buttons/buttons";

const Option = ({ value, text, selected }) => {
  return (
    <option value={value} selected={selected}>
      {text}
    </option>
  );
};

const mapOptions = (options) =>
  options.map(({ value, text, selected }, index) => (
    <Option key={index} value={value} text={text} selected={selected} />
  ));

export const FormInput = ({
  options: {
    label: { error, inverse, show, labelText, forId },
    input: { type, id, className, name, value, placeholder, pattern = "", min = "", step = "", disabled=false },
    aria: {},
  },
  setValues,
  values,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onchange = (e) => {
    let newValue = e.target.value;
    if( type == "number" ){
      newValue = Math.abs(e.target.value)
    }
    setValues({ ...values, [e.target.name]: newValue });
  };

  return (
    <div
      className={`form-control-container ${
        type == "password" ? "password_input" : "normal_input"
      } ${error && "form-error"} ${inverse && "row-reverse"}`}
    >
      {show && <label htmlFor={forId}>{labelText}</label>}
      <div className="form-control">
        <input
          type={showPassword ? "text" : type}
          id={id}
          className={className}
          name={name}
          min={min}
          step={step}
          pattern={ pattern !== "" && pattern}
          placeholder={placeholder}
          onChange={(e) => onchange(e)}
          disabled={disabled}
        />
        {type == "password" && (
          <div
            className="form-toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <h6>Show</h6> : <h6>Hide</h6>}
          </div>
        )}
      </div>
    </div>
  );
};

export const BuyFormInput = ({
  options: {
    label: { error, inverse, show, labelText, forId },
    input: { type, id, className, name, value, placeholder },
    aria: {},
  },
  blockchain,
  setValues,
  values,
}) => {

  const calculatedPrice = (a,b) => a * b;
  const [ dai, setDai ] = useState( calculatedPrice(blockchain.supply, blockchain.price) )

  const onchange = (e) => {
    setDai(calculatedPrice(e.target.value, blockchain.price))
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={` ${error ? "form-error" : ""} ${
        inverse ? "row-reverse" : ""
      }`}
    >
      <div className="form-control">
        <input
          type="number"
          className="buy-xln-form"
          name="buyxln"
          placeholder={`${blockchain.supply } XLN`}
          onChange={(e) => onchange(e)}
          min="0"
          step=".001"
        />
        <i>{dai.toFixed(2)} DAI</i>
      </div>
    </div>
  );
};

export const FormSelect = ({
  options: {
    label: { forId, labelText, show },
    select: { id, name, size, multiple, list },
    aria: {},
  },
}) => {
  return (
    <div>
      {show && <label for={forId}>{labelText}</label>}
      <select id={id} name={name} size={size} multiple={multiple}>
        {mapOptions(list)}
      </select>
    </div>
  );
};

export const FormTextArea = ({
  options: {
    area: { name, rows, cols, text, placeholder, className },
    aria: {},
  },
  setValues,
  values,
}) => {
  return (
    <textarea
      className={className}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={(e) =>
        setValues({ ...values, [e.target.name]: e.target.value })
      }
    >
      {text}
    </textarea>
  );
};

export const FormDropdown = ({
  options: { attribute, input, datalist },
  setValues,
  values,
}) => {

  return (
    <div className="form-control-container">
      <select 
         id={input.id} 
         value={values[input.name]} 
         name={input.name}
         defaultValue={values[input.name]} 
         onChange={e => setValues({ ...values, [input.name]: e.target.value})} >
       { datalist.schema.types.map(( type, index) => <option key={index} value={type} >{ type }</option> ) }
      </select>
    </div>
  );
};

export const FileUpload = ({
  options: { label, input },
  setValues,
  values,
}) => {
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    setValues({
      ...values,
      fileLoaded: true,
      [input.name]: e.target.files[0],
      [input.name + "Filename"]: e.target.files[0].name,
    });
  };

  return (
    <div className="form-upload-container">
      <p>{label.labelText}</p>
      <div className="toggle-upload-form">
        <InfoB
          icon={toggle ? "fas fa-minus" : "fas fa-plus"}
          click={() => setToggle(!toggle)}
        />
        {toggle && (
          <input
            className={input.className}
            type={input.type}
            id={input.id}
            name={input.name}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export const SingleFileUpload = ({
  options: { label, input },
  setValues,
  values,
}) => {
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    setValues({
      ...values,
      fileLoaded: true,
      [input.name]: e.target.files[0],
      [input.name + "Filename"]: e.target.files[0].name,
    });
  };

  return (
    <div className="form-upload-container">
      <p>{label.labelText}</p>
      <div className="toggle-upload-form">
        <input
          className={input.className}
          type={input.type}
          id={input.id}
          name={input.name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export const numberSelector = () => {
  return(
    <input type="number" value=""  />
  )
}

export const FormButton = ({ status, label, className, disable }) => (
  <button className={className} type="submit"  disabled={disable}>{status ? <i className="fas fa-spinner fa-spin"></i> : label}</button>
);
