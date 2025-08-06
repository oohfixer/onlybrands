// FAQItem.tsx
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  className?: string;
}

function FAQItem({ question, answer, className = '' }: FAQItemProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item fade-in ${isActive ? 'active' : ''} ${className}`}>
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span className="faq-toggle">+</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;