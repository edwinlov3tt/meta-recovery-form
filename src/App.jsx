import React, { useState } from 'react';
import Header from './components/Header';
import CollapsibleSection from './components/CollapsibleSection';
import FormField from './components/FormField';
import FileUpload from './components/FileUpload';
import PreviewPane from './components/PreviewPane';
import LetterPreview from './components/LetterPreview';

export default function MetaRecoveryForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    businessPhone: '',
    businessEmail: '',
    businessWebsite: '',
    fullName: '',
    facebookProfileURL: '',
    emailAssociated: '',
    title: '',
    company: '',
    portfolioName: '',
    portfolioID: '',
  });

  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [driversLicense, setDriversLicense] = useState(null);
  const [zoom, setZoom] = useState(95);

  // Collapsible section states (all open by default)
  const [sections, setSections] = useState({
    business: true,
    personal: true,
    portfolio: true,
    documents: true,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (name, value) => {
    if (name === 'logo') setLogo(value);
    if (name === 'signature') setSignature(value);
    if (name === 'driversLicense') setDriversLicense(value);
  };

  const toggleSection = (section) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
      setFormData({
        businessName: '',
        businessAddress: '',
        businessPhone: '',
        businessEmail: '',
        businessWebsite: '',
        fullName: '',
        facebookProfileURL: '',
        emailAssociated: '',
        title: '',
        company: '',
        portfolioName: '',
        portfolioID: '',
      });
      setLogo(null);
      setSignature(null);
      setDriversLicense(null);
    }
  };

  const handleSaveAndSend = () => {
    alert('This feature is coming soon! For now, use the Download PDF button in the preview pane.');
  };

  return (
    <>
      <Header onReset={handleReset} onSaveAndSend={handleSaveAndSend} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40fr 60fr',
          gap: 'var(--sp-6)',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'var(--sp-6)',
          minHeight: 'calc(100vh - 80px)',
        }}
        className="print:hidden desktop-layout"
      >
        {/* Left Column - Form */}
        <div
          className="form-column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--sp-4)',
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 120px)',
          }}
        >
          {/* Business Information Section */}
          <CollapsibleSection
            title="Business Information"
            isOpen={sections.business}
            onToggle={() => toggleSection('business')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FormField
                label="Business Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Enter business name"
                required
              />
              <FormField
                label="Business Phone"
                name="businessPhone"
                type="tel"
                value={formData.businessPhone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <FormField
              label="Business Address"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleInputChange}
              placeholder="123 Main Street, City, State 12345"
              required
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FormField
                label="Business Email"
                name="businessEmail"
                type="email"
                value={formData.businessEmail}
                onChange={handleInputChange}
                placeholder="contact@business.com"
                required
              />
              <FormField
                label="Business Website"
                name="businessWebsite"
                type="url"
                value={formData.businessWebsite}
                onChange={handleInputChange}
                placeholder="www.business.com"
              />
            </div>
            <FileUpload
              label="Business Logo"
              name="logo"
              value={logo}
              onChange={handleFileChange}
              helperText="Upload your business logo for the letterhead"
            />
          </CollapsibleSection>

          {/* Personal Information Section */}
          <CollapsibleSection
            title="Personal Information"
            isOpen={sections.personal}
            onToggle={() => toggleSection('personal')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FormField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Smith"
                required
              />
              <FormField
                label="Your Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="CEO, Owner, Manager, etc."
                required
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FormField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company LLC"
                required
              />
              <FormField
                label="Personal Facebook Profile URL"
                name="facebookProfileURL"
                type="url"
                value={formData.facebookProfileURL}
                onChange={handleInputChange}
                placeholder="https://facebook.com/yourprofile"
                required
              />
            </div>
            <FormField
              label="Email Associated with Facebook Profile"
              name="emailAssociated"
              type="email"
              value={formData.emailAssociated}
              onChange={handleInputChange}
              placeholder="personal@email.com"
              required
            />
          </CollapsibleSection>

          {/* Meta Business Portfolio Details Section */}
          <CollapsibleSection
            title="Meta Business Portfolio Details"
            isOpen={sections.portfolio}
            onToggle={() => toggleSection('portfolio')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FormField
                label="Portfolio Name"
                name="portfolioName"
                value={formData.portfolioName}
                onChange={handleInputChange}
                placeholder="Business Portfolio Name"
                required
              />
              <FormField
                label="Portfolio ID"
                name="portfolioID"
                value={formData.portfolioID}
                onChange={handleInputChange}
                placeholder="1234567890"
                required
              />
            </div>
          </CollapsibleSection>

          {/* Supporting Documents Section */}
          <CollapsibleSection
            title="Supporting Documents"
            isOpen={sections.documents}
            onToggle={() => toggleSection('documents')}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <FileUpload
                label="Signature"
                name="signature"
                value={signature}
                onChange={handleFileChange}
                required
                helperText="Upload an image of your signature"
              />
              <FileUpload
                label="Driver's License"
                name="driversLicense"
                value={driversLicense}
                onChange={handleFileChange}
                required
                helperText="Upload a copy of your driver's license"
              />
            </div>
          </CollapsibleSection>
        </div>

        {/* Right Column - Preview Pane */}
        <div className="card" style={{ height: 'calc(100vh - 120px)', position: 'sticky', top: 'var(--sp-6)', padding: 0, overflow: 'hidden' }}>
          <PreviewPane zoom={zoom} onZoomChange={setZoom}>
            <LetterPreview
              formData={formData}
              logo={logo}
              signature={signature}
              driversLicense={driversLicense}
            />
          </PreviewPane>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Below 1024px */}
      <style>{`
        /* Hide scrollbar on form column */
        .form-column {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .form-column::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        /* Ensure preview pane doesn't affect body scroll */
        body {
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .desktop-layout {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto;
          }
          .desktop-layout > div:last-child {
            order: -1; /* Preview first on mobile */
            position: relative !important;
            top: 0 !important;
          }

          body {
            overflow: auto; /* Re-enable on mobile */
          }
        }

        @media print {
          @page {
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      {/* Print-only Section */}
      <div className="hidden print:block">
        <LetterPreview
          formData={formData}
          logo={logo}
          signature={signature}
          driversLicense={driversLicense}
        />
      </div>
    </>
  );
}