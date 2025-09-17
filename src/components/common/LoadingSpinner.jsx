import React from 'react';

const LoadingSpinner = ({ className = '', label = 'Loading...' }) => (
  <div 
    className={`flex flex-col items-center justify-center py-20 ${className}`}
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <div 
      className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"
      aria-hidden="true"
    />
    <span className="mt-2 text-sm font-medium text-gray-500">
      {label}
    </span>
  </div>
);

export default LoadingSpinner;
