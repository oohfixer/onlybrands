// ============================================
// components/landing/DemoFrame.tsx
// ============================================
import React from 'react';

interface DemoFrameProps {
  url: string;
  content: React.ReactNode;
  className?: string;
}

function DemoFrame({ url, content, className = '' }: DemoFrameProps) {
  return (
    <div className={`bg-surface-secondary border border-border-secondary rounded-lg overflow-hidden shadow-lg ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-surface-tertiary border-b border-border-secondary px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-surface-primary rounded px-3 py-1 text-sm text-text-secondary">
          {url}
        </div>
      </div>
      
      {/* Demo Content */}
      <div className="min-h-[400px]">
        {content}
      </div>
    </div>
  );
}

export default DemoFrame;
