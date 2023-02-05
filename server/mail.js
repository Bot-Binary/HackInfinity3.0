const nodemailer = require('nodemailer');
 


let mailDetails = {
    from: 'blogitttt@gmail.com',
    to: '',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};


const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port:'587',
    auth: {
        user: 'blogitttt@gmail.com',
        pass: 'wsphafogqrmolnvi'
    }
});
 
const approved_email = ((category,amount,name,p_mail)=>{
    mailDetails.to = p_mail;
    mailDetails.subject = "Payment By Your Child";
    mailDetails.text  =`ALERT! \n${name} has made the payment of ${amount} Rs at the store ${category}.The payment was made using the HackInfinity website.\nThanks 
    Regards,\n
    HackInfinity`
})

const approved_email_child = ((category,amount,junior_id,name)=>{
    mailDetails.to = junior_id;
    mailDetails.subject = `Hey ${name}`;
    mailDetails.text  =`You have made a payment of ${amount} at ${category}.\n By Hackinfinity`
})


const declined_email = ((category,amount,name,p_mail)=>{
    mailDetails.to = p_mail;
    mailDetails.subject = `Unappropriate Payment By ${name}`;
    mailDetails.text  =`ALERT!,\n
            ${name} is trying to make payement of ${amount} at the ${category}. which is not in your preffered List.`
})

 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});