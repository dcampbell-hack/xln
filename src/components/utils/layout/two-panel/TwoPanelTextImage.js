const TwoPanelTextImage = ({ options: { id, standard, title, description, image } }) => {

    return(
        <div className={`util-two-panel ${ standard && 'util-two-panel-reverse' }`}>
            <div className='two-panel-text'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className='two-panel-image'>
                <img src={image} width="100%" height="auto" />
            </div>
        </div>
    )

}

export default TwoPanelTextImage;