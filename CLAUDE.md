# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite single-page application that generates Meta Business Portfolio recovery letters. The application provides a form interface for collecting business information, personal details, and supporting documentation, then renders a formal letter that can be previewed and printed.

## Development Commands

```bash
# Start development server with hot module reload
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Component Structure

The application uses a single-component architecture in `src/App.jsx`:

- **MetaRecoveryForm**: Main component containing form state, file uploads, and print functionality
- **LetterPreview**: Sub-component that renders the formatted recovery letter with business letterhead styling

### State Management

All state is managed locally using React hooks in the `MetaRecoveryForm` component:

- `formData`: Object containing all text inputs (business info, personal info, portfolio details)
- `logo`, `signature`, `driversLicense`: File upload state stored as base64 data URLs
- `showPreview`: Boolean controlling preview visibility

### File Upload Pattern

Files are converted to base64 data URLs using FileReader API in the `handleFileUpload` function. This allows images to be embedded directly in the print output without external dependencies.

### Print Functionality

The application uses CSS print media queries and Tailwind's `print:` utility classes to create two separate views:

- **Screen view**: Interactive form with preview toggle (hidden via `print:hidden`)
- **Print view**: Clean letter layout with letterhead formatting (shown via `hidden print:block`)

The print layout uses `@page` rules for 0.5in margins and ensures color accuracy with `print-color-adjust: exact`.

## Technology Stack

- **React 19.1.1**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS 4.x**: Utility-first styling
- **lucide-react**: Icon library (Upload, Printer, FileText icons)
- **ESLint**: Code linting with React-specific rules

## Styling Approach

The application uses Tailwind CSS with a focus on:

- Responsive grid layouts (`grid-cols-1 md:grid-cols-2`)
- Print-specific utilities (`print:hidden`, `hidden print:block`)
- Blue accent color scheme for interactive elements
- Shadow and rounded corners for card-based UI

## Key Implementation Details

### Dynamic Letter Content

The `LetterPreview` component accepts `formData` props and uses inline replacements with fallback placeholder text (e.g., `{formData.fullName || 'Full Name'}`). This allows the letter to render with or without complete form data.

### Print Styling

The `<style>` tag in JSX defines critical print rules that Tailwind cannot express:
- `@page` margin configuration
- `print-color-adjust: exact` for reliable color printing

### Form Validation

Currently no client-side validation is enforced. All fields are marked with asterisks (*) as required, but users can preview/print without completing all fields. Field values show placeholders in the letter preview when empty.
