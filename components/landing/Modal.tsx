// Modal.tsx
import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import EarlyAccessForm from './EarlyAccessForm';
import InvestmentForm from './InvestmentForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'early-access' | 'investment';
}

function Modal({ isOpen, onClose, type }: ModalProps) {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderForm = () => {
    switch (type) {
      case 'early-access':
        return <EarlyAccessForm onSuccess={onClose} />;
      case 'investment':
        return <InvestmentForm onSuccess={onClose} />;
      case 'contact':
      default:
        return <ContactForm onSuccess={onClose} />;
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-container">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {renderForm()}
      </div>
    </div>
  );
}

export default Modal;