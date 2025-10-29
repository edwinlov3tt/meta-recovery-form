import nodemailer from 'nodemailer';

/**
 * Vercel Serverless Function for sending emails via SMTP
 *
 * POST /api/send-email
 * Body: {
 *   to: string,
 *   subject: string,
 *   html: string,
 *   formData: object (optional)
 * }
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get environment variables
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_FROM_EMAIL,
    SMTP_FROM_NAME,
    SMTP_SECURE,
  } = process.env;

  // Validate environment variables
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL) {
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'SMTP credentials not configured',
    });
  }

  try {
    const { to, subject, html, formData } = req.body;

    // Validate request body
    if (!to || !subject || !html) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'to, subject, and html are required',
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '587'),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail({
      from: `"${SMTP_FROM_NAME}" <${SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Email send error:', error);

    return res.status(500).json({
      error: 'Failed to send email',
      message: error.message,
    });
  }
}
