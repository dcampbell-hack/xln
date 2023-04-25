import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    console.log('SEND EMAIL', process.env.SMTP_HOST, process.env.SMTP_PORT, )
    // Generate test SMTP service account from ethereal.email 
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT, 
        auth: {
            user:  process.env.SMTP_EMAIL,
            pass:  process.env.SMTP_PASSWORD
        }
    });

    // send mail with defined transport object 

const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: '<span></span>'
}

const info = await transporter.sendMail(message);

console.log(`Message sent: %$`, info.messageId)

}

export default sendEmail;