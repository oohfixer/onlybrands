// ============================================
// components/landing/ContactForm.tsx
// ============================================
import React, { useState } from 'react';

interface ContactFormProps {
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      const requestData = {
        ...formData,
        context: 'ob-contact',
        type: 'contact',
        timestamp: new Date().toISOString(),
        source: 'onlybrands-landing'
      };

      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="modal-header">
        <h3 className="modal-title">Get in Touch</h3>
        <p className="modal-subtitle">
          Ready to revolutionize your influencer marketing? Let's discuss how OnlyBrands can transform your campaigns.
        </p>
      </div>
      
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-input"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Optional"
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your influencer marketing goals..."
            required
          />
        </div>
        
        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {showSuccess && (
          <div className="success-message" style={{ display: 'block' }}>
            Thanks for reaching out! I'll get back to you within 24 hours.
          </div>
        )}
        
        {showError && (
          <div className="error-message" style={{ display: 'block' }}>
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </>
  );
}

export default ContactForm;
