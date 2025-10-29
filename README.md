# Meta Business Portfolio Recovery Form

A modern, professional web application for generating Meta Business Portfolio recovery letters with a soft-UI design system.

## Features

- ✨ **Soft-UI Design** - Clean, neumorphism-lite interface with Facebook blue accents
- 📝 **Dynamic Form** - Collapsible sections for organized data entry
- 👁️ **Live Preview** - Real-time letter preview with zoom controls (50%-150%)
- 📄 **PDF Export** - Download professionally formatted recovery letters
- 📧 **Email Integration** - SMTP email service for confirmations (ready to configure)
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🎨 **Custom Design System** - CSS variables for consistent theming

## Tech Stack

- **React 19.1.1** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.x** - Utility-first styling
- **html2pdf.js** - PDF generation
- **Nodemailer** - Email sending (serverless)
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/edwinlov3tt/meta-recovery-form.git
cd meta-recovery-form
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

## Email Configuration

The application includes SMTP email functionality for sending confirmations. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

### Quick Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your SMTP credentials to `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@yourdomain.com
```

3. For Vercel deployment, add environment variables in the Vercel dashboard

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variables (SMTP credentials)
5. Deploy

The application will be deployed with serverless functions automatically configured.

## Project Structure

```
meta-recovery-form/
├── api/                    # Vercel serverless functions
│   └── send-email.js      # Email sending endpoint
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── CollapsibleSection.jsx
│   │   ├── FormField.jsx
│   │   ├── FileUpload.jsx
│   │   ├── PreviewPane.jsx
│   │   └── LetterPreview.jsx
│   ├── services/          # Business logic
│   │   └── emailService.js
│   ├── styles/            # CSS variables and theme
│   │   └── variables.css
│   ├── App.jsx           # Main application
│   ├── main.jsx          # Application entry
│   └── index.css         # Global styles + primitives
├── .env.example          # Environment variables template
└── EMAIL_SETUP.md        # Email configuration guide
```

## Usage

1. **Fill out the form** - Enter business information, personal details, and portfolio information
2. **Upload documents** - Add business logo, signature, and driver's license
3. **Preview** - Review the formatted letter in real-time with zoom controls
4. **Download PDF** - Generate and download the recovery letter
5. **Submit** - (Coming soon) Send via email with confirmation

## Design System

The application uses a custom soft-UI design system with:

- **Colors**: Facebook blue (#1877F2) accent, cool-gray canvas (#F6F7F9)
- **Spacing**: 8px grid system
- **Radii**: 8px-16px rounded corners
- **Shadows**: Subtle, layered shadows for depth
- **Typography**: System fonts (Inter/SF Pro)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
