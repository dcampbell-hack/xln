import FormatLayout from "../../../index";


export const CreateAsset = ({ options: { form }, setActionType }) => {
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