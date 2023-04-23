import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import nodemailer from 'nodemailer'
import Env from '@ioc:Adonis/Core/Env'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: Env.get('EMAIL_USERNAME'),
        pass: Env.get('EMAIL_PASSWORD')
    }
})

export async function sendEmail({ request, response }: HttpContextContract) {
    const { first_name, last_name, email, jobID, quote, comment } = request.body()


    const mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: `${first_name} ${last_name} has sent you an offer for the job`,
        html:
            `<h2> You have received an offer for the job </h2>\n\n
        ${first_name} ${last_name} has sent you an offer for the job ${jobID}: $${quote}\n
        With the following comments: \n
        ${comment}        
        `
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log(mailOptions);
        response.status(200).send('Email sent')
    } catch (error) {
        response.status(500).send('Error sending email ' + error)
    }
}

