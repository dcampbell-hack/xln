const FeaturedContent = ({ header, content, userInterface }) => {
    return (
        <div className="util-featured-content">
            <h2>{header}</h2> 
            <p>{content}</p>
            <div>
             { userInterface }
            </div>
        </div>
    )
}

export default FeaturedContent;