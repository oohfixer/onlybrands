// CampaignBuilderSection.tsx
import React from 'react';
import DemoFrame from './DemoFrame';
import CampaignBuilderDemo from './CampaignBuilderDemo';

function CampaignBuilderSection() {
  return (
    <section className="section" id="campaign-builder" style={{ background: 'var(--bg-secondary)' }}>
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
            Create Campaigns in Minutes
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: 'var(--text-secondary)', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            Our intuitive campaign builder makes it incredibly easy to post your influencer requirements and start receiving competitive bids.
          </p>
        </div>
        
        <div className="campaign-builder-demo fade-in">
          <DemoFrame
            url="onlybrands.oohfixer.com/create-campaign"
            content={<CampaignBuilderDemo />}
            maxWidth="800px"
            style={{ height: '500px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default CampaignBuilderSection;