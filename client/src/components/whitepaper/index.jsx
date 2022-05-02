import FormatLayout from "../utils/layout";

const Whitepaper = ({ whitepaper: { header, options }}) => {
    return (
        <div>
            <h1>{header}</h1>
            <FormatLayout type="table-contents" options={options} />
        </div>
    )
}

export default Whitepaper;