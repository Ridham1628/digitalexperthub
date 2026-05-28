import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, service, message } = req.body

  // Basic validation
  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Digital Expert Hub Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'info@digitalexperthub.com',
      replyTo: `"${name}" <${email}>`,
      subject: `🔥 New Lead: ${service} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0ede4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:32px auto;">
            <!-- Header -->
            <tr>
              <td style="background:#0b0f0c;padding:28px 32px;border-radius:12px 12px 0 0;">
                <h1 style="margin:0;color:#c8f250;font-size:20px;font-weight:800;letter-spacing:-.5px;">
                  New Lead — Digital Expert Hub
                </h1>
                <p style="margin:6px 0 0;color:#a3ad9d;font-size:13px;">Submitted via the website contact form</p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="background:#ffffff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0dbd0;border-top:none;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:700;color:#3a463f;font-size:13px;width:110px;text-transform:uppercase;letter-spacing:.06em;">Name</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#0b0f0c;font-size:15px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:700;color:#3a463f;font-size:13px;text-transform:uppercase;letter-spacing:.06em;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;"><a href="mailto:${email}" style="color:#a7d92c;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:700;color:#3a463f;font-size:13px;text-transform:uppercase;letter-spacing:.06em;">Phone</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;"><a href="tel:${phone}" style="color:#a7d92c;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:${message ? '1px solid #eee' : 'none'};font-weight:700;color:#3a463f;font-size:13px;text-transform:uppercase;letter-spacing:.06em;">Service</td>
                    <td style="padding:10px 0;border-bottom:${message ? '1px solid #eee' : 'none'};font-size:15px;">
                      <span style="background:#c8f250;color:#0b0f0c;padding:3px 10px;border-radius:100px;font-weight:700;font-size:13px;">${service}</span>
                    </td>
                  </tr>
                  ${message ? `
                  <tr>
                    <td style="padding:10px 0;font-weight:700;color:#3a463f;font-size:13px;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Message</td>
                    <td style="padding:10px 0;color:#0b0f0c;font-size:15px;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
                  </tr>` : ''}
                </table>
                <div style="margin-top:24px;padding:16px;background:#f3f0e8;border-radius:8px;font-size:12px;color:#565e50;">
                  Reply directly to this email to respond to <strong>${name}</strong>.
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('SMTP error:', err.message)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
