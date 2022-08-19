import { LinkL, DarkL } from '../utils/buttons/links';
import FormatLayout from '../utils/layout';

const TokenAllocation = ({ tokenAllocation: { header, type, standard, options, body }}) => {

const mapLinks = () => icons.map((icon, index) => <LinkL key={index} show={false} icon={icon} /> )

    return (
        <div className="xln-ico-sale panel-padding">
            <div className="xln-ico-sale-header">
                <h1>{header}</h1>
            </div>
            <div className="xln-ico-sale-diagrams">
              <FormatLayout type={type} options={options} />
            </div>
            <div className="xln-ico-sale-form">
                <p>
                    {body}
                </p>
            </div>
          
        </div>
    )
}

export default TokenAllocation;