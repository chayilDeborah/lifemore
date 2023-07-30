import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone } = req.body;

    // Replace these with your actual email account and password
    const senderEmail = 'membership@lifemore.com';
    const senderPassword = 'dirtygamE@1';
    const mailHost="smtp.gmail.com"
    const  mailport=587
    const senderMail="the senders email"

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:mailHost,
      secure:false,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: 'dejibabs2003@gmail.com', // Replace with your email address
      subject: 'New Membership Form Submission',
      html: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
