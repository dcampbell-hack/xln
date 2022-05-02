const Content = ({ title, list, details, lists }) => {

const mapDetails = () => details.map((detail, index) => <p key={index}>{detail}</p>);
const mapLists = () => lists.map(({ label, content }, index) => <div className="item" key={index}>
    <h3>{label}</h3>
    <p>{content}</p>
</div>);


    return(
        <div className="content">
             <h2>{title}</h2>
            <div className="content-details">
                { mapDetails() }
            </div>

           { list && <div className="content-lists">
                { mapLists() }
            </div>
            }

        </div>
    )
}

export default Content;