import React from 'react' 

const Content = ({ title, image, content }) => {

const mapDetails = () => content.details.map((detail, index) => <p key={index}>{detail}</p>);
const mapLists = () => content.lists.map(({ label, isArray, content }, index) => {
//    console.log('Whitepaper', typeof content, isArray, label )
return( <div className="item" key={index}>
    <h3>{label}</h3>
    <p>{ isArray == false ? content : mapContents( content) }</p>
</div>
) })

const mapContents = (contents) =>  contents.map(({ image, type, content, }, index) => <div key={index} className={ type == "team" ? "team" : "tools" }>
        <img src={image} width={ type == "team" ? "250px" : "100%"} height={ type == "team" ? "250px" : "auto"}  /> 
        <p>{content}</p>
    </div> );



    return(
        <div className="content">
            {image.show && <div><img src={image.url} width="100%" height="auto" /></div>}
             <h2>{title}</h2>
            <div className="content-details">
                { mapDetails() }
            </div>

           { content.list && <div className="content-lists">
                { mapLists() }
            </div>
            }

        </div>
    )
}

export default Content;