// InvestmentForm.tsx
import React, { useState } from 'react';

interface InvestmentFormProps {
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  entity: string;
  investment_range: string;
  focus: string;
}

function InvestmentForm({ onSuccess }: InvestmentFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    entity: '',
    investment_range: '',
    focus: ''
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
        type: 'investment',
        timestamp: new Date().toISOString(),
        source: 'onlybrands-landing'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          entity: '',
          investment_range: '',
          focus: ''
        });
        
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
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
        <h3 className="modal-title">Investment Opportunity</h3>
        <p className="modal-subtitle">
          Interested in investing in the future of influencer marketing? Let's discuss how OnlyBrands can deliver exceptional returns.
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
          <label className="form-label">Investment Entity</label>
          <input 
            type="text" 
            className="form-input" 
            name="entity"
            value={formData.entity}
            onChange={handleInputChange}
            placeholder="Fund, Company, or Individual"
            required 
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Investment Range</label>
          <select 
            className="form-select" 
            name="investment_range"
            value={formData.investment_range}
            onChange={handleInputChange}
            required
          >
            <option value="">Select investment range</option>
            <option value="25k-100k">$25k - $100k</option>
            <option value="100k-500k">$100k - $500k</option>
            <option value="500k-1m">$500k - $1M</option>
            <option value="over-1m">Over $1M</option>
          </select>
        </div>
        
        <div className="form-field">
          <label className="form-label">Investment Focus</label>
          <textarea 
            className="form-textarea" 
            name="focus"
            value={formData.focus}
            onChange={handleInputChange}
            placeholder="What sectors do you typically invest in? What interests you about OnlyBrands?"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit Investment Inquiry'}
        </button>
        
        {showSuccess && (
          <div className="success-message" style={{ display: 'block' }}>
            Thanks for your interest! I'll be in touch within 24 hours.
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

export default InvestmentForm;