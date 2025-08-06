// ProblemSection.tsx
import React from 'react';
import ProblemCard from './ProblemCard';
import CTAButton from './CTAButton';

interface ProblemSectionProps {
  onModalOpen?: (type: string) => void;
}

function ProblemSection({ onModalOpen }: ProblemSectionProps) {
  const problems = [
    {
      iconId: 'discovery-problem',
      title: 'Discovery is Hard',
      description: 'Brands spend weeks searching through databases, reviewing endless profiles, and sending cold outreach messages with low response rates.'
    },
    {
      iconId: 'pricing-problem',
      title: 'Pricing is Opaque',
      description: 'No transparent pricing means brands overpay and influencers undervalue themselves. Negotiations are lengthy and often unfair.'
    },
    {
      iconId: 'process-problem',
      title: 'Process is Slow',
      description: 'Campaign launches take months. Back and forth emails, manual vetting, and complex contracts slow everything down.'
    }
  ];

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('early-access');
  };

  return (
    <section className="section problem-section" id="problem">
      <div className="section-content">
        <div className="fade-in" style={{ 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            marginBottom: '30px' 
          }}>
            The Influencer Marketing Problem
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: 'var(--text-secondary)', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            The current influencer marketing landscape is broken. Brands waste time and money, 
            while influencers struggle to find quality opportunities.
          </p>
        </div>
        
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              iconId={problem.iconId}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
        
        <div className="fade-in" style={{ 
          textAlign: 'center', 
          marginTop: '60px' 
        }}>
          <CTAButton 
            onClick={handleCTAClick}
            style={{ padding: '16px 32px', fontSize: '16px' }}
          >
            Get Early Access
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;