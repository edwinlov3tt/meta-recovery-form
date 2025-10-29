import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testEmail() {
  try {
    console.log('🔧 Configuring SMTP transporter...');
    console.log(`Host: ${process.env.SMTP_HOST}`);
    console.log(`Port: ${process.env.SMTP_PORT}`);
    console.log(`User: ${process.env.SMTP_USER}`);
    console.log(`Secure: ${process.env.SMTP_SECURE}`);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log('\n✅ Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');

    // Test email content
    const testFormData = {
      businessName: 'Test Business LLC',
      fullName: 'Edwin Lovett',
      title: 'CEO',
      portfolioName: 'Test Portfolio',
      portfolioID: '1234567890',
      emailAssociated: 'edwin@edwinlovett.com',
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1877F2;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background-color: #f6f7f9;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            color: #111827;
          }
          .field-value {
            color: #6B7280;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            color: #9CA3AF;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🧪 Test Email - Meta Business Portfolio Recovery</h1>
          </div>
          <div class="content">
            <p>This is a test email to verify SMTP configuration is working correctly.</p>

            <h2>Test Submission Details:</h2>

            <div class="field">
              <span class="field-label">Business Name:</span>
              <span class="field-value">${testFormData.businessName}</span>
            </div>

            <div class="field">
              <span class="field-label">Contact Person:</span>
              <span class="field-value">${testFormData.fullName}</span>
            </div>

            <div class="field">
              <span class="field-label">Title:</span>
              <span class="field-value">${testFormData.title}</span>
            </div>

            <div class="field">
              <span class="field-label">Portfolio Name:</span>
              <span class="field-value">${testFormData.portfolioName}</span>
            </div>

            <div class="field">
              <span class="field-label">Portfolio ID:</span>
              <span class="field-value">${testFormData.portfolioID}</span>
            </div>

            <div class="field">
              <span class="field-label">Email:</span>
              <span class="field-value">${testFormData.emailAssociated}</span>
            </div>

            <p style="margin-top: 30px; padding: 15px; background-color: #D1FAE5; border-left: 4px solid #10B981; border-radius: 4px;">
              <strong>✅ Success!</strong><br>
              If you're reading this, your SMTP email configuration is working correctly.
            </p>
          </div>
          <div class="footer">
            <p>This is a test message sent from Meta Recovery Form</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log('📧 Sending test email to edwin@edwinlovett.com...\n');

    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: 'edwin@edwinlovett.com',
      subject: '🧪 Test Email - Meta Business Portfolio Recovery System',
      html: htmlContent,
    });

    console.log('✅ Email sent successfully!');
    console.log(`📬 Message ID: ${info.messageId}`);
    console.log(`📨 From: ${process.env.SMTP_FROM_EMAIL}`);
    console.log(`📫 To: edwin@edwinlovett.com`);
    console.log('\n✨ Check your inbox at edwin@edwinlovett.com\n');

  } catch (error) {
    console.error('❌ Error sending test email:');
    console.error(error.message);
    if (error.code) {
      console.error(`Error code: ${error.code}`);
    }
    process.exit(1);
  }
}

// Run the test
testEmail();
