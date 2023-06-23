import React from 'react'

export const FormWrapper: React.FC = (props) => {
  return (
    <div className="asset-form-container">
      <div className="asset-form">
          {props.children}
      </div>
    </div>
  );
};
