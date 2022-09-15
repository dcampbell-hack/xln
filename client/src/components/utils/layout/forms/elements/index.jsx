import{ useEffect, useState } from 'react';


const Option = ({ value, text, selected}) => {
    return (
      <option value={value} selected={selected}>{text}</option>
    )
  }

const mapOptions = (options) => options.map(({value, text, selected }, index) => <Option key={index} value={value} text={text} selected={selected} />)

export const FormInput = ({
    options: {
        label: { error, inverse, show, labelText, forId },
        input: { type, id, className, name, value, placeholder },
        aria: {}
    },
    setValues,
    values
}) => {

    const [ showPassword, setShowPassword ] = useState(false)

    const onchange = e => {
       setValues({ ...values, [e.target.name]: e.target.value });
    }

    return(
        <div className={`form-control-container ${type == 'password' ? 'password_input' : 'normal_input'} ${error && 'form-error'} ${ inverse && 'row-reverse' }`}>
            {  show && <label htmlFor={forId}>{labelText}</label> }
            <div className="form-control">
               <input type={ showPassword ? 'text' : type } id={id} className={className} name={name} placeholder={placeholder}  onChange={e => onchange(e) } />
               {type == 'password' && <div className="form-toggle-password" onClick={() => setShowPassword(!showPassword)}>{ !showPassword ? <h6>Show</h6> : <h6>Hide</h6> }</div> }
            </div>
        </div>
    )
}

export const BuyFormInput = ({
    options: {
        label: { error, inverse, show, labelText, forId },
        input: { type, id, className, name, value, placeholder },
        aria: {}
    },
    setValues,
    values
}) => {
    
    const onchange = e => {
       setValues({ ...values, [e.target.name]: e.target.value });
    }

    return(
        <div className={` ${error ? 'form-error' : ''} ${ inverse ? 'row-reverse' : '' }`}>
            <div className="form-control">
               <input type="number" className="buy-xln-form" name="buyxln" placeholder={0.5}  onChange={e => onchange(e) } />
            </div>
        </div>
    )
}


export const FormSelect = ({
  options: {
     label: { forId, labelText, show },
     select: { id, name, size, multiple, list },
     aria: {}
  }
}) => {
    return(
        <div>
           { show && <label for={forId}>{labelText}</label> }
            <select id={id} name={name} size={size} multiple={multiple}>
               { mapOptions(list) }
            </select>
        </div>
    )
}

export const FormTextArea = ({ 
    options: {
        area: { name, rows, cols, text, placeholder, className }, 
        aria: {}
    }
}) => {
    return(
        <textarea className={className} name={name} rows={rows} cols={cols} placeholder={placeholder}>
           {text}
        </textarea>
    )
}


export const FormDropdown = ({
    options: {
        input: { list, name },
        datalist: {
            id, lists
        }
    }
}) => {
    return(
        
    <div>
        <input list={list} name={name} />
        <datalist id={id}>
           { mapOptions(list) }
        </datalist>

    </div>
    )
}

export const FileUpload = ({ options: { label, input }, setValues, values }) => { 

  const [ file, setFile ] = useState('')
  const [ filename, setFilename ] = useState('Choose File')  

  const onChange = e => {
    setValues({ ...values, fileLoaded: true, [input.name]: e.target.files[0], [input.name + 'Filename']: e.target.files[0].name })
  }

return (
<div className='form-upload-container'>
<p>
{ label.labelText}
</p>
<input className={input.className} type={ input.type} id={input.id} name={input.name} onChange={onChange} />
</div>
)

}


export const FormButton = ({ label, className, disable }) => <input className={className} type="submit" value={label} disabled={disable} />