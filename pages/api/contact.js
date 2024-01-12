import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
const nl2br = require('react-nl2br');



const mailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_CON_USER,
      pass: process.env.MAIL_CON_PASS,
    },
  });

export default async (req, res) => {
    //console.log(req.body)
    const {name, email, number, subject, text} = req.body;

   

    const txt = nl2br(text)
    //console.log(txt);

    const data = {
        to: 'info@lnbsydneyescorts.com.au',
        from: 'contact@lnbsydneyescorts.com.au',
        subject: `Late Night Babes Contact Form - From: ${name} | ${subject}`,
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> <br />
            <b><u>Message:</u></b><br/> ${txt} 
        ` 
    };

    try {
        const response = await mailer.sendMail(data);
        console.log(response)
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}
