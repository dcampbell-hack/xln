import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormatLayout from '../..'
import { assetTypes, walletProfile, formLinks } from '../../../../data/nav'


const Setting = ({ form, navLinks, users, setActionType }) => {
    useEffect(() => {
      form?.formData.fields?.forEach((field) => {
        if (field.attributes.input.name == "firstname") {
          field.attributes.input.placeholder = users.firstname;
        }
  
        if (field.attributes.input.name == "lastname") {
          field.attributes.input.placeholder = users.lastname;
        }
  
        if (field.attributes.input.name == "username") {
          field.attributes.input.placeholder = users.username;
        }
      });
    }, [users]);
  
    return (
      <div className="wallet-content-setting">
        <div className="wallet-setting-selections">
          { formLinks.map(({ url, text}) =>             <div className="select-wallet-settings selected">
            <Link to={url}>{text}</Link>
          </div>  )
  
  }
        </div>
        <FormatLayout
          type={form.type}
          options={form}
          setActionType={setActionType}
        />
      </div>
    );
  };

  export default Setting;