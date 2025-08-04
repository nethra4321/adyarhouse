const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendContactEmail = async (req, res) => {
  const { name, email, phone, subject, message,checkin, checkout  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,   
      pass: process.env.EMAIL_PASS,    
    },
  });

  const textContent = `
      New Enquiry
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Check-in Date: ${checkin}
      Check-out Date: ${checkout}
      Subject: ${subject}
      Message:
      ${message}
      `;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 30px;">
    <h2 style="color: #0052CC;">New Contact Form Submission</h2>
    <hr />
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Check-in:</strong> ${checkin}</p>
    <p><strong>Check-out:</strong> ${checkout}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br />${message.replace(/\n/g, '<br />')}</p>
    <hr />
    <footer style="font-size: 12px; color: #999;">This message was sent from your website's contact form.</footer>
  </div>
`;
console.log("Sending mail with reply-to:", email);

  const mailOptions = {
    from: `"Adyar House Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email, 
    subject: `New Enquiry: ${subject}`,
    text: textContent,
    html: htmlContent,
  };


  // Send email 
try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' }); 
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Email failed to send' }); 
  }
};
