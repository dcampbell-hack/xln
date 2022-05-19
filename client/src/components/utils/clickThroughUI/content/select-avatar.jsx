import React, { useState } from 'react';
import { landing } from "../../../../data";
import Avatar from "../../avatar"; 
import Form from "../../forms";
import QRCodeGenerator from '../../qrcode';

const SelectAvatar = () => {

const { team } = landing;

const formData = {
    action: "register",
    method: "post",
    submit: {
        display: 'none',
      label: "Change Avatar",
      className: "btn btn-block btn-info",
    },
    fields: [
      {
        type: "file",
        attributes: {
          label: {
            show: false,
            labelText: "Enter First Name",
            forId: "kyc-first-name",
          },
          input: {
            type: "text",
            id: "kyc-first-name",
            className: "",
            name: "firstname",
            value: {},
            onChange: "",
            placeholder: "First Name *",
          },
          aria: {},
        },
      },

    ],
  };

  const [values, setValues] = useState({});

const renderAvatarOptions = () => team.members.map(({ avatar }, index) => <Avatar key={index} username="xln" avatar={avatar} />)

    return(
        <div className="select-avatar-container">
            <div className="select-avatar-from-wallet">
                { renderAvatarOptions()}
            </div>
            <div className="upload-xln-avatar">
                <div className="upload-xln-avatar-form">
                    <div className="">
                        <img src={`/uploads/xln/avatar/no-photo.jpg`} width="100%" height="auto"  />
                        <Form formData={formData} setValues={setValues} values={values} />
                    </div>
                </div>
                <div className="avatar-permission">
                  <QRCodeGenerator text="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/111345543521549204964270021530169195022188228486824666382521162042179852435457" />
                </div>
            </div>
        </div>
    )
}

export default SelectAvatar;