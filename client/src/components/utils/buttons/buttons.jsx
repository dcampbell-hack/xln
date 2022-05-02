export const Button = ({ className, click = '', text }) => {
    return (
        <button className={className} onClick={click}>{text}</button>
    )
}

export const PrimaryB = ({ text, click }) => <Button className="btn btn-primary" click={click} text={text} />

export const LightB = ({ text, click }) => <Button className="btn btn-secondary" click={click} text={text} />

export const SuccessB = ({ text, click }) => <Button className="btn btn-success" click={click} text={text} />

export const DangerB = ({ text, click }) => <Button className="btn btn-danger" click={click} text={text} />

export const WarningB = ({ text, click }) => <Button className="btn btn-warning" click={click} text={text} />

export const InfoB = ({ text, click }) => <Button className="btn btn-info" click={click} text={text} />

export const DarkB = ({ text, click }) => <Button className="btn btn-dark" click={click} text={text} />

export const LinkB = ({ text, click }) => <Button className="btn btn-link"click={click} text={text} />

export const TableOfContentsB = ({ text, click }) => <Button className="btn table-item"click={click} text={text} />
