import React from 'react'
import FormatLayout from "../../../layout/index";


export const CreateAsset: React.FC = ({ options: { form }, setActionType }) => {
    return (
      <div className="create-asset-container">
        <div className="create-asset">
          <FormatLayout
            type={form.type}
            options={form}
            setActionType={setActionType}
          />
        </div>
      </div>
    );
  };