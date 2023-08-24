
const nodeMailer = require('nodemailer')


const adminEmail = 'Thay thế chuỗi string này thành địa chỉ admin email của bạn.'
const adminPassword = 'Thay thế chuỗi string này thành mật khẩu admin email của bạn.'

const mailHost = 'smtp.gmail.com'


const sendMail = (to, subject, htmlContent) => {
 
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail, 
    to: to,
    subject: subject, 
    html: htmlContent 
  }

  
  return transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}
