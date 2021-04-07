var nodemailer = require('nodemailer');

// send an email

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        username: '',
        pass: ''
    }
});

var mailOptions = {
    from: '',
    to: '',
    subject: 'sending email using node js',
    text: 'that was easy '
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
});