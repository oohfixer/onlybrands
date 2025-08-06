// MarketStatCard.tsx
import React from 'react';

interface MarketStatCardProps {
  number: string;
  label: string;
  className?: string;
}

function MarketStatCard({ number, label, className = '' }: MarketStatCardProps) {
  return (
    <div className={`market-stat fade-in ${className}`}>
      <div className="market-stat-number">{number}</div>
      <div className="market-stat-label">{label}</div>
    </div>
  );
}

export default MarketStatCard;