import FormatLayout from "../../layout/index.js";

const CompleteProfile = ({ users, form, images, setActionType }) => {
    return (
      <div className="wallet-content">
        <div
          className={
            users.media ? "permission-label-container" : "adjust-setting"
          }
        >
          <div className="permission-label">
            <img
              src={
                users.media
                  ? `/uploads/${users.id}/avatar/${users.avatar}`
                  : images.noProfile.url
              }
              width={images.noProfile.width}
              height={images.noProfile.height}
            />
          </div>
        </div>
  
        <FormatLayout
          type={form.type}
          options={form}
          setActionType={setActionType}
        />
      </div>
    );
  };