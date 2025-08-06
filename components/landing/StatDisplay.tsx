// StatDisplay.tsx
import React from 'react';

interface StatDisplayProps {
  number: string;
  label: string;
  className?: string;
}

function StatDisplay({ number, label, className = '' }: StatDisplayProps) {
  return (
    <div className={`stat ${className}`}>
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default StatDisplay;