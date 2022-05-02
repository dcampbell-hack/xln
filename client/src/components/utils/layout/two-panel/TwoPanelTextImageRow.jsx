import TruncateText from "../../text/truncate";

const TwoPanelTextImageRow = ({ options: { id, standard, title, description, image } }) => {

    return(
        <div className={`util-two-panel-row ${ standard && 'util-two-panel-reverse' }`}>
            <h1>{title}</h1>
            <div className='two-panel-image'>
                <img src={image} width="100%" height="auto" />
            </div>
            <div className='two-panel-text'>
                <TruncateText text={description} charLimit={400} />
            </div>
        </div>
    )

}

export default TwoPanelTextImageRow;