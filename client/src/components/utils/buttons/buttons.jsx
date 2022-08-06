export const Button = ({ className, icon, click = null, text }) => {
    return (
        <button className={className} onClick={click}>{text} <i className={icon}></i></button>
    )
}

export const PrimaryB = ({ text, className, icon, click }) => <Button className={`btn btn-primary ${className}`} icon={icon} click={click} text={text} />

export const LightB = ({ text, className, icon, click }) => <Button className={`btn btn-secondary ${className}`} icon={icon} click={click} text={text} />

export const SuccessB = ({ text, className, icon, click }) => <Button className={`btn btn-success ${className}`} icon={icon} click={click} text={text} />

export const DangerB = ({ text, className, icon, click }) => <Button className={`btn btn-danger ${className}`} icon={icon} click={click} text={text} />

export const WarningB = ({ text, className, icon, click }) => <Button className={`btn btn-warning ${className}`} icon={icon} click={click} text={text} />

export const InfoB = ({ text, className, icon, click }) => <Button className={`btn btn-info ${className}`} icon={icon} click={click} text={text} />

export const DarkB = ({ text, className, icon, click }) => <Button className={`btn btn-dark ${className}`} icon={icon} click={click} text={text} />

export const LinkB = ({ text, className, icon, click }) => <Button className={`btn btn-link ${className}`} icon={icon}  click={click} text={text} />

export const TableOfContentsB = ({ text, className, icon, click }) => <Button className={`btn table-item ${className}`} icon={icon} click={click} text={text} />
