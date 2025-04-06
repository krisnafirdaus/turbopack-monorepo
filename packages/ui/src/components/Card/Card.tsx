import React from 'react';

export type CardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export const Card = ({ title, children, footer, className = '' }: CardProps) => {
  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md ${className}`}>
      {title && (
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-4 py-5">{children}</div>
      {footer && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
          {footer}
        </div>
      )}
    </div>
  );
};
