import React from 'react'
import { LinkL } from '../utils/buttons/links';
import { ContactProps } from '../../types/landing';

interface ContactWrap {
    contact: ContactProps
}


const ContactUs: React.FC<ContactWrap> = ({ contact: { header, content, contacts, image } }) => {
    const mapContacts = () => contacts.map((contact, index) => <LinkL key={index} text={contact[0]} url={contact[1]} icon={contact[2]} show={true}  />)
    return(
        <div className="xln-contact-us panel-padding">
            <div className="contact-us">
                <h1>{header}</h1>
                <div className="contact-us-img">
                    <img src={image} width="100%" height="auto" />
                </div>
                <p>{content}</p>
            </div>
           <div className="contact-us-btn">
               {mapContacts()}
           </div>
        </div>
    )
}

export default ContactUs;