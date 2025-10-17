import React, { useState } from 'react';
import { Upload, Printer, FileText } from 'lucide-react';

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
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'logo') setLogo(reader.result);
        if (type === 'signature') setSignature(reader.result);
        if (type === 'driversLicense') setDriversLicense(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Form Section - Hidden when printing */}
      <div className="print:hidden max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Meta Business Portfolio Recovery Form</h1>
          </div>
          <p className="text-gray-600 mb-8">Fill out the form below to generate your recovery letter</p>

          {/* Business Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone *</label>
                <input
                  type="tel"
                  name="businessPhone"
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main Street, City, State 12345"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contact@business.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Website</label>
                <input
                  type="url"
                  name="businessWebsite"
                  value={formData.businessWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="www.business.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Logo</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                    <Upload className="w-5 h-5" />
                    <span>Upload Logo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'logo')}
                      className="hidden"
                    />
                  </label>
                  {logo && (
                    <div className="flex items-center gap-2 text-green-600">
                      <span className="text-sm">✓ Logo uploaded</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="CEO, Owner, Manager, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company LLC"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Personal Facebook Profile URL *</label>
                <input
                  type="url"
                  name="facebookProfileURL"
                  value={formData.facebookProfileURL}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://facebook.com/yourprofile"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Associated with Facebook Profile *</label>
                <input
                  type="email"
                  name="emailAssociated"
                  value={formData.emailAssociated}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="personal@email.com"
                />
              </div>
            </div>
          </div>

          {/* Meta Business Portfolio Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">Meta Business Portfolio Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Name *</label>
                <input
                  type="text"
                  name="portfolioName"
                  value={formData.portfolioName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Business Portfolio Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio ID *</label>
                <input
                  type="text"
                  name="portfolioID"
                  value={formData.portfolioID}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1234567890"
                />
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">Supporting Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Signature *</label>
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Upload Signature</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'signature')}
                    className="hidden"
                  />
                </label>
                {signature && (
                  <div className="mt-2 text-green-600 text-sm">✓ Signature uploaded</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Driver's License *</label>
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Upload License</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'driversLicense')}
                    className="hidden"
                  />
                </label>
                {driversLicense && (
                  <div className="mt-2 text-green-600 text-sm">✓ Driver's license uploaded</div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <FileText className="w-5 h-5" />
              {showPreview ? 'Hide Preview' : 'Preview Letter'}
            </button>
            {showPreview && (
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Printer className="w-5 h-5" />
                Print Letter
              </button>
            )}
          </div>
        </div>

        {/* Preview Section */}
        {showPreview && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Letter Preview</h2>
            <div className="border-2 border-gray-300 rounded p-8 bg-gray-50">
              <LetterPreview 
                formData={formData} 
                logo={logo} 
                signature={signature} 
                driversLicense={driversLicense} 
              />
            </div>
          </div>
        )}
      </div>

      {/* Print-only Section */}
      <div className="hidden print:block">
        <LetterPreview 
          formData={formData} 
          logo={logo} 
          signature={signature} 
          driversLicense={driversLicense} 
        />
      </div>

      <style>{`
        @media print {
          @page {
            margin: 0.5in;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}

function LetterPreview({ formData, logo, signature, driversLicense }) {
  return (
    <div className="bg-white p-12 print:p-0 text-gray-800 leading-relaxed">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="font-bold text-lg mb-1">{formData.businessName || '[Business Name]'}</div>
          <div className="text-sm">{formData.businessAddress || '[Business Address]'}</div>
          <div className="text-sm">Phone: {formData.businessPhone || '[Business Phone Number]'}</div>
          <div className="text-sm">Email: {formData.businessEmail || '[Business Email]'}</div>
          {formData.businessWebsite && (
            <div className="text-sm">Website: {formData.businessWebsite}</div>
          )}
        </div>
        {logo && (
          <div className="w-32 h-32 border-2 border-gray-300 flex items-center justify-center">
            <img src={logo} alt="Business Logo" className="max-w-full max-h-full object-contain" />
          </div>
        )}
        {!logo && (
          <div className="w-32 h-32 border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Logo Here
          </div>
        )}
      </div>

      {/* Salutation */}
      <div className="mb-6">To whom it may concern,</div>

      {/* Body */}
      <div className="space-y-4 mb-8">
        <p>
          I am <span className="font-medium">{formData.fullName || 'Full Name'}</span>. My Facebook profile is{' '}
          <span className="font-medium">{formData.facebookProfileURL || 'Personal Facebook Profile URL'}</span>, and the email address
          associated with my Facebook account is{' '}
          <span className="font-medium">{formData.emailAssociated || 'Email Associated with Personal Facebook Profile'}</span>.
        </p>

        <p>
          I am the <span className="font-medium">{formData.title || 'TITLE'}</span> of{' '}
          <span className="font-medium">{formData.company || 'Company'}</span>, and it is my authority to request full control of the Meta Business
          Portfolio, <span className="font-medium">{formData.portfolioName || 'Name Business portfolio'} (ID: {formData.portfolioID || ''})</span>.
        </p>

        <p>
          Please add my profile as an admin to the Meta Business Portfolio,{' '}
          <span className="font-medium">{formData.portfolioName || 'Name Business Portfolio'} (ID: {formData.portfolioID || ''})</span>.
        </p>

        <p>
          The person who created the Meta Business Portfolio is unknown; no one in our organization can
          access the portfolio.
        </p>

        <p>
          Given the circumstances, it is imperative to add my Facebook profile,{' '}
          <span className="font-medium">{formData.facebookProfileURL || 'Personal Facebook Profile URL'}</span>, as an admin to the Meta Business Portfolio,{' '}
          <span className="font-medium">{formData.portfolioName || 'Name Business portfolio'} (ID: {formData.portfolioID || ''})</span> as soon as possible.
        </p>

        <p>
          I, <span className="font-medium">{formData.fullName || 'First & Last Name'}</span>, declare under penalty of perjury that the information that I have provided is true
          and accurate.
        </p>
      </div>

      {/* Signature Section */}
      <div className="mb-8">
        <div className="mb-2">Signature,</div>
        {signature && (
          <div className="mb-4">
            <img src={signature} alt="Signature" className="max-w-xs h-20 object-contain" />
          </div>
        )}
        {!signature && (
          <div className="mb-4 text-gray-400 italic text-sm">[Signature will appear here]</div>
        )}
      </div>

      {/* Driver's License Section */}
      <div className="border-t-2 border-gray-300 pt-6">
        <div className="font-medium mb-4">Supporting Documentation: Copy of Driver's License</div>
        {driversLicense && (
          <div>
            <img src={driversLicense} alt="Driver's License" className="max-w-md border border-gray-300" />
          </div>
        )}
        {!driversLicense && (
          <div className="text-gray-400 italic text-sm">[Please include copy of Driver's License here]</div>
        )}
      </div>
    </div>
  );
}