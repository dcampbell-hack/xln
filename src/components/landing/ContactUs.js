import { LinkL } from '../utils/buttons/links';

const ContactUs = ({ contact: { header, content, contacts } }) => {
    const mapContacts = () => contacts.map((contact, index) => <LinkL key={index} text={contact[0]} url={contact[1]} icon={contact[2]} show={true}  />)
    return(
        <div className="xln-contact-us panel-padding">
            <div className="contact-us">
                <h1>{header}</h1>
                <p>{content}</p>
            </div>
           <div className="contact-us-btn">
               {mapContacts()}
           </div>
        </div>
    )
}

export default ContactUs;