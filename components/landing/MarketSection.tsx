// MarketSection.tsx
import React from 'react';
import MarketStatCard from './MarketStatCard';
import CTAButton from './CTAButton';

interface MarketSectionProps {
  onModalOpen?: (type: string) => void;
}

function MarketSection({ onModalOpen }: MarketSectionProps) {
  const marketStats = [
    { number: '$32.55B', label: 'Market Size 2025' },
    { number: '86%', label: 'Marketers Using Influencers' },
    { number: '$6.5', label: 'ROI per Dollar Spent' },
    { number: '35.6%', label: 'YoY Growth Rate' }
  ];

  const whyNowFeatures = [
    {
      iconId: 'chart',
      title: 'Explosive Growth:',
      description: 'Influencer marketing growing 35.6% YoY'
    },
    {
      iconId: 'target',
      title: 'Performance Focus:',
      description: 'Brands demand measurable ROI'
    },
    {
      iconId: 'gear',
      title: 'Efficiency Demand:',
      description: 'Current tools are too slow and expensive'
    },
    {
      iconId: 'globe',
      title: 'Global Scale:',
      description: 'Remote work normalizes global collaboration'
    }
  ];

  const handleInvestmentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('investment');
  };

  return (
    <section className="section market-section" id="market">
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
            A $32.55B Market Opportunity
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: 'var(--text-secondary)', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            Influencer marketing is exploding, but the infrastructure is outdated. 
            OnlyBrands is building the modern marketplace this industry needs.
          </p>
        </div>
        
        <div className="market-stats">
          {marketStats.map((stat, index) => (
            <MarketStatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
        
        <div className="fade-in" style={{ 
          textAlign: 'center', 
          margin: '60px 0' 
        }}>
          <CTAButton 
            onClick={handleInvestmentClick}
            style={{ padding: '16px 32px', fontSize: '16px' }}
          >
            Explore Investment
          </CTAButton>
        </div>
        
        <div className="section-grid">
          <div className="section-text fade-in">
            <h2>Why Now?</h2>
            <p>
              The convergence of several trends makes this the perfect time to revolutionize influencer marketing:
            </p>
            <ul className="feature-list">
              {whyNowFeatures.map((feature, index) => (
                <li key={index}>
                  <svg className="feature-icon icon">
                    <use href={`#${feature.iconId}`}></use>
                  </svg>
                  <span>
                    <strong>{feature.title}</strong> {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="fade-in">
            <div className="pricing-card">
              <div className="pricing-number">3x</div>
              <div style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'var(--accent-primary)', 
                marginTop: '-10px' 
              }}>
                Faster
              </div>
              <div className="pricing-description">
                Average time from campaign post to influencer selection
              </div>
              <div className="pricing-breakdown">
                <div className="breakdown-item">
                  <div className="breakdown-percentage">72hrs</div>
                  <div className="breakdown-label">Traditional</div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-percentage">24hrs</div>
                  <div className="breakdown-label">OnlyBrands</div>
                </div>
              </div>
              <p style={{ 
                color: 'var(--text-tertiary)', 
                fontSize: '14px', 
                marginTop: '30px' 
              }}>
                Competitive marketplace pricing • Transparent bidding • Real-time results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketSection;