import Form from '../../forms/index';


const TwoPanelImageForm = ({ options: { standard, title, description, image, formData  } }) => {

    return(
        <div className={`util-two-panel ${ standard && 'util-two-panel-reverse' }`}>
            <div className='two-panel-text'>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="form-container">
                  <Form formData={formData} />
                </div>
            </div>
            <div className='two-panel-image'>
                <img src={image} width="100%" height="auto" />
            </div>
        </div>
    )

}

export default TwoPanelImageForm;