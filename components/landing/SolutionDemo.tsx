// SolutionDemo.tsx
import React from 'react';

function SolutionDemo() {
  const bids = [
    {
      name: '@TechReviewer_Mike',
      followers: '425K followers',
      amount: '$12,500',
      time: '2 min ago'
    },
    {
      name: '@StyleInfluencer_Sarah',
      followers: '290K followers',
      amount: '$9,800',
      time: '5 min ago'
    },
    {
      name: '@FitnessGuru_Alex',
      followers: '156K followers',
      amount: '$7,200',
      time: '8 min ago'
    }
  ];

  return (
    <div style={{ 
      padding: '20px', 
      background: 'var(--bg-primary)', 
      height: '100%', 
      overflowY: 'auto' 
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ 
          color: 'var(--text-primary)', 
          fontSize: '16px', 
          fontWeight: '600', 
          marginBottom: '15px' 
        }}>
          Real Time Bid Activity
        </h4>
        
        <div>
          {bids.map((bid, index) => (
            <div
              key={index}
              style={{ 
                background: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-primary)', 
                borderRadius: '6px', 
                padding: '12px', 
                marginBottom: '8px' 
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <div>
                  <span style={{ 
                    color: 'var(--text-primary)', 
                    fontWeight: '600', 
                    fontSize: '14px' 
                  }}>
                    {bid.name}
                  </span>
                  <div style={{ 
                    color: 'var(--text-tertiary)', 
                    fontSize: '12px' 
                  }}>
                    {bid.followers}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ 
                    color: 'var(--success)', 
                    fontWeight: '700' 
                  }}>
                    {bid.amount}
                  </div>
                  <div style={{ 
                    color: 'var(--text-tertiary)', 
                    fontSize: '11px' 
                  }}>
                    {bid.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ 
        background: 'var(--bg-secondary)', 
        border: '1px solid var(--border-primary)', 
        borderRadius: '8px', 
        padding: '15px', 
        marginTop: '20px' 
      }}>
        <div style={{ 
          color: 'var(--text-primary)', 
          fontWeight: '600', 
          marginBottom: '10px', 
          fontSize: '14px' 
        }}>
          Campaign Analytics
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '15px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              color: 'var(--accent-primary)', 
              fontSize: '20px', 
              fontWeight: '700' 
            }}>
              35%
            </div>
            <div style={{ 
              color: 'var(--text-tertiary)', 
              fontSize: '11px' 
            }}>
              Below Budget
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              color: 'var(--accent-primary)', 
              fontSize: '20px', 
              fontWeight: '700' 
            }}>
              3.2M
            </div>
            <div style={{ 
              color: 'var(--text-tertiary)', 
              fontSize: '11px' 
            }}>
              Total Reach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionDemo;