export const FormWrapper = (props) => {
  return (
    <div className="asset-form-container">
      <div className="asset-form">
          {props.children}
      </div>
    </div>
  );
};
