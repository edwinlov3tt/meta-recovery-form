# Email Configuration Guide

This application uses SMTP to send confirmation emails for Meta Business Portfolio recovery requests.

## Setup Instructions

### 1. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your SMTP details:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@yourdomain.com
SMTP_FROM_NAME=Meta Recovery Form
SMTP_SECURE=false
ADMIN_EMAIL=admin@yourdomain.com
```

### 2. SMTP Provider Options

#### Gmail (Recommended for Testing)

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
3. Use these settings:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_SECURE=false
   ```

#### SendGrid (Recommended for Production)

1. Sign up at https://sendgrid.com
2. Create an API Key in Settings > API Keys
3. Use these settings:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   SMTP_SECURE=false
   ```

#### Outlook/Office 365

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_SECURE=false
```

#### Amazon SES

```
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_SECURE=false
```

### 3. Vercel Deployment

When deploying to Vercel, add your environment variables in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM_EMAIL`
   - `SMTP_FROM_NAME`
   - `SMTP_SECURE`
   - `ADMIN_EMAIL`

4. Redeploy your application

### 4. Usage in Code

The email service is ready to use. To send a confirmation email:

```javascript
import { sendConfirmationEmail } from './services/emailService';

// Send confirmation to user
await sendConfirmationEmail(
  'user@example.com',
  formData
);
```

### 5. API Endpoint

The serverless function is available at:
```
POST /api/send-email
```

Request body:
```json
{
  "to": "recipient@example.com",
  "subject": "Email subject",
  "html": "<h1>HTML content</h1>",
  "formData": {}
}
```

## Security Notes

- ⚠️ **Never commit `.env` file to version control**
- Use App Passwords instead of your main email password
- For production, use a dedicated SMTP service (SendGrid, Mailgun, etc.)
- Verify sender domain to avoid spam filters
- Consider adding rate limiting to prevent abuse

## Troubleshooting

### "Invalid login" error
- Double-check your username and password
- For Gmail, ensure you're using an App Password, not your regular password
- Check if 2FA is enabled (required for Gmail)

### Emails going to spam
- Verify your sender domain
- Set up SPF, DKIM, and DMARC records
- Use a professional SMTP service

### "Connection timeout" error
- Check your SMTP host and port
- Verify firewall settings
- Try using port 465 with `SMTP_SECURE=true`

## Testing

Test your SMTP configuration locally before deploying:

```bash
npm run dev
```

Then use the "Save & Send" button in the application to trigger a test email.
