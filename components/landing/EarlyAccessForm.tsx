// ============================================
// components/landing/EarlyAccessForm.tsx
// ============================================
import React, { useState } from 'react';

interface EarlyAccessFormProps {
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  use_case: string;
}

function EarlyAccessForm({ onSuccess }: EarlyAccessFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    use_case: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        type: 'early-access',
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
        role: '',
        use_case: ''
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
        <h3 className="modal-title">Get Early Access</h3>
        <p className="modal-subtitle">
          Be among the first to experience the future of influencer marketing. Join our early access program.
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
            required
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Your Role</label>
          <select
            className="form-select"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select your role</option>
            <option value="brand-manager">Brand Manager</option>
            <option value="marketing-director">Marketing Director</option>
            <option value="agency-owner">Agency Owner</option>
            <option value="influencer">Influencer</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-field">
          <label className="form-label">How will you use OnlyBrands?</label>
          <textarea
            className="form-textarea"
            name="use_case"
            value={formData.use_case}
            onChange={handleInputChange}
            placeholder="Describe your influencer marketing goals and how OnlyBrands could help..."
            required
          />
        </div>
        
        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Requesting Access...' : 'Request Early Access'}
        </button>
        
        {showSuccess && (
          <div className="success-message" style={{ display: 'block' }}>
            You're on the list! I'll send you early access details soon.
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

export default EarlyAccessForm;
