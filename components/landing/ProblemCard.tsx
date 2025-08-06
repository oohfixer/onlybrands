// ProblemCard.tsx
import React from 'react';

interface ProblemCardProps {
  iconId: string;
  title: string;
  description: string;
  className?: string;
}

function ProblemCard({ iconId, title, description, className = '' }: ProblemCardProps) {
  return (
    <div className={`problem-card fade-in ${className}`}>
      <svg className="problem-icon" viewBox="0 0 24 24">
        <use href={`#${iconId}`}></use>
      </svg>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProblemCard;