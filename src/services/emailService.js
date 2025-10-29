/**
 * Email Service
 * Client-side utility for sending emails via the Vercel serverless function
 */

/**
 * Generate HTML email template for recovery form confirmation
 * @param {Object} formData - Form data from the recovery form
 * @returns {string} HTML email content
 */
export function generateConfirmationEmail(formData) {
  return `
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
          <h1>Meta Business Portfolio Recovery Request Submitted</h1>
        </div>
        <div class="content">
          <p>Thank you for submitting your Meta Business Portfolio recovery request. We have received your information and will process it shortly.</p>

          <h2>Submission Details:</h2>

          <div class="field">
            <span class="field-label">Business Name:</span>
            <span class="field-value">${formData.businessName || 'N/A'}</span>
          </div>

          <div class="field">
            <span class="field-label">Contact Person:</span>
            <span class="field-value">${formData.fullName || 'N/A'}</span>
          </div>

          <div class="field">
            <span class="field-label">Title:</span>
            <span class="field-value">${formData.title || 'N/A'}</span>
          </div>

          <div class="field">
            <span class="field-label">Portfolio Name:</span>
            <span class="field-value">${formData.portfolioName || 'N/A'}</span>
          </div>

          <div class="field">
            <span class="field-label">Portfolio ID:</span>
            <span class="field-value">${formData.portfolioID || 'N/A'}</span>
          </div>

          <div class="field">
            <span class="field-label">Email:</span>
            <span class="field-value">${formData.emailAssociated || 'N/A'}</span>
          </div>

          <p style="margin-top: 30px;">
            <strong>Next Steps:</strong><br>
            You will receive a follow-up email with your generated recovery letter and further instructions within 24-48 hours.
          </p>
        </div>
        <div class="footer">
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Send confirmation email
 * @param {string} to - Recipient email address
 * @param {Object} formData - Form data
 * @returns {Promise<Object>} Response from the API
 */
export async function sendConfirmationEmail(to, formData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject: 'Meta Business Portfolio Recovery Request - Confirmation',
        html: generateConfirmationEmail(formData),
        formData,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return data;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}

/**
 * Send admin notification email
 * @param {Object} formData - Form data
 * @returns {Promise<Object>} Response from the API
 */
export async function sendAdminNotification(formData) {
  try {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

    if (!adminEmail) {
      console.warn('Admin email not configured');
      return null;
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: adminEmail,
        subject: `New Recovery Request: ${formData.businessName}`,
        html: generateConfirmationEmail(formData),
        formData,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send admin notification');
    }

    return data;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    throw error;
  }
}
