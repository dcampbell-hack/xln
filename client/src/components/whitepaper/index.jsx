import FormatLayout from "../utils/layout";

const Whitepaper = ({ whitepaper: { header, image, description, options }}) => {
    return (
        <div className="whitepaper-container">
            <h1>{header}</h1>
            <div className="whitepaper-cover">
                <div className="wp-image">
                    <img src={image} width="100%" height="auto" />
                </div>
                <div className="wp-desc">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <FormatLayout type="table-contents" options={options} />
        </div>
    )
}

export default Whitepaper;