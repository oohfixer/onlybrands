// CampaignBuilderDemo.tsx
import React from 'react';

function CampaignBuilderDemo() {
  return (
    <div style={{ 
      padding: '30px', 
      background: 'var(--bg-primary)', 
      height: '100%', 
      overflowY: 'auto' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px' 
      }}>
        <h3 style={{ 
          color: 'var(--text-primary)', 
          fontSize: '24px', 
          fontWeight: '700', 
          margin: '0' 
        }}>
          Create New Campaign
        </h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ 
            background: 'var(--bg-quaternary)', 
            color: 'var(--text-secondary)', 
            border: '1px solid var(--border-primary)', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            fontSize: '14px' 
          }}>
            Save Draft
          </button>
          <button style={{ 
            background: 'var(--accent-primary)', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            fontSize: '14px', 
            fontWeight: '600' 
          }}>
            Publish Campaign
          </button>
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '30px' 
      }}>
        {/* Left Column */}
        <div>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Campaign Title
            </label>
            <input 
              type="text" 
              defaultValue="Summer Activewear Collection Launch" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid var(--border-primary)', 
                borderRadius: '6px', 
                background: 'var(--bg-tertiary)', 
                color: 'var(--text-primary)', 
                fontSize: '14px' 
              }} 
            />
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Description
            </label>
            <textarea 
              defaultValue="Looking for fitness and lifestyle influencers to showcase our new summer activewear line. Focus on authenticity and engagement over follower count."
              style={{ 
                width: '100%', 
                height: '100px', 
                padding: '12px', 
                border: '1px solid var(--border-primary)', 
                borderRadius: '6px', 
                background: 'var(--bg-tertiary)', 
                color: 'var(--text-primary)', 
                fontSize: '14px', 
                resize: 'vertical' 
              }} 
            />
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '15px', 
            marginBottom: '25px' 
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                color: 'var(--text-primary)', 
                fontWeight: '600', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Min Budget
              </label>
              <input 
                type="text" 
                defaultValue="$2,500" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid var(--border-primary)', 
                  borderRadius: '6px', 
                  background: 'var(--bg-tertiary)', 
                  color: 'var(--text-primary)', 
                  fontSize: '14px' 
                }} 
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                color: 'var(--text-primary)', 
                fontWeight: '600', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Max Budget
              </label>
              <input 
                type="text" 
                defaultValue="$8,000" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid var(--border-primary)', 
                  borderRadius: '6px', 
                  background: 'var(--bg-tertiary)', 
                  color: 'var(--text-primary)', 
                  fontSize: '14px' 
                }} 
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Platforms
            </label>
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              flexWrap: 'wrap' 
            }}>
              {['Instagram', 'TikTok', 'YouTube', 'Twitter'].map((platform, index) => (
                <label 
                  key={platform}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px' 
                  }}
                >
                  <input 
                    type="checkbox" 
                    defaultChecked={index < 2} 
                    style={{ accentColor: 'var(--accent-primary)' }} 
                  />
                  {platform}
                </label>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Target Audience
            </label>
            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              flexWrap: 'wrap' 
            }}>
              <span style={{ 
                background: 'var(--accent-primary)', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: '600' 
              }}>
                Fitness
              </span>
              <span style={{ 
                background: 'var(--accent-primary)', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: '600' 
              }}>
                Lifestyle
              </span>
              <span style={{ 
                background: 'var(--bg-quaternary)', 
                color: 'var(--text-secondary)', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                border: '1px solid var(--border-primary)' 
              }}>
                + Add Tag
              </span>
            </div>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Requirements
            </label>
            <div style={{ 
              background: 'var(--bg-tertiary)', 
              border: '1px solid var(--border-primary)', 
              borderRadius: '6px', 
              padding: '15px' 
            }}>
              {[
                'Minimum 10K followers',
                '3%+ engagement rate',
                'Previous brand partnerships'
              ].map((requirement, index) => (
                <div 
                  key={requirement}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: index < 2 ? '10px' : '0' 
                  }}
                >
                  <input 
                    type="checkbox" 
                    defaultChecked={index < 2} 
                    style={{ accentColor: 'var(--accent-primary)' }} 
                  />
                  <span style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px' 
                  }}>
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '8px', 
              fontSize: '14px' 
            }}>
              Bidding Deadline
            </label>
            <input 
              type="date" 
              defaultValue="2025-08-15" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid var(--border-primary)', 
                borderRadius: '6px', 
                background: 'var(--bg-tertiary)', 
                color: 'var(--text-primary)', 
                fontSize: '14px' 
              }} 
            />
          </div>
          
          <div style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-primary)', 
            borderRadius: '8px', 
            padding: '20px' 
          }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              marginBottom: '15px', 
              fontSize: '16px' 
            }}>
              Campaign Preview
            </h4>
            <div style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '14px', 
              lineHeight: '1.5' 
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>
                Summer Activewear Collection Launch
              </strong><br />
              Budget: $2,500 - $8,000<br />
              Platforms: Instagram, TikTok<br />
              Deadline: Aug 15, 2025<br />
              <span style={{ 
                marginTop: '10px', 
                display: 'block', 
                fontSize: '12px', 
                color: 'var(--text-tertiary)' 
              }}>
                This campaign will go live immediately and start receiving bids.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignBuilderDemo;