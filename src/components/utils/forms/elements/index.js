const Option = ({ value, text, selected}) => {
    return (
      <option value={value} selected={selected}>{text}</option>
    )
  }

const mapOptions = (options) => options.map(({value, text, selected }, index) => <Option key={index} value={value} text={text} selected={selected} />)

export const FormInput = ({
    options: {
        label: { show, labelText, forId },
        input: { type, id, className, name, value, onChange, placeholder },
        aria: {}
    }
}) => {
    console.log("Form Input", show, labelText, forId)
    return(
        <>
            {  show && <label for={forId}>{labelText}</label> }
            <input type={type} id={id} className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </>
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