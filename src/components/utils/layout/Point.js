const Point = ({ title, description }) => {
    return(
        <div className="util-point">
            <div className="point-title">
                <h4>{title}</h4>
            </div>
            <div className="point-description">
                 {description }
            </div>
        </div>
    )
}

export default Point