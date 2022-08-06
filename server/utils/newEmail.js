const nodemailer = require('nodemailer');

const Email = require('email-templates');
const email = new Email({
 message: {
   from: 'hi@example.com'
 },
 send: true,
 transport: {
   host: process.env.SMTP_HOST ,
   port: process.env.SMTP_PORT,
   ssl: false,
   tls: true,
   auth: {
     user:  process.env.SMTP_USER, // your Mailtrap username
     pass:  process.env.SMTP_PASS  //your Mailtrap password
   }
 }
});



const newEmail = async (options) => {


    console.log('New Email ---', options )
       
    // Generate test SMTP service account from ethereal.email 
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT, 
        auth: {
            user:  process.env.SMTP_USER,
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

module.exports = newEmail;