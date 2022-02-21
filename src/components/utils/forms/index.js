import { FormInput,  FormTextArea, FormSelect, FormDropdown, FormButton } from "./elements";

/*
{
action: "",
method: ""
fields: [
    {type: input, options },
    {type: textarea, options },
    {type: select, options },
    {type: dropdown, options }
]
}

 */

const Form = ({ formData: { action, method, fields, submit } }) => {

  const formFieldTypes = ( type, attributes ) => {
    switch (type) {
      case "input":
        return <FormInput options={attributes} />;

      case "textarea":
        return <FormTextArea options={attributes} />;

      case "select":
        return <FormSelect options={attributes} />;

      case "dropdown":
        return <FormDropdown options={attributes} />;

    default:
        return <>Empty</>
    }
  };

  const mapFields = (fields) => fields.map(({type, attributes }) => formFieldTypes( type, attributes ) ); 

  return (
  <form action={action} method={method}>
       {  mapFields(fields) }
       <FormButton className={submit.className} label={submit.label} />
  </form>
  )
};

export default Form;
