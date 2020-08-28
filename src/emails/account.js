const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michaelameckes@gmail.com',
        subject: 'Thanks for joining in!',
        text: `${name}, welcome to the app! Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michaelameckes@gmail.com',
        subject: `${name}, We're Sorry to See You Go :(`,
        text: 'Sorry, let us know if we can do anything to keep you around!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}