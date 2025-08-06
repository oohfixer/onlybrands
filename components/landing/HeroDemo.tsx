// HeroDemo.tsx
import React from 'react';

function HeroDemo() {
  return (
    <div style={{ 
      padding: '30px', 
      background: 'var(--bg-primary)', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '25px' 
      }}>
        <h3 style={{ 
          color: 'var(--text-primary)', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          Nike Air Max Campaign
        </h3>
        <span style={{ 
          background: 'var(--success)', 
          color: 'white', 
          padding: '4px 12px', 
          borderRadius: '4px', 
          fontSize: '12px', 
          fontWeight: '600' 
        }}>
          LIVE
        </span>
      </div>
      
      <div style={{ 
        background: 'var(--bg-tertiary)', 
        border: '1px solid var(--border-primary)', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '20px' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '15px' 
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Budget Range</div>
          <div style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: '700', 
            fontSize: '16px' 
          }}>
            $5,000 - $15,000
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '15px' 
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Current Bids</div>
          <div style={{ 
            color: 'var(--text-primary)', 
            fontWeight: '600', 
            fontSize: '16px' 
          }}>
            23 active
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Average Bid</div>
          <div style={{ 
            color: 'var(--success)', 
            fontWeight: '700', 
            fontSize: '16px' 
          }}>
            $8,450
          </div>
        </div>
      </div>
      
      <div style={{ 
        background: 'var(--bg-secondary)', 
        border: '1px solid var(--border-primary)', 
        borderRadius: '8px', 
        padding: '15px', 
        marginBottom: '20px' 
      }}>
        <div style={{ 
          color: 'var(--text-primary)', 
          fontWeight: '600', 
          marginBottom: '10px', 
          fontSize: '14px' 
        }}>
          Latest Bid
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px' 
        }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            background: 'var(--accent-primary)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '12px' 
          }}>
            E
          </div>
          <div style={{ flex: '1' }}>
            <div style={{ 
              color: 'var(--text-primary)', 
              fontWeight: '600', 
              fontSize: '14px' 
            }}>
              @EmmaFitness
            </div>
            <div style={{ 
              color: 'var(--text-tertiary)', 
              fontSize: '12px' 
            }}>
              185K followers • 4.9★
            </div>
          </div>
          <div style={{ 
            color: 'var(--success)', 
            fontWeight: '700', 
            fontSize: '16px' 
          }}>
            $7,200
          </div>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginTop: 'auto' 
      }}>
        <button style={{ 
          flex: '1', 
          background: 'var(--bg-quaternary)', 
          color: 'var(--text-primary)', 
          border: '1px solid var(--border-primary)', 
          padding: '10px', 
          borderRadius: '6px', 
          fontSize: '14px', 
          cursor: 'pointer' 
        }}>
          View All Bids
        </button>
        <button style={{ 
          flex: '1', 
          background: 'var(--accent-primary)', 
          color: 'white', 
          border: 'none', 
          padding: '10px', 
          borderRadius: '6px', 
          fontSize: '14px', 
          fontWeight: '600', 
          cursor: 'pointer' 
        }}>
          Select Winner
        </button>
      </div>
    </div>
  );
}

export default HeroDemo;