import { FormInput } from "./elements";
import { FormTextArea } from "./elements";
import { FormSelect } from "./elements";
import { FormDropdown } from "./elements";

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

const Form = ({ formData: { action, method, fields } }) => {

  const formFieldTypes = ( type, formData ) => {
    console.log('Form Inputs  -----', type, formData)
    switch (type) {
      case "input":
        return <FormInput options={formData} />;

      case "textarea":
        return <FormTextArea options={formData} />;

      case "select":
        return <FormSelect options={formData} />;

      case "dropdown":
        return <FormDropdown options={formData} />;

    default:
        return <>Empty</>
    }
  };

  const formFieldTypesTest = (type, attributes) => {
    console.log('Form Field Attr', attributes)
    switch (type) {
      case "input":
        return  <FormInput options={attributes} />;

    default:
        return ( <>Empty</> )
    }
    
  }

  const mapFields = (fields) => fields.map(({type, attributes }) => formFieldTypesTest( type, attributes ) ); 

  return (
  <form action={action} method={method}>
       {  mapFields(fields) }
  </form>
  )
};

export default Form;
