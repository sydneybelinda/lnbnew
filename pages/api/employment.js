import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
const nl2br = require('react-nl2br');
import Config from "../../config"



//const mailer = nodemailer.createTransport(sgTransport(transporter));



const mailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_EMP_USER,
      pass: process.env.MAIL_EMP_PASS,
    },
  });



export default async (req, res) => {
    //console.log(req.body)
    const {name, email, number, age, dressSize, location, text, files} = req.body;

 
    let images = []

    let im = '';

    files.map((f,i)=>{
        const url = Config.url + f
    images.push(<img src={f} key={i} alt={f} />)

    im += `<a href="${url}">${url}</a><br/>`;


   
})

console.log(images)
   

    const txt = nl2br(text)
    //console.log(txt);

    const data = {
        to: 'info@lnbsydneyescorts.com.au',
        from: 'apply@lnbsydneyescorts.com.au',
        subject: `Late Night Babes Employment Form - From: ${name}`,
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Age:</b> ${age} <br /> 
            <b>Dress Size:</b> ${dressSize} <br /> 
            <b>Location:</b> ${location} <br /> <br />
            <b><u>Message:</u></b><br/> ${text} <br /><br />
            <b><u>Files:</u></b><br/> ${im} <br /><br />
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
